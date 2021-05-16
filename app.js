import { jsonPromise } from "./api.js";

const printGdp = () => {
  jsonPromise.then((a) => {
    console.log(a);
    // Do stuff here
  });
};

const w = 500;
const h = 500;
const padding = 15;
const svg = d3.select("body").append("svg").attr("width", w).attr("height", h);

svg
  .append("text")
  .text("title")
  .attr("x", w / 2)
  .attr("y", padding)
  .attr("id", "title")
  .style("font-size", "16px")
  .text("Title");
