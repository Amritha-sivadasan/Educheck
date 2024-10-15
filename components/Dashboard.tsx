"use client";
import React, { useEffect, useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { getQuestions } from "@/app/api/data/data";


interface Question {
    id: string;
    question: string;
    options: Array<{ id: string; option: string }>;
  }

const TOTAL_QUESTIONS = 30; 

const Dashboard = () => {

  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);



  useEffect(() => {
    fetchQuestion(currentPage);
  }, [currentPage]);

  const fetchQuestion = async (page: number) => {
    setLoading(true);
    try {
      const questions = await getQuestions();
      setCurrentQuestion(questions[page - 1]);
    } catch (error) {
      console.error("Error fetching question:", error);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const handleAnswerChange = (questionId: string, answer: string) => {
    setSelectedAnswers(prev => ({ ...prev, [questionId]: answer }));
  };
  const handleNext = () => {
    if (currentPage < TOTAL_QUESTIONS) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  return (
    <div className="flex flex-col md:flex-row justify-center gap-4 h-[600px] p-4">
    <div className="bg-white w-full md:w-3/12 overflow-hidden rounded-lg shadow">
      <h1 className="text-lg font-semibold p-4">Overview</h1>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <div className="flex flex-wrap gap-2 p-4">
              {Array.from({ length: TOTAL_QUESTIONS }, (_, i) => (
                <PaginationLink
                  key={i}
                  href="#"
                  onClick={() => handlePageChange(i + 1)}
                  className={currentPage === i + 1 ? "bg-blue-500 text-white" : ""}
                >
                  {i + 1}
                </PaginationLink>
              ))}
            </div>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>

    <div className="bg-white w-full md:w-7/12 flex flex-col rounded-lg shadow">
      <div className="flex-grow flex flex-col">
        {loading ? (
          <div className="flex items-center justify-center h-full">
            <p>Loading question...</p>
          </div>
        ) : currentQuestion ? (
          <Card className="w-full mx-auto max-w-[600px]">
            <CardContent className="p-6">
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">MCQ</h3>
                <p className="mb-4">{currentQuestion.question}</p>
                <RadioGroup
                  onValueChange={(value) => handleAnswerChange(currentQuestion.id, value)}
                  value={selectedAnswers[currentQuestion.id] || ""}
                >
                  {currentQuestion.options.map((option) => (
                    <div key={option.id} className="flex items-center space-x-2 mb-2">
                      <RadioGroupItem
                        value={option.id}
                        id={`option-${option.id}`}
                      />
                      <Label htmlFor={`option-${option.id}`}>{option.option}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="flex items-center justify-center h-full">
            <p>No question available.</p>
          </div>
        )}
      </div>

      <div className="flex justify-between mt-4 p-4">
        <Button onClick={handlePrevious} disabled={currentPage === 1}>
          Previous
        </Button>
        <Button onClick={handleNext} disabled={currentPage === TOTAL_QUESTIONS}>
          Next
        </Button>
      </div>
    </div>
  </div>
  );
};

export default Dashboard;
