// add your JavaScript/D3 to this file

// Example dataset
const data = [
  { latitude: 40.6706974, longitude: -73.890719834, date: '2020-07-15' },
  { latitude: 40.6690221910001, longitude: -73.9591611129999, date: '2020-07-15' },
  { latitude: 40.594872653, longitude: -73.940816625, date: '2020-07-03' },
  { latitude: 40.656598197, longitude: -73.881628137, date: '2020-07-13' },
  { latitude: 40.672251084, longitude: -73.961031909, date: '2020-07-15' },
  { latitude: 40.6605193980001, longitude: -73.8834537509999, date: '2020-07-16' },
  { latitude: 40.7180905280001, longitude: -73.964913312, date: '2020-07-21' },
  { latitude: 40.6782419250001, longitude: -73.895509252, date: '2020-07-26' },
  { latitude: 40.64633911, longitude: -74.0108361979999, date: '2020-07-28' },
  { latitude: 40.68376548, longitude: -73.9709873849999, date: '2020-07-18' },
  { latitude: 40.6489399700001, longitude: -73.884947439, date: '2020-07-08' },
  { latitude: 40.667532399, longitude: -73.864249619, date: '2020-07-07' },
  { latitude: 40.652389311, longitude: -73.8837562639999, date: '2020-07-11' },
  { latitude: 40.6849318280001, longitude: -73.9488065689999, date: '2020-07-03' },
  { latitude: 40.687000391, longitude: -73.937343653, date: '2020-07-16' },
  { latitude: 40.651195186, longitude: -73.896919936, date: '2020-07-04' },
  { latitude: 40.674676848, longitude: -73.940207076, date: '2020-07-28' },
  { latitude: 40.6782419250001, longitude: -73.895509252, date: '2020-07-26' },
  { latitude: 40.634101559, longitude: -73.9579728109999, date: '2020-07-07' },
  { latitude: 40.6333118200001, longitude: -73.921151735, date: '2020-07-02' },
  { latitude: 40.698912502, longitude: -73.9499147179999, date: '2020-07-12' },
  { latitude: 40.66081576, longitude: -73.909921456, date: '2020-07-13' },
  { latitude: 40.672251084, longitude: -73.961031909, date: '2020-07-15' },
  { latitude: 40.684280802, longitude: -73.989343959, date: '2020-07-17' },
  { latitude: 40.667532399, longitude: -73.864249619, date: '2020-07-07' },
  { latitude: 40.6403190410001, longitude: -73.939790387, date: '2020-07-05' },
  { latitude: 40.671096154, longitude: -73.9062100789999, date: '2020-07-05' },
  { latitude: 40.674232956, longitude: -73.932000554, date: '2020-07-09' },
  { latitude: 40.667299901, longitude: -73.92575214, date: '2020-07-07' },
  { latitude: 40.6859357170001, longitude: -73.9400784439999, date: '2020-07-12' },
  { latitude: 40.6502528610001, longitude: -73.962416665, date: '2020-07-24' },
  { latitude: 40.667532399, longitude: -73.864249619, date: '2020-07-07' },
  { latitude: 40.66469284, longitude: -73.889184673, date: '2020-07-13' },
  { latitude: 40.6502528610001, longitude: -73.962416665, date: '2020-07-24' },
  { latitude: 40.6403190410001, longitude: -73.939790387, date: '2020-07-05' },
  { latitude: 40.663044192, longitude: -73.905656626, date: '2020-07-12' },
  { latitude: 40.661964196, longitude: -73.889911888, date: '2020-07-28' },
  { latitude: 40.664278981, longitude: -73.891936513, date: '2020-07-14' },
  { latitude: 40.637520388, longitude: -73.9575720669999, date: '2020-07-23' },
  { latitude: 40.65734561, longitude: -73.9031958429999, date: '2020-07-02' },
  { latitude: 40.6782419250001, longitude: -73.895509252, date: '2020-07-27' },
  { latitude: 40.6728147150001, longitude: -73.871673928, date: '2020-07-05' },
  { latitude: 40.6782419250001, longitude: -73.895509252, date: '2020-07-26' },
  { latitude: 40.641819652, longitude: -73.9346556679999, date: '2020-07-27' },
  { latitude: 40.6859357170001, longitude: -73.9400784439999, date: '2020-07-12' },
  { latitude: 40.6258987950001, longitude: -73.934415256, date: '2020-07-16' },
  { latitude: 40.688868637, longitude: -73.940661083, date: '2020-07-13' },
  { latitude: 40.6963929890001, longitude: -73.97739021, date: '2020-07-31' },
  { latitude: 40.678772719, longitude: -73.949664401, date: '2020-07-20' },
  { latitude: 40.6928199500001, longitude: -73.938861972, date: '2020-07-14' },
  { latitude: 40.6859357170001, longitude: -73.9400784439999, date: '2020-07-12' },
  { latitude: 40.6782419250001, longitude: -73.895509252, date: '2020-07-26' },
  { latitude: 40.6782419250001, longitude: -73.895509252, date: '2020-07-26' },
  { latitude: 40.6682151420001, longitude: -73.931177825, date: '2020-07-22' },
  { latitude: 40.6703209180001, longitude: -73.906516229, date: '2020-07-06' },
  { latitude: 40.684532195, longitude: -73.952274578, date: '2020-07-26' },
  { latitude: 40.6369552790001, longitude: -73.91743494, date: '2020-07-10' },
  { latitude: 40.684280802, longitude: -73.989343959, date: '2020-07-17' },
  { latitude: 40.63348814, longitude: -73.889227031, date: '2020-07-13' },
  { latitude: 40.6782419250001, longitude: -73.895509252, date: '2020-07-26' },
  { latitude: 40.667532399, longitude: -73.864249619, date: '2020-07-07' },
  { latitude: 40.673760132, longitude: -73.8788037739999, date: '2020-07-05' },
  { latitude: 40.6630544750001, longitude: -73.91097206, date: '2020-07-13' },
  { latitude: 40.6779284300001, longitude: -73.9283579519999, date: '2020-07-20' },
  { latitude: 40.6569063370001, longitude: -73.88509138, date: '2020-07-09' },
  { latitude: 40.7364357000001, longitude: -73.9569125689999, date: '2020-07-09' },
  { latitude: 40.6728147150001, longitude: -73.871673928, date: '2020-07-05' },
  { latitude: 40.6690221910001, longitude: -73.9591611129999, date: '2020-07-15' },
  { latitude: 40.6997993300001, longitude: -73.98373211, date: '2020-07-06' },
  { latitude: 40.613201954, longitude: -73.926298547, date: '2020-07-26' },
  { latitude: 40.6052620660001, longitude: -73.980869798, date: '2020-07-11' },
  { latitude: 40.6529010140001, longitude: -73.894027641, date: '2020-07-13' },
  { latitude: 40.6830667520001, longitude: -73.951983352, date: '2020-07-08' },
  { latitude: 40.6539994710001, longitude: -73.8963646459999, date: '2020-07-13' },
  { latitude: 40.632874143, longitude: -73.897769904, date: '2020-07-13' },
  { latitude: 40.6685844720001, longitude: -73.926979707, date: '2020-07-21' },
  { latitude: 40.6782419250001, longitude: -73.895509252, date: '2020-07-26' },
  { latitude: 40.6403190410001, longitude: -73.939790387, date: '2020-07-05' },
  { latitude: 40.667532399, longitude: -73.864249619, date: '2020-07-07' },
  { latitude: 40.6859357170001, longitude: -73.9400784439999, date: '2020-07-12' },
  { latitude: 40.709644471, longitude: -73.94209575, date: '2020-07-29' },
  { latitude: 40.6790561490001, longitude: -73.88444279, date: '2020-07-15' },
  { latitude: 40.677984145, longitude: -73.8963787499999, date: '2020-07-10' },
  { latitude: 40.65734561, longitude: -73.9031958429999, date: '2020-07-02' },
  { latitude: 40.666928983, longitude: -73.895608529, date: '2020-07-13' },
  { latitude: 40.641659777, longitude: -73.903775309, date: '2020-07-19' },
  { latitude: 40.673164489, longitude: -73.907767911, date: '2020-07-09' },
  { latitude: 40.6818426790001, longitude: -73.916978258, date: '2020-07-18' },
  { latitude: 40.674232956, longitude: -73.932000554, date: '2020-07-09' },
  { latitude: 40.661964196, longitude: -73.889911888, date: '2020-07-28' },
  { latitude: 40.6639746070001, longitude: -73.8779537679999, date: '2020-07-26' },
  { latitude: 40.667532399, longitude: -73.864249619, date: '2020-07-07' },
  { latitude: 40.6789709290001, longitude: -73.887731889, date: '2020-07-26' },
  { latitude: 40.6052620660001, longitude: -73.980869798, date: '2020-07-11' },
  { latitude: 40.644554677, longitude: -73.8876997099999, date: '2020-07-13' },
  { latitude: 40.64633911, longitude: -74.0108361979999, date: '2020-07-28' },
  { latitude: 40.676325445, longitude: -73.925267112, date: '2020-07-22' },
  { latitude: 40.6728120560001, longitude: -73.938706597, date: '2020-07-06' },
  { latitude: 40.680918466, longitude: -73.93809614, date: '2020-07-26' },
  { latitude: 40.660526605, longitude: -73.917156167, date: '2020-07-31' },
  { latitude: 40.67752877, longitude: -73.910815063, date: '2020-07-19' },
  { latitude: 40.5861589610001, longitude: -73.9381697969999, date: '2020-07-12' },
  { latitude: 40.63348814, longitude: -73.889227031, date: '2020-07-13' },
  { latitude: 40.6697220240001, longitude: -73.876843782, date: '2020-07-27' },
  { latitude: 40.65734561, longitude: -73.9031958429999, date: '2020-07-02' },
  { latitude: 40.6798461590001, longitude: -73.939383573, date: '2020-07-16' },
  { latitude: 40.667532399, longitude: -73.864249619, date: '2020-07-07' },
  { latitude: 40.6779284300001, longitude: -73.9283579519999, date: '2020-07-25' },
  { latitude: 40.674725655, longitude: -73.941123401, date: '2020-07-05' },
  { latitude: 40.6592844530001, longitude: -73.888997675, date: '2020-07-19' },
  { latitude: 40.667316337, longitude: -73.917938963, date: '2020-07-15' },
  { latitude: 40.643135955, longitude: -73.950667575, date: '2020-07-28' },
  { latitude: 40.6756584720001, longitude: -73.9499596699999, date: '2020-07-18' },
  { latitude: 40.6403190410001, longitude: -73.939790387, date: '2020-07-05' },
  { latitude: 40.67165636, longitude: -73.9581990149999, date: '2020-07-02' },
  { latitude: 40.6816475210001, longitude: -73.9087909469999, date: '2020-07-02' },
  { latitude: 40.698116742, longitude: -73.9449577089999, date: '2020-07-03' },
  { latitude: 40.6708037290001, longitude: -73.918452649, date: '2020-07-12' },
  { latitude: 40.66420867, longitude: -73.887751554, date: '2020-07-08' },
  { latitude: 40.673031919, longitude: -73.955669924, date: '2020-07-05' },
  { latitude: 40.6529010140001, longitude: -73.894027641, date: '2020-07-14' },
  { latitude: 40.657474542, longitude: -73.950287997, date: '2020-07-05' },
  { latitude: 40.667532399, longitude: -73.864249619, date: '2020-07-07' },
  { latitude: 40.6760524970001, longitude: -73.934612439, date: '2020-07-24' },
  { latitude: 40.6849318280001, longitude: -73.9488065689999, date: '2020-07-03' },
  { latitude: 40.6616518550001, longitude: -73.909659909, date: '2020-07-19' },
  { latitude: 40.6782419250001, longitude: -73.895509252, date: '2020-07-26' },
  { latitude: 40.64633911, longitude: -74.0108361979999, date: '2020-07-28' },
  { latitude: 40.667532399, longitude: -73.864249619, date: '2020-07-07' },
  { latitude: 40.676027273, longitude: -73.948532201, date: '2020-07-10' },
  { latitude: 40.679241392, longitude: -73.9421870429999, date: '2020-07-25' },
  { latitude: 40.6906617540001, longitude: -73.938074247, date: '2020-07-05' },
  { latitude: 40.643493402, longitude: -73.955566582, date: '2020-07-01' },
  { latitude: 40.668532745, longitude: -73.890168248, date: '2020-07-19' },
  { latitude: 40.672880873, longitude: -73.923689507, date: '2020-07-12' },
  { latitude: 40.6690221910001, longitude: -73.9591611129999, date: '2020-07-15' },
  { latitude: 40.6866596680001, longitude: -73.913139366, date: '2020-07-26' },
  { latitude: 40.640133405, longitude: -73.895223017, date: '2020-07-18' },
  { latitude: 40.6782419250001, longitude: -73.895509252, date: '2020-07-26' },
  { latitude: 40.667789578, longitude: -73.905872055, date: '2020-07-20' },
  { latitude: 40.703922655, longitude: -73.940895417, date: '2020-07-05' },
  { latitude: 40.632423756, longitude: -73.884045488, date: '2020-07-04' },
  { latitude: 40.638590693, longitude: -73.9085273159999, date: '2020-07-05' },
  { latitude: 40.6731281770001, longitude: -73.944628645, date: '2020-07-24' },
  { latitude: 40.677900897, longitude: -73.984283422, date: '2020-07-24' },
  { latitude: 40.6997993300001, longitude: -73.98373211, date: '2020-07-06' },
  { latitude: 40.669057819, longitude: -73.910580588, date: '2020-07-08' },
  { latitude: 40.640649124, longitude: -73.963372879, date: '2020-07-26' },
  { latitude: 40.6782419250001, longitude: -73.895509252, date: '2020-07-26' },
  { latitude: 40.65734561, longitude: -73.9031958429999, date: '2020-07-02' },
  { latitude: 40.6667458000001, longitude: -73.9022323739999, date: '2020-07-11' },
  { latitude: 40.6798461590001, longitude: -73.939383573, date: '2020-07-16' },
  { latitude: 40.6654446630001, longitude: -73.9516135, date: '2020-07-14' },
  { latitude: 40.696127866, longitude: -73.936169131, date: '2020-07-30' },
  { latitude: 40.6697220240001, longitude: -73.876843782, date: '2020-07-27' },
  { latitude: 40.672251084, longitude: -73.961031909, date: '2020-07-15' },
  { latitude: 40.670402779, longitude: -73.888322413, date: '2020-07-25' },
  { latitude: 40.7037199170001, longitude: -73.938098635, date: '2020-07-05' },
  { latitude: 40.669673887, longitude: -73.916861603, date: '2020-07-14' },
  { latitude: 40.6782419250001, longitude: -73.895509252, date: '2020-07-26' },
  { latitude: 40.667532399, longitude: -73.864249619, date: '2020-07-07' },
  { latitude: 40.667532399, longitude: -73.864249619, date: '2020-07-07' },
  { latitude: 40.6585828170001, longitude: -73.914215289, date: '2020-07-29' },
  { latitude: 40.668300135, longitude: -73.954674105, date: '2020-07-24' },
  { latitude: 40.6320386790001, longitude: -73.901233007, date: '2020-07-24' },
  { latitude: 40.672251084, longitude: -73.961031909, date: '2020-07-15' },
  { latitude: 40.667574668, longitude: -73.9072948629999, date: '2020-07-05' },
  { latitude: 40.667532399, longitude: -73.864249619, date: '2020-07-07' },
  { latitude: 40.6782419250001, longitude: -73.895509252, date: '2020-07-26' },
  { latitude: 40.6052620660001, longitude: -73.980869798, date: '2020-07-11' },
  { latitude: 40.6712367310001, longitude: -73.87722085, date: '2020-07-16' },
  { latitude: 40.660543546, longitude: -73.893174341, date: '2020-07-04' },
  { latitude: 40.6532271610001, longitude: -73.912697714, date: '2020-07-02' }
];

