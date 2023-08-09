import React from "react";
import "./bootstrap.css";
import image from "../images/Weilin.jpg";

const Birthday = () => {
    return (
        <div class="container my-5">
            <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                <div class="col-lg-5 p-3 p-lg-5 pt-lg-3">
                    <h1 class="mb-3">Happy Birthday Weilin!</h1>
                    <p class="lead">Dear Weilin,</p>
                    <p class="lead">
                        Happy birthday! I hope you've been having an awesome day
                        because you deserve it. 😄
                    </p>
                    <p class="lead">
                        I feel so grateful that you're one of the closest
                        friends I've ever had! I know I've said it before, but
                        you are so funny, smart, selfless, and genuine, and your
                        cheerfulness always brightens my day.
                    </p>
                    <p class="lead">
                        I tried to include all of our favorite memories, but it
                        was really hard to fit everything into a crossword
                        puzzle because there were so many.
                    </p>
                    <p class="lead">
                        I think often about all the times we sang songs, tried
                        new food, explored Philly, and talked together. Although
                        we're far away now, I'm so glad we've still been able to
                        hang out. I miss you so much, Weilin, but I know we'll
                        see each other again soon!
                    </p>

                    <p class="lead">Justin</p>
                </div>
                <div class="col-lg-6 offset-lg-1 p-0 overflow-hidden shadow-lg">
                    <img class="rounded-lg-3" src={image} alt="" width="720" />
                </div>
            </div>
        </div>
    );
};

export default Birthday;
