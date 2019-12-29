**Important Note:**

I was not able to access the API. I emailed them to get the API ID but they refused. So, I was not able to fetch anything or add any Unit tests for the JS code. I will attach the email screenshots. So, I only worked on UI part. I have integrated all modules(search, artists and events) on one page only. So, you can at least get the idea of design and responsiveness. 

**Fetching data:**

useEffect((artists()) => {}, []);

const artists = async () => {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
}

**Cache:**

var cahedData = JSON.parse(localStorage.getItem("artists")) || []; //geting from localstorage

let [artists, setArtists] = useState(cahcedData); //updating current state using cached data

**Deploy Strategy:**

Blue/Green would be the most likely the best deployment strategy. After testing the system inhouse alongside the QA team, we can deploy the version B (new) of our software alongsie the version A (current). We will then switch traffic to version B. This will ensure no downtime. Hence, people using our webapp to get updates on events/artists will be able to use the app while at the sametime we deploy the new version.


p.s I am travelling otherwise the UI part was doable in a day.