// Initial settings
const width = 800;
const height = 600;
const margins = { top: 20, right: 20, bottom: 40, left: 40 };
const currentDate = { value: new Date('2020-07-01') };

const datePanel = d3.select('div#plot')
      .insert('div', ':first-child') // Insert as the first element in <body>
      .attr('class', 'date-panel')
      .text(`Current Date: ${currentDate.value.toISOString().split('T')[0]}`);

// Create scales
const xScale = d3.scaleLinear()
  .domain([-74.015, -73.860]) // Longitude range for Brooklyn
  .range([margins.left, width - margins.right]);

const yScale = d3.scaleLinear()
  .domain([40.580, 40.740]) // Latitude range for Brooklyn
  .range([height - margins.bottom, margins.top]);

// Create SVG dynamically
const svg = d3.select("div#plot")
  .append('svg')
  .attr('width', width)
  .attr('height', height)
  .style('border', '1px solid black');

// Add Axes
const xAxis = d3.axisBottom(xScale).ticks(5);
const yAxis = d3.axisLeft(yScale).ticks(5);

svg.append('g')
  .attr('transform', `translate(0, ${height - margins.bottom})`)
  .call(xAxis);

svg.append('g')
  .attr('transform', `translate(${margins.left}, 0)`)
  .call(yAxis);

