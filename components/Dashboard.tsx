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
import { ChevronLeft, ChevronRight, Flag } from "lucide-react";
import Timer from "./Timer";
import Link from "next/link";

interface Question {
  id: string;
  question: string;
  options: Array<{ id: string; option: string }>;
}

const TOTAL_QUESTIONS = 30;

const Dashboard = () => {
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<string, string>
  >({});
  const [loading, setLoading] = useState(false);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    fetchQuestion(currentPage);
  }, [currentPage]);

  useEffect(() => {
    setTotalCount((prev) => prev + 1);
  }, [selectedAnswers]);

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
    setSelectedAnswers((prev) => ({ ...prev, [questionId]: answer }));
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
  };

  return (
    <div className="flex flex-col  md:flex-row justify-center gap-4 h-[600px] ">
      <div className="bg-white w-full md:w-3/12 overflow-hidden rounded-lg shadow p-2">
        <div className=" mb-4 ">
          {" "}
          <h1 className="text-lg font-semibold p-4 border-b">Overview</h1>
        </div>

        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <div className="flex flex-wrap items-center gap-2">
                {Array.from({ length: TOTAL_QUESTIONS }, (_, i) => {
                  const questionId = `q${i + 1}`;
                  const isAnswered = !!selectedAnswers[questionId];

                  return (
                    <PaginationLink
                      key={i}
                      href="#"
                      onClick={() => handlePageChange(i + 1)}
                      className={
                        currentPage === i + 1 && isAnswered
                          ? "bg-green-500"
                          : currentPage === i + 1
                          ? "border border-orange-400 text-gray-950"
                          : isAnswered
                          ? "bg-green-500 text-white"
                          : "text-gray-500 bg-secondary"
                      }
                    >
                      {i + 1}
                    </PaginationLink>
                  );
                })}
              </div>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>

      <div className="bg-white w-full md:w-7/12 flex flex-col rounded-lg shadow">
        <div className="flex-grow flex flex-col">
          <div className="mt-6 flex w-full justify-between">
            <p className="ms-9 text-sm mt-3">
              MCQ - <span className="text-red-500">{currentQuestion?.id}</span>
            </p>
            <div className="me-10 ">
              {" "}
              <Timer />{" "}
            </div>
          </div>
          {loading ? (
            <div className="flex items-center mx-auto justify-center  h-full max-w-[600px]">
              <p>Loading question...</p>
            </div>
          ) : currentQuestion ? (
            <>
              <Card className="w-full mx-auto max-w-[600px]">
                <CardContent className="p-6">
                  <div className=" border-b mb-4">
                    {" "}
                    <p className="mb-4 font-semibold text-lg">
                      {currentQuestion.question}
                    </p>
                  </div>

                  <RadioGroup
                    onValueChange={(value) =>
                      handleAnswerChange(currentQuestion.id, value)
                    }
                    value={selectedAnswers[currentQuestion.id] || ""}
                  >
                    {currentQuestion.options.map((option, index) => (
                      <div
                        key={option.id}
                        className="flex items-center text-gray-500 space-x-3 mb-5"
                      >
                        <RadioGroupItem
                          value={option.id}
                          id={`option-${option.id}`}
                          label={String.fromCharCode(65 + index)}
                        />

                        <Label htmlFor={`option-${option.id}`}>
                          {option.option}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </CardContent>
              </Card>
            </>
          ) : (
            <div className="flex items-center justify-center h-full">
              <p>No question available.</p>
            </div>
          )}
        </div>

        <div className="flex justify-between mt-4 p-4 border ">
          <div className="">
            <Link href={"/Result"}>
              <Button disabled={totalCount < TOTAL_QUESTIONS / 2}>
                End and Submit
              </Button>
            </Link>
          </div>

          <div className="flex justify-between gap-2 ">
            <Button
              onClick={handlePrevious}
              variant={"secondary"}
              disabled={currentPage === 1}
              className={`  flex gap-2`}
            >
              <ChevronLeft size={15} />
              <span className="hidden md:block sm:block lg:block">
                Previous
              </span>
            </Button>

            <Button
              variant={"secondary"}
              className="flex justify-between gap-2"
            >
              <span>Flag</span>
              <Flag size={15} />
            </Button>
            <Button
              variant={"secondary"}
              onClick={handleNext}
              disabled={currentPage === TOTAL_QUESTIONS}
              className="flex gap-2"
            >
              <span className="hidden md:block sm:block lg:block">Next</span>
              <ChevronRight size={15} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
