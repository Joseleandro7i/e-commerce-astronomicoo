import React from "react";
import Separator from "../ui/separator";

export default function Prices(): React.JSX.Element {

    const WhatThisPlanOffer = {
        planBasic: {
            nameOfThePlan: "Basic Plan",
            valueOfThePlan: "R$ 200",
            benefitsOfThisPlan: {

                one: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
                two: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
                trer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
            }
        },
        planAdvanced: {
            nameOfThePlan: "Advanced Plan",
            valueOfThePlan: "R$ 500",
            benefitsOfThisPlan: {
                one: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
                two: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
                trer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
                four: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
            }
        },
        planTheBest: {
            nameOfThePlan: "The Best Plan",
            valueOfThePlan: "R$ 700",
            benefitsOfThisPlan: {
                one: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
                two: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
                trer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
                four: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
                five: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
            }
        }

    }


    return (
        <div className="flex flex-col justify-center items-start">
            <div className="w-40 ml-4">
                <h2 className="text-3xl sd:text-4xl font-semibold mb-1">The Palns </h2>
                <Separator orientation="horizontal" widthOfSeparator="w-full" />
            </div>

            <div className="flex flex-col mt-4 h-auto w-full justify-around items-center
                        lg:flex-row">

                {Object.values(WhatThisPlanOffer).map((element, index) => (
                    <div key={index} className="mt-6 mb-4 bg-charcoal-gray w-10/12 h-auto items-start justify-around flex flex-col
                                            lg:w-[30%]">
                        <h2 className="text-2xl text-center mt-3 mb-1 px-2"> {element.nameOfThePlan} </h2>

                        <div className="mb-4">

                            <h2 className="text-2xl mt-2 ml-6"> {element.valueOfThePlan}/Month </h2>
                            <Separator orientation="horizontal" widthOfSeparator="w-[92%]" />
                        </div>

                        <div className="w-full flex flex-col items-center sd:w-11/12 h-auto sd:h-48 mt-4 mb-2 sd:ml-6">
                            <h2 className="text-[19px] mb-4">What Have In Thsi Plan: </h2>

                            {Object.entries(element.benefitsOfThisPlan).map(([key, value]) => (
                                <div key={key} className="mb-1 ml-2 mt-1 py-2">
                                    {value}
                                </div>
                            ))}

                        </div>

                        <button className="text-2xl ml-6 mb-4 mt-3 bg-slate-200 text-black rounded-sm p-1 sd:p-2">I Wnat This Plan</button>

                    </div>
                ))}
            </div>
        </div>
    )
}