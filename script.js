/*fact generator*/
var factList = [
  "About 13 per cent of rural elementary schools in India did not have drinking water facilities.", 
  "About 16 per cent of rural elementary schools in India did not have any toilet facilities.", 
  "About 49 per cent of rural elementary schools in India did not have separate toilets for girls.", 
  "About 70 per cent of rural elementary schools in India did not have electricity.", 
  "About 14 per cent of all rural primary schools in India had only one teacher.", 
  "About 57 per cent of rural elementary (primary and upper primary) schools in India had less than four classrooms. The proportion of rural schools that do not have one classroom per grade is substantially higher.",
  "55.5% of students in rural areas have never used computers",
  

];

var fact = document.getElementById("fact");
var factBtn = document.getElementById("factBtn");
var count = 0;

if (factBtn) {
  factBtn.addEventListener("click", displayFact);
}

function displayFact() {
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length) {
    count = 0;
  }
}

/*personalized information*/
function getpercentage() {
  if(document.getElementById("states").value=="Andhra Pradesh")
{
  document.getElementById("demo").innerHTML =
  "The percentage of literacy in Andhra Pradesh is 67.66%";
}
else if(document.getElementById("states").value=="Telangana")
{
  document.getElementById("demo").innerHTML =
  "The percentage of literacy in Telangana is 67.66%";
}
else if(document.getElementById("states").value=="Kerala")
{
  document.getElementById("demo").innerHTML =
  "The percentage of literacy in Kerala is 93.91%";
}
else if(document.getElementById("states").value=="Lakshadweep")
{
  document.getElementById("demo").innerHTML =
  "The percentage of literacy in Lakshadweep is 92.28%";
}
else if(document.getElementById("states").value=="Mizoram")
{
  document.getElementById("demo").innerHTML =
  "The percentage of literacy in Mizoram is 91.58%";
}
else if(document.getElementById("states").value=="Tripura")
{
  document.getElementById("demo").innerHTML =
  "The percentage of literacy in Tripura is 87.75%";
}
else if(document.getElementById("states").value=="Goa")
{
  document.getElementById("demo").innerHTML =
  "The percentage of literacy in Goa is 87.70%";
}
else if(document.getElementById("states").value=="Daman and Diu")
{
  document.getElementById("demo").innerHTML =
  "The percentage of literacy in Daman and Diu is 87.07%";
}
else if(document.getElementById("states").value=="Puducherry")
{
  document.getElementById("demo").innerHTML =
  "The percentage of literacy in Puducherry is 86.55%";
}
else if(document.getElementById("states").value=="Chandigarh")
{
  document.getElementById("demo").innerHTML =
  "The percentage of literacy in Chandigarh is 86.43%";
}
else if(document.getElementById("states").value=="Andaman and Nicobar Islands")
{
  document.getElementById("demo").innerHTML =
  "The percentage of literacy in Andaman and Nicobar Islands is 86.27%";
}
else if(document.getElementById("states").value=="Himachal Pradesh")
{
  document.getElementById("demo").innerHTML =
  "The percentage of literacy in Himachal Pradesh is 83.78%";
}
else if(document.getElementById("states").value=="Maharashtra")
{
  document.getElementById("demo").innerHTML =
  "The percentage of literacy in Maharashtra is 82.91%";
}
else if(document.getElementById("states").value=="Sikkim")
{
  document.getElementById("demo").innerHTML =
  "The percentage of literacy in Sikkim is 82.20%";
}
else if(document.getElementById("states").value=="Tamil Nadu")
{
  document.getElementById("demo").innerHTML =
  "The percentage of literacy in Tamil Nadu is 80.33%";
}
else if(document.getElementById("states").value=="Nagaland")
{
  document.getElementById("demo").innerHTML =
  "The percentage of literacy in Nagaland is 80.11%";
}
else if(document.getElementById("states").value=="Manipur")
{
  document.getElementById("demo").innerHTML =
  "The percentage of literacy in Manipur is 79.85%";
}
else if(document.getElementById("states").value=="Uttarakhand")
{
  document.getElementById("demo").innerHTML =
  "The percentage of literacy in Uttarakhand is 79.63%";
}
else if(document.getElementById("states").value=="Gujarat")
{
  document.getElementById("demo").innerHTML =
  "The percentage of literacy in Gujarat is 79.31%";
}
else if(document.getElementById("states").value=="Dadra and Nagar Haveli")
{
  document.getElementById("demo").innerHTML =
  "The percentage of literacy in Dadra and Nagar Haveli is 77.65%";
}
else if(document.getElementById("states").value=="West Bengal")
{
  document.getElementById("demo").innerHTML =
  "The percentage of literacy in West Bengal is 77.08%";
}
else if(document.getElementById("states").value=="Punjab")
{
  document.getElementById("demo").innerHTML =
  "The percentage of literacy in Punjab is 76.68%";
}
else if(document.getElementById("states").value=="Haryana")
{
  document.getElementById("demo").innerHTML =
  "The percentage of literacy in Haryana is 76.64%";
}
else if(document.getElementById("states").value=="Karnataka")
{
  document.getElementById("demo").innerHTML =
  "The percentage of literacy in Karnataka is 75.50%";
}
else if(document.getElementById("states").value=="Meghalaya")
{
  document.getElementById("demo").innerHTML =
  "The percentage of literacy in Meghalaya is 75.48%";
}
else if(document.getElementById("states").value=="Odisha")
{
  document.getElementById("demo").innerHTML =
  "The percentage of literacy in Odisha is 73.45%";
}
else if(document.getElementById("states").value=="Assam")
{
  document.getElementById("demo").innerHTML =
  "The percentage of literacy in Assam is 73.45%";
}
else if(document.getElementById("states").value=="Chhattisgarh")
{
  document.getElementById("demo").innerHTML =
  "The percentage of literacy in Chhattisgarh is 71.04%";
}
else if(document.getElementById("states").value=="Madhya Pradesh")
{
  document.getElementById("demo").innerHTML =
  "The percentage of literacy in Madhya Pradesh is 70.63%";
}
else if(document.getElementById("states").value=="Uttar Pradesh")
{
  document.getElementById("demo").innerHTML =
  "The percentage of literacy in Uttar Pradesh is 69.72%";
}
else if(document.getElementById("states").value=="Jammu and Kashmir")
{
  document.getElementById("demo").innerHTML =
  "The percentage of literacy in Jammu and Kashmir is 68.74%";
}
else if(document.getElementById("states").value=="Andhra Pradesh")
{
  document.getElementById("demo").innerHTML =
  "The percentage of literacy in Andhra Pradesh is 67.66";
}
else if(document.getElementById("states").value=="Jharkhand")
{
  document.getElementById("demo").innerHTML =
  "The percentage of literacy in Jharkhand is 67.63%";
}
else if(document.getElementById("states").value=="Rajasthan")
{
  document.getElementById("demo").innerHTML =
  "The percentage of literacy in Rajasthan is 67.06%";
}
else if(document.getElementById("states").value=="Arunachal Pradesh")
{
  document.getElementById("demo").innerHTML =
  "The percentage of literacy in Arunachal Pradesh is 66.96%";
}
else if(document.getElementById("states").value=="Bihar")
{
  document.getElementById("demo").innerHTML =
  "The percentage of literacy in Bihar is 63.82%";
}
else{
  document.getElementById("demo").innerHTML =
  "Wrong input";
}
}