const updateChart = (currentDate) => {
  // Group data by latitude and longitude and count occurrences
  const groupedData = d3.rollup(
    data.filter((d) => new Date(d.date).toDateString() === currentDate.toDateString()),
    (v) => v.length, // Count occurrences
    (d) => `${d.latitude},${d.longitude}` // Group by lat,long
  );

  // Convert grouped data to an array
  const processedData = Array.from(groupedData, ([key, count]) => {
    const [latitude, longitude] = key.split(',').map(Number);
    return { latitude, longitude, count };
  });

  // Bind circles to data
  const circles = svg.selectAll('circle')
    .data(processedData, (d) => d.latitude + ',' + d.longitude);

  // Enter
  circles.enter()
    .append('circle')
    .attr('cx', (d) => xScale(d.longitude))
    .attr('cy', (d) => yScale(d.latitude))
    .attr('r', (d) => Math.sqrt(d.count) * 2 + 3) // Scale size by count
    .style('fill', 'none')
    .style('stroke', 'blue')
    .style('stroke-width', 2)
    .merge(circles) // Update
    .transition()
    .duration(500)
    .attr('cx', (d) => xScale(d.longitude))
    .attr('cy', (d) => yScale(d.latitude));

  // Exit
  circles.exit()
    .transition()
    .duration(500)
    .attr('r', 0)
    .remove();

  // Add labels to show count
  const labels = svg.selectAll('text')
    .data(processedData, (d) => d.latitude + ',' + d.longitude);

  // Enter labels
  labels.enter()
    .append('text')
    .attr('x', (d) => xScale(d.longitude))
    .attr('y', (d) => yScale(d.latitude) - 10) // Position above the circle
    .style('text-anchor', 'middle')
    .style('font-size', '12px')
    .style('fill', 'black')
    .text((d) => d.count)
    .merge(labels) // Update
    .transition()
    .duration(500)
    .attr('x', (d) => xScale(d.longitude))
    .attr('y', (d) => yScale(d.latitude) - 10)
    .text((d) => d.count);

  // Exit labels
  labels.exit()
    .transition()
    .duration(500)
    .style('opacity', 0)
    .remove();

  // Update date panel
  datePanel.text(`Current Date: ${currentDate.toISOString().split('T')[0]}`);
};

// Initial render
updateChart(currentDate.value);

// Button click event
d3.select('#next-day').on('click', () => {
  currentDate.value.setDate(currentDate.value.getDate() + 1);
  updateChart(currentDate.value);
});
