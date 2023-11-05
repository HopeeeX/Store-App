'use client'
import React, {useState} from "react";
import Bag1 from "../../assets/images/bag1.jpeg";
import Bag2 from "../../assets/images/bag2.jpeg";
import Bag3 from "../../assets/images/bag3.jpeg";
import Bag4 from "../../assets/images/bag4.jpeg";
import Navbar from "../../components/Navbar";
import Card from "../../components/Card";


function Dashboard() {


    const products = [
    {
        title: "Mini Satchel Bag",
        description:"Heart decor lightweight textured flap square bag with top handle",
        image: Bag1,
    },
    {
        title: "Faux Pearl Satchel Bag",
        description:"Versatile and elegant accessory with a faux pearl-adorned flap, chain strap, making it functional choice for various occasions",
        image: Bag2,
    },
    {
        title: "Pink Satchel Bag",
        description:"Versatile fashion accessory designed in a lovely shade of pink, featuring a satchel-style design that combines functionality and aesthetic appeal",
        image: Bag3,
    },
    {
        title: "Purple Donut Handbag",
        description:"Whimsical and eye-catching fashion accessory that combines the charm of a donut-shaped design with a rich shade of purple",
        image: Bag4,
    },
];



    return (
        <>
        <Navbar />
            <div className="bg-[#F6F6F6] flex justify-center items-start mt-[70px]">
                <div className="grid-container">
                    {products.map((product, index) => (
                    <Card
                        key={index}
                        title={product.title}
                        description={product.description}
                        image={product.image}
                        />))}
                    <div className="mb-[40px]"></div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;