/*personalized information*/

function getNGO()
 {
  if(document.getElementById("states").value=="Andhra Pradesh")
{
  var str = "Andhra Pradesh NGOs";
  var result = str.link("https://ngodarpan.gov.in/index.php/home/statewise_ngo/4376/28/1");
  document.getElementById("demo").innerHTML = result
  
}
else if(document.getElementById("states").value=="Telangana")
{
  var str = "Telangana NGOs";
  var result = str.link("https://ngodarpan.gov.in/index.php/home/statewise_ngo/2716/36/1");
  document.getElementById("demo").innerHTML = result
}
else if(document.getElementById("states").value=="Kerala")
{
  var str = "Kerala NGOs";
  var result = str.link("https://ngodarpan.gov.in/index.php/home/statewise_ngo/3595/32/1");
  document.getElementById("demo").innerHTML = result
}
else if(document.getElementById("states").value=="Lakshadweep")
{
  var str = "Lakshadweep NGOs";
  var result = str.link("https://ngodarpan.gov.in/index.php/home/sectorwise_ngo/68655/11/1");
  document.getElementById("demo").innerHTML = result
}
else if(document.getElementById("states").value=="Mizoram")
{
  var str = "Mizoram NGOs";
  var result = str.link("https://ngodarpan.gov.in/index.php/home/statewise_ngo/237/15/1");
  document.getElementById("demo").innerHTML = result
}
else if(document.getElementById("states").value=="Tripura")
{
  var str = "Tripura NGOs";
  var result = str.link("https://ngodarpan.gov.in/index.php/home/statewise_ngo/435/16/1");
  document.getElementById("demo").innerHTML = result
}
else if(document.getElementById("states").value=="Goa")
{
 var str = "Goa NGOs";
  var result = str.link("https://ngodarpan.gov.in/index.php/home/statewise_ngo/245/30/1");
  document.getElementById("demo").innerHTML = result
}
else if(document.getElementById("states").value=="Daman and Diu")
{
  var str = "Daman and Diu NGOs";
  var result = str.link("https://ngodarpan.gov.in/index.php/home/sectorwise_ngo/68655/11/1");
  document.getElementById("demo").innerHTML = result
}
else if(document.getElementById("states").value=="Puducherry")
{
  var str = "Puducherry NGOs";
  var result = str.link("https://ngodarpan.gov.in/index.php/home/sectorwise_ngo/68655/11/1");
  document.getElementById("demo").innerHTML = result
}
else if(document.getElementById("states").value=="Chandigarh")
{
  var str = "Chandigarh NGOs";
  var result = str.link("https://ngodarpan.gov.in/index.php/home/statewise_ngo/201/4/1");
  document.getElementById("demo").innerHTML = result
}
else if(document.getElementById("states").value=="Andaman and Nicobar Islands")
{
  var str = "Andaman and Nicobar Islands NGOs";
  var result = str.link("https://ngodarpan.gov.in/index.php/home/sectorwise_ngo/68655/11/1");
  document.getElementById("demo").innerHTML = result
}
else if(document.getElementById("states").value=="Himachal Pradesh")
{
  var str = "Himachal Pradesh NGOs";
  var result = str.link("https://ngodarpan.gov.in/index.php/home/statewise_ngo/708/2/1");
  document.getElementById("demo").innerHTML = result
}
else if(document.getElementById("states").value=="Maharashtra")
{
  var str = "Maharashtra NGOs";
  var result = str.link("https://ngodarpan.gov.in/index.php/home/statewise_ngo/16187/27/1");
  document.getElementById("demo").innerHTML = result
}
else if(document.getElementById("states").value=="Sikkim")
{
  var str = "Sikkim NGOs";
  var result = str.link("https://ngodarpan.gov.in/index.php/home/statewise_ngo/108/11/1");
  document.getElementById("demo").innerHTML = result
}
else if(document.getElementById("states").value=="Tamil Nadu")
{
  var str = "Tamil Nadu NGOs";
  var result = str.link("https://ngodarpan.gov.in/index.php/home/statewise_ngo/8449/33/1");
  document.getElementById("demo").innerHTML = result
}
else if(document.getElementById("states").value=="Nagaland")
{
  var str = "Nagaland NGOs";
  var result = str.link("https://ngodarpan.gov.in/index.php/home/statewise_ngo/400/13/1");
  document.getElementById("demo").innerHTML = result
}
else if(document.getElementById("states").value=="Manipur")
{
  var str = "Manipur NGOs";
  var result = str.link("https://ngodarpan.gov.in/index.php/home/statewise_ngo/2267/14/1");
  document.getElementById("demo").innerHTML = result
}
else if(document.getElementById("states").value=="Uttarakhand")
{
  var str = "Uttarakhand NGOs";
  var result = str.link("https://ngodarpan.gov.in/index.php/home/statewise_ngo/1763/5/1");
  document.getElementById("demo").innerHTML = result
}
else if(document.getElementById("states").value=="Gujarat")
{
  var str = "Gujarat NGOs";
  var result = str.link("https://ngodarpan.gov.in/index.php/home/statewise_ngo/5960/24/1");
  document.getElementById("demo").innerHTML = result
}
else if(document.getElementById("states").value=="Dadra and Nagar Haveli")
{
  var str = "Dadra and Nagar Haveli NGOs";
  var result = str.link("https://ngodarpan.gov.in/index.php/home/sectorwise_ngo/68655/11/1");
  document.getElementById("demo").innerHTML = result
}
else if(document.getElementById("states").value=="West Bengal")
{
  var str = "West Bengal NGOs";
  var result = str.link("https://ngodarpan.gov.in/index.php/home/statewise_ngo/9094/19/1");
  document.getElementById("demo").innerHTML = result
}
else if(document.getElementById("states").value=="Punjab")
{
  var str = "Punjab NGOs";
  var result = str.link("https://ngodarpan.gov.in/index.php/home/statewise_ngo/1559/3/1");
  document.getElementById("demo").innerHTML = result
}
else if(document.getElementById("states").value=="Haryana")
{
  var str = "Haryana NGOs";
  var result = str.link("https://ngodarpan.gov.in/index.php/home/statewise_ngo/2641/6/1");
  document.getElementById("demo").innerHTML = result
}
else if(document.getElementById("states").value=="Karnataka")
{
  var str = "Karnataka NGOs";
  var result = str.link("https://ngodarpan.gov.in/index.php/home/statewise_ngo/6781/29/1");
  document.getElementById("demo").innerHTML = result
}
else if(document.getElementById("states").value=="Meghalaya")
{
 var str = "Meghalaya NGOs";
  var result = str.link("https://ngodarpan.gov.in/index.php/home/statewise_ngo/284/17/1");
  document.getElementById("demo").innerHTML = result
}
else if(document.getElementById("states").value=="Odisha")
{
  var str = "Odisha NGOs";
  var result = str.link("https://ngodarpan.gov.in/index.php/home/statewise_ngo/3512/21/1");
  document.getElementById("demo").innerHTML = result
}
else if(document.getElementById("states").value=="Assam")
{
  var str = "Assam NGOs";
  var result = str.link("https://ngodarpan.gov.in/index.php/home/statewise_ngo/2016/18/1");
  document.getElementById("demo").innerHTML = result
}
else if(document.getElementById("states").value=="Chhattisgarh")
{
 var str = "Chhattisgarh NGOs";
  var result = str.link("https://ngodarpan.gov.in/index.php/home/statewise_ngo/1697/22/1");
  document.getElementById("demo").innerHTML = result
}
else if(document.getElementById("states").value=="Madhya Pradesh")
{
  var str = "Madhya Pradesh NGOs";
  var result = str.link("https://ngodarpan.gov.in/index.php/home/statewise_ngo/5939/23/1");
  document.getElementById("demo").innerHTML = result
}
else if(document.getElementById("states").value=="Uttar Pradesh")
{
 var str = "Uttar Pradesh NGOs";
  var result = str.link("https://ngodarpan.gov.in/index.php/home/statewise_ngo/16747/9/1");
  document.getElementById("demo").innerHTML = result
}
else if(document.getElementById("states").value=="Jammu and Kashmir")
{
  var str = "Jammu and Kashmir NGOs";
  var result = str.link("https://ngodarpan.gov.in/index.php/home/statewise_ngo/1435/1/1");
  document.getElementById("demo").innerHTML = result
}
else if(document.getElementById("states").value=="Jharkhand")
{
  var str = "Jharkhand NGOs";
  var result = str.link("https://ngodarpan.gov.in/index.php/home/statewise_ngo/2176/20/1");
  document.getElementById("demo").innerHTML = result
}
else if(document.getElementById("states").value=="Rajasthan")
{
  var str = "Telangana NGOs";
  var result = str.link("https://ngodarpan.gov.in/index.php/home/statewise_ngo/4569/8/1");
  document.getElementById("demo").innerHTML = result
}
else if(document.getElementById("states").value=="Arunachal Pradesh")
{
 var str = "Arunachal Pradesh NGOs";
  var result = str.link("https://ngodarpan.gov.in/index.php/home/statewise_ngo/428/12/1");
  document.getElementById("demo").innerHTML = result
}
else if(document.getElementById("states").value=="Bihar")
{
  var str = "Bihar NGOs";
  var result = str.link("https://ngodarpan.gov.in/index.php/home/statewise_ngo/4094/10/1");
  document.getElementById("demo").innerHTML = result
}
else{
  document.getElementById("demo").innerHTML =
  "Wrong input";
}
}