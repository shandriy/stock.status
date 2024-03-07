// window.onresize = Graph([mCountGraph[0], [mCountGraph[1][0], mCountGraph[1][1], [window.innerHeight, window.innerWidth]]]);
function Graph(array)
{
  document.getElementById(array[1][0]).setAttribute("height", array[1][2][0]);
  document.getElementById(array[1][0]).setAttribute("width", array[1][2][1]);
  let counter = 0;
  let rsltStr = "";
  while(counter < array[0].length / 2)
  {
    rsltStr += `<polyline id="${array[1][0] + counter}" style="fill:#${array[0][counter * 2]}38;stroke:none;stroke-width:${array[1][1][1]}px"/>`;
    counter++;
  }
  counter = 0;
  while(counter < array[0].length / 2)
  {
    rsltStr += `<text x="${counter * 60 + 5}" y="${array[1][2][0] - array[0][(counter + 1) * 2 - 1][0] * (array[1][2][0] - array[1][1][1]) / array[1][1][0] - array[1][1][1] / 2 - 5}"
       fill="#${array[0][counter * 2]}" stroke="black" stroke-width="0.2" font-size="20">
      ${array[2][counter]}</text>`;
    rsltStr += `<text x="${array[1][2][1] - 5}" y="${array[1][2][0] - array[0][(counter + 1) * 2 - 1][array[0][(counter + 1) * 2 - 1].length - 1]
       * (array[1][2][0] - array[1][1][1]) / array[1][1][0] - array[1][1][1] / 2 - 5}"
       fill="#${array[0][counter * 2]}" stroke="black" stroke-width="0.2" font-size="20" text-anchor="end">
      ${array[0][(counter + 1) * 2 - 1][array[0][(counter + 1) * 2 - 1].length - 1]}</text>`;
    counter++;
  }
  document.getElementById(array[1][0]).innerHTML = rsltStr;
  let primaryCounter = 0;
  while(primaryCounter < array[0].length / 2)
  {
    counter = 0;
    rsltStr = `${array[1][1][1] / -2},${array[1][2][0]}
    ${array[1][1][1] / -2},${array[1][2][0] - array[0][(primaryCounter + 1) * 2 - 1][0] * (array[1][2][0] - array[1][1][1]) / array[1][1][0] - array[1][1][1] / 2} `;
    while(counter < array[0][(primaryCounter + 1) * 2 - 1].length)
    {
      rsltStr += `${counter / (array[0][(primaryCounter + 1) * 2 - 1].length - 1) * array[1][2][1]},
      ${array[1][2][0] - array[0][(primaryCounter + 1) * 2 - 1][counter] * (array[1][2][0] - array[1][1][1]) / array[1][1][0] - array[1][1][1] / 2} `;
      counter++;
    }
    rsltStr += `${array[1][2][1] + array[1][1][1]},${array[1][2][0] - array[0][(primaryCounter + 1) * 2 - 1][array[0][(primaryCounter + 1) * 2 - 1].length - 1]
       * (array[1][2][0] - array[1][1][1]) / array[1][1][0] - array[1][1][1] / 2}
    ${array[1][2][1] + array[1][1][1]},${array[1][2][0]}`
    document.getElementById(array[1][0] + primaryCounter).setAttribute("points", rsltStr);
    primaryCounter++;
  }
}
function FillGraphs()
{
  Graph(mCountGraph);
  Graph(pCountGraph);
  Graph(FFOGown);
  Graph(CSEAown);
  Graph(NPROown);
  Graph(STACown);
}
function Toggle(toggle, titleG)
{
  document.getElementById("mCountGraph").classList.add("hidden");
  document.getElementById("pCountGraph").classList.add("hidden");
  document.getElementById("status").classList.add("hidden");
  document.getElementById(toggle).classList.remove("hidden");
  document.getElementById("titleG").innerHTML = titleG;
}
