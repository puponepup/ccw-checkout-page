(function () {
  'use strict';

  const CONFIG = {
    displayInterval: { min: 15000, max: 45000 },
    notificationDuration: 6000,
    animationDuration: 500,
    maxNotificationsPerSession: 15,
    geoApiUrl: 'https://ipapi.co/json/',

    names: {
      female: [
        'Emma', 'Olivia', 'Sophia', 'Isabella', 'Mia', 'Charlotte',
        'Amelia', 'Harper', 'Evelyn', 'Abigail', 'Emily', 'Elizabeth',
        'Sarah', 'Jessica', 'Ashley', 'Lauren', 'Hannah', 'Samantha',
        'Rachel', 'Victoria', 'Natalie', 'Grace', 'Chloe', 'Lily',
        'Madison', 'Ella', 'Scarlett', 'Aria', 'Riley', 'Zoey'
      ],
      male: [
        'James', 'Robert', 'John', 'Michael', 'David', 'William',
        'Richard', 'Joseph', 'Thomas', 'Daniel', 'Matthew', 'Andrew',
        'Ryan', 'Brandon', 'Jason', 'Kevin', 'Brian', 'Tyler',
        'Nathan', 'Adam', 'Chris', 'Ethan', 'Noah', 'Lucas',
        'Mason', 'Logan', 'Alexander', 'Benjamin', 'Jack', 'Henry'
      ]
    },

    stateCities: {
      'Alabama': ['Birmingham', 'Montgomery', 'Huntsville', 'Mobile', 'Tuscaloosa', 'Hoover', 'Dothan', 'Auburn', 'Decatur', 'Madison'],
      'Alaska': ['Anchorage', 'Fairbanks', 'Juneau', 'Sitka', 'Wasilla', 'Kenai', 'Kodiak', 'Palmer', 'Bethel'],
      'Arizona': ['Phoenix', 'Tucson', 'Mesa', 'Chandler', 'Scottsdale', 'Glendale', 'Gilbert', 'Tempe', 'Peoria', 'Surprise', 'Flagstaff', 'Yuma'],
      'Arkansas': ['Little Rock', 'Fort Smith', 'Fayetteville', 'Springdale', 'Jonesboro', 'Conway', 'Rogers', 'Pine Bluff', 'Bentonville'],
      'California': ['Los Angeles', 'San Diego', 'San Jose', 'San Francisco', 'Fresno', 'Sacramento', 'Long Beach', 'Oakland', 'Bakersfield', 'Anaheim', 'Santa Ana', 'Riverside', 'Irvine', 'Pasadena', 'Burbank', 'Glendale', 'Santa Monica', 'Torrance', 'Chula Vista', 'Oceanside', 'Carlsbad', 'Escondido', 'El Cajon', 'Palo Alto', 'Fremont', 'Redwood City', 'Berkeley', 'Daly City', 'Santa Clara', 'Sunnyvale', 'Huntington Beach', 'Modesto', 'Stockton', 'Oxnard', 'Thousand Oaks'],
      'Colorado': ['Denver', 'Colorado Springs', 'Aurora', 'Fort Collins', 'Lakewood', 'Arvada', 'Westminster', 'Boulder', 'Centennial', 'Thornton', 'Pueblo', 'Greeley', 'Broomfield', 'Loveland'],
      'Connecticut': ['Bridgeport', 'New Haven', 'Hartford', 'Stamford', 'Waterbury', 'Norwalk', 'Danbury', 'New Britain', 'Bristol', 'Greenwich', 'Fairfield'],
      'Delaware': ['Wilmington', 'Dover', 'Newark', 'Middletown', 'Smyrna', 'Milford', 'Seaford', 'Georgetown'],
      'Florida': ['Jacksonville', 'Miami', 'Tampa', 'Orlando', 'St. Petersburg', 'Hialeah', 'Port St. Lucie', 'Cape Coral', 'Tallahassee', 'Fort Lauderdale', 'Pembroke Pines', 'Hollywood', 'Coral Springs', 'Gainesville', 'Clearwater', 'Palm Bay', 'Lakeland', 'Pompano Beach', 'West Palm Beach', 'Davie', 'Boca Raton', 'Homestead', 'Coral Gables', 'Miami Beach', 'Sarasota', 'Naples', 'Ocala', 'Daytona Beach', 'Kissimmee'],
      'Georgia': ['Atlanta', 'Augusta', 'Columbus', 'Macon', 'Savannah', 'Athens', 'Sandy Springs', 'Roswell', 'Albany', 'Marietta', 'Johns Creek', 'Alpharetta', 'Smyrna', 'Valdosta', 'Brookhaven', 'Dunwoody', 'Peachtree City', 'Kennesaw', 'Decatur'],
      'Hawaii': ['Honolulu', 'Pearl City', 'Hilo', 'Kailua', 'Waipahu', 'Kaneohe', 'Kapolei', 'Mililani'],
      'Idaho': ['Boise', 'Meridian', 'Nampa', 'Idaho Falls', 'Pocatello', 'Caldwell', 'Coeur d\'Alene', 'Twin Falls'],
      'Illinois': ['Chicago', 'Aurora', 'Naperville', 'Joliet', 'Rockford', 'Springfield', 'Elgin', 'Peoria', 'Champaign', 'Evanston', 'Schaumburg', 'Oak Park', 'Cicero', 'Waukegan', 'Arlington Heights', 'Skokie', 'Des Plaines'],
      'Indiana': ['Indianapolis', 'Fort Wayne', 'Evansville', 'South Bend', 'Carmel', 'Fishers', 'Bloomington', 'Hammond', 'Gary', 'Lafayette', 'Muncie', 'Terre Haute', 'Noblesville'],
      'Iowa': ['Des Moines', 'Cedar Rapids', 'Davenport', 'Sioux City', 'Iowa City', 'Waterloo', 'Ames', 'West Des Moines', 'Council Bluffs', 'Ankeny', 'Dubuque'],
      'Kansas': ['Wichita', 'Overland Park', 'Kansas City', 'Olathe', 'Topeka', 'Lawrence', 'Shawnee', 'Manhattan', 'Lenexa', 'Salina'],
      'Kentucky': ['Louisville', 'Lexington', 'Bowling Green', 'Owensboro', 'Covington', 'Richmond', 'Georgetown', 'Florence', 'Hopkinsville', 'Nicholasville'],
      'Louisiana': ['New Orleans', 'Baton Rouge', 'Shreveport', 'Lafayette', 'Lake Charles', 'Kenner', 'Bossier City', 'Monroe', 'Alexandria', 'Houma'],
      'Maine': ['Portland', 'Lewiston', 'Bangor', 'South Portland', 'Auburn', 'Biddeford', 'Sanford', 'Scarborough', 'Westbrook'],
      'Maryland': ['Baltimore', 'Frederick', 'Rockville', 'Gaithersburg', 'Bowie', 'Hagerstown', 'Annapolis', 'College Park', 'Salisbury', 'Towson', 'Bethesda', 'Silver Spring', 'Columbia'],
      'Massachusetts': ['Boston', 'Worcester', 'Springfield', 'Cambridge', 'Lowell', 'Brockton', 'New Bedford', 'Quincy', 'Lynn', 'Fall River', 'Newton', 'Somerville', 'Brookline', 'Waltham', 'Medford', 'Framingham'],
      'Michigan': ['Detroit', 'Grand Rapids', 'Warren', 'Sterling Heights', 'Ann Arbor', 'Lansing', 'Flint', 'Dearborn', 'Livonia', 'Troy', 'Farmington Hills', 'Kalamazoo', 'Canton', 'Wyoming', 'Southfield'],
      'Minnesota': ['Minneapolis', 'St. Paul', 'Rochester', 'Duluth', 'Bloomington', 'Brooklyn Park', 'Plymouth', 'Maple Grove', 'Woodbury', 'St. Cloud', 'Eagan', 'Eden Prairie', 'Burnsville'],
      'Mississippi': ['Jackson', 'Gulfport', 'Southaven', 'Hattiesburg', 'Biloxi', 'Meridian', 'Tupelo', 'Olive Branch', 'Greenville', 'Horn Lake'],
      'Missouri': ['Kansas City', 'St. Louis', 'Springfield', 'Columbia', 'Independence', 'Lee\'s Summit', 'O\'Fallon', 'St. Joseph', 'St. Charles', 'Blue Springs', 'Joplin'],
      'Montana': ['Billings', 'Missoula', 'Great Falls', 'Bozeman', 'Butte', 'Helena', 'Kalispell'],
      'Nebraska': ['Omaha', 'Lincoln', 'Bellevue', 'Grand Island', 'Kearney', 'Fremont', 'Hastings', 'Norfolk', 'Papillion'],
      'Nevada': ['Las Vegas', 'Henderson', 'Reno', 'North Las Vegas', 'Sparks', 'Carson City', 'Summerlin', 'Spring Valley', 'Paradise', 'Boulder City'],
      'New Hampshire': ['Manchester', 'Nashua', 'Concord', 'Dover', 'Rochester', 'Keene', 'Portsmouth', 'Laconia', 'Derry'],
      'New Jersey': ['Newark', 'Jersey City', 'Paterson', 'Elizabeth', 'Edison', 'Woodbridge', 'Trenton', 'Camden', 'Clifton', 'Cherry Hill', 'Hoboken', 'Princeton', 'Morristown', 'New Brunswick'],
      'New Mexico': ['Albuquerque', 'Las Cruces', 'Rio Rancho', 'Santa Fe', 'Roswell', 'Farmington', 'Clovis'],
      'New York': ['New York', 'Buffalo', 'Rochester', 'Yonkers', 'Syracuse', 'Albany', 'New Rochelle', 'White Plains', 'Mount Vernon', 'Schenectady', 'Utica', 'Brooklyn', 'Queens', 'Bronx', 'Staten Island'],
      'North Carolina': ['Charlotte', 'Raleigh', 'Greensboro', 'Durham', 'Winston-Salem', 'Fayetteville', 'Cary', 'Wilmington', 'High Point', 'Asheville', 'Concord', 'Gastonia', 'Chapel Hill', 'Huntersville', 'Apex'],
      'North Dakota': ['Fargo', 'Bismarck', 'Grand Forks', 'Minot', 'West Fargo', 'Williston', 'Mandan'],
      'Ohio': ['Columbus', 'Cleveland', 'Cincinnati', 'Toledo', 'Akron', 'Dayton', 'Parma', 'Canton', 'Youngstown', 'Lorain', 'Hamilton', 'Springfield', 'Kettering', 'Lakewood', 'Elyria'],
      'Oklahoma': ['Oklahoma City', 'Tulsa', 'Norman', 'Broken Arrow', 'Lawton', 'Edmond', 'Moore', 'Midwest City', 'Stillwater', 'Enid'],
      'Oregon': ['Portland', 'Salem', 'Eugene', 'Gresham', 'Hillsboro', 'Beaverton', 'Bend', 'Medford', 'Springfield', 'Corvallis', 'Albany', 'Lake Oswego', 'Tigard', 'Tualatin', 'Oregon City'],
      'Pennsylvania': ['Philadelphia', 'Pittsburgh', 'Allentown', 'Reading', 'Erie', 'Bethlehem', 'Lancaster', 'Harrisburg', 'Scranton', 'York', 'Wilkes-Barre', 'Chester', 'King of Prussia', 'Norristown'],
      'Rhode Island': ['Providence', 'Warwick', 'Cranston', 'Pawtucket', 'East Providence', 'Woonsocket', 'Newport', 'Central Falls'],
      'South Carolina': ['Columbia', 'Charleston', 'North Charleston', 'Mount Pleasant', 'Rock Hill', 'Greenville', 'Summerville', 'Goose Creek', 'Hilton Head', 'Spartanburg', 'Florence'],
      'South Dakota': ['Sioux Falls', 'Rapid City', 'Aberdeen', 'Brookings', 'Watertown', 'Mitchell'],
      'Tennessee': ['Nashville', 'Memphis', 'Knoxville', 'Chattanooga', 'Clarksville', 'Murfreesboro', 'Franklin', 'Jackson', 'Johnson City', 'Bartlett', 'Hendersonville', 'Brentwood', 'Gallatin', 'Lebanon', 'Smyrna'],
      'Texas': ['Houston', 'San Antonio', 'Dallas', 'Austin', 'Fort Worth', 'El Paso', 'Arlington', 'Corpus Christi', 'Plano', 'Laredo', 'Lubbock', 'Garland', 'Irving', 'Frisco', 'McKinney', 'Amarillo', 'Grand Prairie', 'Brownsville', 'Pasadena', 'Killeen', 'McAllen', 'Mesquite', 'Midland', 'Beaumont', 'Round Rock', 'Cedar Park', 'Georgetown', 'Pflugerville', 'Kyle', 'Leander', 'Sugar Land', 'Pearland', 'The Woodlands', 'Katy', 'League City', 'New Braunfels', 'San Marcos', 'Richardson', 'Allen', 'Denton'],
      'Utah': ['Salt Lake City', 'West Valley City', 'Provo', 'West Jordan', 'Orem', 'Sandy', 'Ogden', 'St. George', 'Layton', 'Taylorsville', 'South Jordan', 'Lehi', 'Logan'],
      'Vermont': ['Burlington', 'South Burlington', 'Rutland', 'Barre', 'Montpelier', 'Brattleboro', 'St. Albans'],
      'Virginia': ['Virginia Beach', 'Norfolk', 'Chesapeake', 'Richmond', 'Newport News', 'Alexandria', 'Hampton', 'Roanoke', 'Portsmouth', 'Lynchburg', 'Manassas', 'Fredericksburg', 'Charlottesville', 'Arlington', 'Fairfax'],
      'Washington': ['Seattle', 'Spokane', 'Tacoma', 'Vancouver', 'Bellevue', 'Kent', 'Everett', 'Renton', 'Spokane Valley', 'Federal Way', 'Kirkland', 'Redmond', 'Olympia', 'Bellingham'],
      'West Virginia': ['Charleston', 'Huntington', 'Morgantown', 'Parkersburg', 'Wheeling', 'Weirton', 'Martinsburg', 'Fairmont'],
      'Wisconsin': ['Milwaukee', 'Madison', 'Green Bay', 'Kenosha', 'Racine', 'Appleton', 'Waukesha', 'Oshkosh', 'Eau Claire', 'Janesville', 'West Allis', 'Brookfield'],
      'Wyoming': ['Cheyenne', 'Casper', 'Laramie', 'Gillette', 'Rock Springs', 'Sheridan', 'Jackson'],
      'District of Columbia': ['Washington', 'Georgetown', 'Capitol Hill', 'Dupont Circle', 'Adams Morgan']
    },

    neighborStates: {
      'Alabama': ['Tennessee', 'Georgia', 'Florida', 'Mississippi'],
      'Arizona': ['Nevada', 'Utah', 'Colorado', 'New Mexico', 'California'],
      'Arkansas': ['Missouri', 'Tennessee', 'Mississippi', 'Louisiana', 'Texas', 'Oklahoma'],
      'California': ['Oregon', 'Nevada', 'Arizona'],
      'Colorado': ['Wyoming', 'Nebraska', 'Kansas', 'Oklahoma', 'New Mexico', 'Utah'],
      'Connecticut': ['New York', 'Massachusetts', 'Rhode Island'],
      'Delaware': ['Maryland', 'Pennsylvania', 'New Jersey'],
      'Florida': ['Georgia', 'Alabama'],
      'Georgia': ['Tennessee', 'North Carolina', 'South Carolina', 'Florida', 'Alabama'],
      'Idaho': ['Montana', 'Wyoming', 'Utah', 'Nevada', 'Oregon', 'Washington'],
      'Illinois': ['Wisconsin', 'Iowa', 'Missouri', 'Kentucky', 'Indiana'],
      'Indiana': ['Michigan', 'Ohio', 'Kentucky', 'Illinois'],
      'Iowa': ['Minnesota', 'Wisconsin', 'Illinois', 'Missouri', 'Nebraska', 'South Dakota'],
      'Kansas': ['Nebraska', 'Missouri', 'Oklahoma', 'Colorado'],
      'Kentucky': ['Indiana', 'Ohio', 'West Virginia', 'Virginia', 'Tennessee', 'Missouri', 'Illinois'],
      'Louisiana': ['Arkansas', 'Mississippi', 'Texas'],
      'Maine': ['New Hampshire'],
      'Maryland': ['Pennsylvania', 'Delaware', 'Virginia', 'West Virginia', 'District of Columbia'],
      'Massachusetts': ['New Hampshire', 'Rhode Island', 'Connecticut', 'New York', 'Vermont'],
      'Michigan': ['Ohio', 'Indiana', 'Wisconsin'],
      'Minnesota': ['Wisconsin', 'Iowa', 'South Dakota', 'North Dakota'],
      'Mississippi': ['Tennessee', 'Alabama', 'Louisiana', 'Arkansas'],
      'Missouri': ['Iowa', 'Illinois', 'Kentucky', 'Tennessee', 'Arkansas', 'Oklahoma', 'Kansas', 'Nebraska'],
      'Montana': ['North Dakota', 'South Dakota', 'Wyoming', 'Idaho'],
      'Nebraska': ['South Dakota', 'Iowa', 'Missouri', 'Kansas', 'Colorado', 'Wyoming'],
      'Nevada': ['Oregon', 'Idaho', 'Utah', 'Arizona', 'California'],
      'New Hampshire': ['Maine', 'Massachusetts', 'Vermont'],
      'New Jersey': ['New York', 'Pennsylvania', 'Delaware'],
      'New Mexico': ['Colorado', 'Oklahoma', 'Texas', 'Arizona', 'Utah'],
      'New York': ['Vermont', 'Massachusetts', 'Connecticut', 'New Jersey', 'Pennsylvania'],
      'North Carolina': ['Virginia', 'Tennessee', 'Georgia', 'South Carolina'],
      'North Dakota': ['Minnesota', 'South Dakota', 'Montana'],
      'Ohio': ['Michigan', 'Pennsylvania', 'West Virginia', 'Kentucky', 'Indiana'],
      'Oklahoma': ['Kansas', 'Missouri', 'Arkansas', 'Texas', 'New Mexico', 'Colorado'],
      'Oregon': ['Washington', 'Idaho', 'Nevada', 'California'],
      'Pennsylvania': ['New York', 'New Jersey', 'Delaware', 'Maryland', 'West Virginia', 'Ohio'],
      'Rhode Island': ['Massachusetts', 'Connecticut'],
      'South Carolina': ['North Carolina', 'Georgia'],
      'South Dakota': ['North Dakota', 'Minnesota', 'Iowa', 'Nebraska', 'Wyoming', 'Montana'],
      'Tennessee': ['Kentucky', 'Virginia', 'North Carolina', 'Georgia', 'Alabama', 'Mississippi', 'Arkansas', 'Missouri'],
      'Texas': ['New Mexico', 'Oklahoma', 'Arkansas', 'Louisiana'],
      'Utah': ['Idaho', 'Wyoming', 'Colorado', 'New Mexico', 'Arizona', 'Nevada'],
      'Vermont': ['New Hampshire', 'Massachusetts', 'New York'],
      'Virginia': ['Maryland', 'West Virginia', 'Kentucky', 'Tennessee', 'North Carolina', 'District of Columbia'],
      'Washington': ['Oregon', 'Idaho'],
      'West Virginia': ['Ohio', 'Pennsylvania', 'Maryland', 'Virginia', 'Kentucky'],
      'Wisconsin': ['Minnesota', 'Iowa', 'Illinois', 'Michigan'],
      'Wyoming': ['Montana', 'South Dakota', 'Nebraska', 'Colorado', 'Utah', 'Idaho'],
      'District of Columbia': ['Maryland', 'Virginia']
    },

    timeMessages: [
      { text: 'just now', weight: 2 },
      { text: '1 minute ago', weight: 3 },
      { text: '2 minutes ago', weight: 4 },
      { text: '3 minutes ago', weight: 3 },
      { text: '5 minutes ago', weight: 2 },
      { text: 'a few minutes ago', weight: 3 },
      { text: 'about 10 minutes ago', weight: 1 },
      { text: 'moments ago', weight: 2 }
    ],

    templates: {
      named: [
        '{name} from {city}, {stateAbbr} just purchased {time}',
        '{name} in {city}, {stateAbbr} placed an order {time}',
        '{name} from {city}, {stateAbbr} just signed up {time}',
        '{name} in {city}, {stateAbbr} grabbed this offer {time}',
        '{name} from {city}, {stateAbbr} just checked out {time}'
      ],
      proximity: [
        'Someone near you in {city}, {stateAbbr} just purchased {time}',
        'A new customer from {city}, {stateAbbr} ordered {time}',
        'Someone in your area ({city}, {stateAbbr}) bought this {time}',
        'New order confirmed from {city}, {stateAbbr} {time}'
      ]
    },

    stateAbbreviations: {
      'Alabama': 'AL', 'Alaska': 'AK', 'Arizona': 'AZ', 'Arkansas': 'AR', 'California': 'CA',
      'Colorado': 'CO', 'Connecticut': 'CT', 'Delaware': 'DE', 'Florida': 'FL', 'Georgia': 'GA',
      'Hawaii': 'HI', 'Idaho': 'ID', 'Illinois': 'IL', 'Indiana': 'IN', 'Iowa': 'IA',
      'Kansas': 'KS', 'Kentucky': 'KY', 'Louisiana': 'LA', 'Maine': 'ME', 'Maryland': 'MD',
      'Massachusetts': 'MA', 'Michigan': 'MI', 'Minnesota': 'MN', 'Mississippi': 'MS', 'Missouri': 'MO',
      'Montana': 'MT', 'Nebraska': 'NE', 'Nevada': 'NV', 'New Hampshire': 'NH', 'New Jersey': 'NJ',
      'New Mexico': 'NM', 'New York': 'NY', 'North Carolina': 'NC', 'North Dakota': 'ND', 'Ohio': 'OH',
      'Oklahoma': 'OK', 'Oregon': 'OR', 'Pennsylvania': 'PA', 'Rhode Island': 'RI', 'South Carolina': 'SC',
      'South Dakota': 'SD', 'Tennessee': 'TN', 'Texas': 'TX', 'Utah': 'UT', 'Vermont': 'VT',
      'Virginia': 'VA', 'Washington': 'WA', 'West Virginia': 'WV', 'Wisconsin': 'WI', 'Wyoming': 'WY',
      'District of Columbia': 'DC'
    },

    productName: null
  };

  let visitorGeo = null;
  let notificationCount = 0;
  let containerEl = null;
  let timeoutId = null;
  let usedNames = new Set();
  let localCityPool = [];

  function injectStyles() {
    if (document.getElementById('sn-styles')) return;
    const style = document.createElement('style');
    style.id = 'sn-styles';
    style.textContent = `
      @keyframes sn-pulse {
        0%, 100% { box-shadow: 0 0 0 0 rgba(34,197,94,0.3); }
        50% { box-shadow: 0 0 0 8px rgba(34,197,94,0); }
      }

      .sn-container {
        position: fixed;
        bottom: 24px;
        left: 24px;
        z-index: 999999;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        pointer-events: none;
      }

      .sn-toast {
        position: relative;
        display: flex;
        align-items: center;
        gap: 14px;
        background: #ffffff;
        border-radius: 14px;
        padding: 16px 22px 16px 18px;
        box-shadow:
          0 10px 40px rgba(0,0,0,0.10),
          0 2px 10px rgba(0,0,0,0.06),
          0 0 0 1px rgba(0,0,0,0.03);
        border-left: 4px solid #22c55e;
        max-width: 400px;
        min-width: 290px;
        transform: translateX(-130%) scale(0.85);
        opacity: 0;
        transition: all ${CONFIG.animationDuration}ms cubic-bezier(0.34, 1.56, 0.64, 1);
        pointer-events: auto;
        cursor: default;
        backdrop-filter: blur(10px);
      }

      .sn-toast.sn-visible {
        transform: translateX(0) scale(1);
        opacity: 1;
      }

      .sn-toast.sn-hiding {
        transform: translateX(-130%) scale(0.85);
        opacity: 0;
        transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
      }

      .sn-avatar {
        flex-shrink: 0;
        width: 46px;
        height: 46px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 22px;
        position: relative;
      }

      .sn-avatar::after {
        content: '';
        position: absolute;
        bottom: 1px;
        right: 1px;
        width: 12px;
        height: 12px;
        background: #22c55e;
        border-radius: 50%;
        border: 2px solid #fff;
        animation: sn-pulse 2s ease-in-out infinite;
      }

      .sn-avatar-female { background: linear-gradient(135deg, #fce4ec, #f48fb1); }
      .sn-avatar-male { background: linear-gradient(135deg, #e3f2fd, #90caf9); }
      .sn-avatar-generic { background: linear-gradient(135deg, #e8f5e9, #a5d6a7); }

      .sn-body { flex: 1; min-width: 0; }

      .sn-message {
        font-size: 13.5px;
        color: #1a1a2e;
        line-height: 1.45;
        font-weight: 500;
        letter-spacing: -0.01em;
      }

      .sn-message strong { color: #0f172a; font-weight: 700; }

      .sn-meta {
        display: flex;
        align-items: center;
        gap: 6px;
        margin-top: 4px;
        font-size: 11.5px;
        color: #9ca3af;
      }

      .sn-verified-badge {
        display: inline-flex;
        align-items: center;
        gap: 3px;
        color: #22c55e;
        font-weight: 600;
        font-size: 11px;
      }

      .sn-verified-badge svg { width: 13px; height: 13px; fill: currentColor; }
      .sn-separator { color: #d1d5db; }

      .sn-product-name {
        color: #6b7280;
        font-style: italic;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        max-width: 160px;
      }

      .sn-close {
        position: absolute;
        top: 8px;
        right: 10px;
        background: none;
        border: none;
        color: #d1d5db;
        cursor: pointer;
        font-size: 16px;
        line-height: 1;
        padding: 2px 5px;
        border-radius: 6px;
        opacity: 0;
        transition: all 0.2s ease;
      }

      .sn-toast:hover .sn-close { opacity: 1; }
      .sn-close:hover { color: #4b5563; background: #f3f4f6; }

      .sn-progress {
        position: absolute;
        bottom: 0;
        left: 4px;
        right: 0;
        height: 3px;
        background: #f0fdf4;
        border-radius: 0 0 14px 0;
        overflow: hidden;
      }

      .sn-progress-bar {
        height: 100%;
        background: linear-gradient(90deg, #22c55e, #16a34a);
        border-radius: 0 0 14px 0;
        width: 100%;
        transform-origin: left;
        animation: sn-shrink ${CONFIG.notificationDuration}ms linear forwards;
      }

      @keyframes sn-shrink {
        from { transform: scaleX(1); }
        to { transform: scaleX(0); }
      }

      @media (max-width: 480px) {
        .sn-container { bottom: 16px; left: 10px; right: 10px; }
        .sn-toast { max-width: 100%; min-width: unset; padding: 12px 16px 12px 14px; }
        .sn-message { font-size: 13px; }
        .sn-avatar { width: 40px; height: 40px; font-size: 19px; }
      }
    `;
    document.head.appendChild(style);
  }

  function createContainer() {
    containerEl = document.createElement('div');
    containerEl.className = 'sn-container';
    containerEl.setAttribute('role', 'status');
    containerEl.setAttribute('aria-live', 'polite');
    document.body.appendChild(containerEl);
  }

  async function fetchGeoData() {
    try {
      const res = await fetch(CONFIG.geoApiUrl);
      if (!res.ok) throw new Error('Geo API failed');
      const data = await res.json();
      visitorGeo = {
        city: data.city || null,
        region: data.region || null,
        country: data.country_name || data.country || null,
        countryCode: data.country_code || data.country || null
      };
    } catch (_) {
      visitorGeo = { city: null, region: null, country: 'United States', countryCode: 'US' };
    }

    buildLocalCityPool();
  }

  function findStateForCity(cityName) {
    for (const [state, cities] of Object.entries(CONFIG.stateCities)) {
      if (cities.some(c => c.toLowerCase() === cityName.toLowerCase())) {
        return state;
      }
    }
    return null;
  }

  function buildLocalCityPool() {
    localCityPool = [];

    if (!visitorGeo) return;

    let visitorState = visitorGeo.region;

    if (visitorGeo.city && !visitorState) {
      visitorState = findStateForCity(visitorGeo.city);
    }

    if (!visitorState || !CONFIG.stateCities[visitorState]) {
      const matchedState = Object.keys(CONFIG.stateCities).find(
        s => s.toLowerCase() === (visitorState || '').toLowerCase()
      );
      if (matchedState) visitorState = matchedState;
    }

    if (visitorState && CONFIG.stateCities[visitorState]) {
      const sameCities = CONFIG.stateCities[visitorState];
      sameCities.forEach(city => {
        localCityPool.push({ city, state: visitorState, weight: 5 });
      });

      const neighbors = CONFIG.neighborStates[visitorState] || [];
      neighbors.forEach(ns => {
        const nsCities = CONFIG.stateCities[ns];
        if (nsCities) {
          const pick = nsCities.slice(0, 5);
          pick.forEach(city => {
            localCityPool.push({ city, state: ns, weight: 2 });
          });
        }
      });
    }

    if (localCityPool.length === 0) {
      const fallbackStates = ['Texas', 'Florida', 'California', 'Georgia', 'Tennessee', 'North Carolina', 'Ohio', 'Pennsylvania'];
      fallbackStates.forEach(st => {
        const cities = CONFIG.stateCities[st];
        if (cities) {
          cities.slice(0, 4).forEach(city => {
            localCityPool.push({ city, state: st, weight: 1 });
          });
        }
      });
    }

    if (visitorGeo.city) {
      const vc = visitorGeo.city;
      const vState = visitorState || '';
      localCityPool = localCityPool.filter(
        e => !(e.city.toLowerCase() === vc.toLowerCase() && e.state === vState)
      );

      for (let i = 0; i < 6; i++) {
        localCityPool.push({ city: vc, state: vState, weight: 8 });
      }
    }
  }

  function pickRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function pickWeighted(items) {
    const totalWeight = items.reduce((sum, item) => sum + (item.weight || 1), 0);
    let random = Math.random() * totalWeight;
    for (const item of items) {
      random -= (item.weight || 1);
      if (random <= 0) return item;
    }
    return items[items.length - 1];
  }

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function getUniqueName(pool) {
    const available = pool.filter(n => !usedNames.has(n));
    if (available.length === 0) {
      usedNames.clear();
      return pickRandom(pool);
    }
    const name = pickRandom(available);
    usedNames.add(name);
    return name;
  }

  function pickTimeMessage() {
    const totalWeight = CONFIG.timeMessages.reduce((sum, item) => sum + item.weight, 0);
    let random = Math.random() * totalWeight;
    for (const item of CONFIG.timeMessages) {
      random -= item.weight;
      if (random <= 0) return item.text;
    }
    return CONFIG.timeMessages[CONFIG.timeMessages.length - 1].text;
  }

  function generateCityData() {
    if (localCityPool.length === 0) {
      return { city: 'Houston', stateAbbr: 'TX' };
    }

    const entry = pickWeighted(localCityPool);
    const stateAbbr = CONFIG.stateAbbreviations[entry.state] || entry.state;
    return { city: entry.city, stateAbbr };
  }

  function generateNotification() {
    const isGeneric = Math.random() < 0.18;
    const isFemale = Math.random() > 0.45;

    let name, gender, emoji;

    if (isGeneric) {
      name = null;
      gender = 'generic';
      emoji = '🛒';
    } else if (isFemale) {
      name = getUniqueName(CONFIG.names.female);
      gender = 'female';
      emoji = pickRandom(['👩', '👩‍💼', '🙋‍♀️', '👱‍♀️']);
    } else {
      name = getUniqueName(CONFIG.names.male);
      gender = 'male';
      emoji = pickRandom(['👨', '👨‍💼', '🙋‍♂️', '👱‍♂️']);
    }

    const { city, stateAbbr } = generateCityData();
    const time = pickTimeMessage();

    let template;
    if (isGeneric) {
      template = pickRandom(CONFIG.templates.proximity);
    } else {
      template = pickRandom(CONFIG.templates.named);
    }

    const message = template
      .replace('{name}', name || '')
      .replace('{city}', city)
      .replace('{stateAbbr}', stateAbbr)
      .replace('{time}', time);

    const highlightedMessage = message
      .replace(name || '§SKIP§', name ? `<strong>${name}</strong>` : '')
      .replace(city + ', ' + stateAbbr, `<strong>${city}, ${stateAbbr}</strong>`);

    return { message: highlightedMessage, gender, emoji };
  }

  const VERIFIED_SVG = '<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>';

  function showNotification() {
    if (notificationCount >= CONFIG.maxNotificationsPerSession) {
      stop();
      return;
    }

    const existing = containerEl.querySelector('.sn-toast');
    if (existing) {
      existing.classList.remove('sn-visible');
      existing.classList.add('sn-hiding');
      setTimeout(() => existing.remove(), CONFIG.animationDuration);
    }

    const { message, gender, emoji } = generateNotification();

    const toast = document.createElement('div');
    toast.className = 'sn-toast';

    let productHtml = '';
    if (CONFIG.productName) {
      productHtml = `<span class="sn-separator">·</span><span class="sn-product-name">${CONFIG.productName}</span>`;
    }

    toast.innerHTML = `
      <div class="sn-avatar sn-avatar-${gender}">${emoji}</div>
      <div class="sn-body">
        <div class="sn-message">${message}</div>
        <div class="sn-meta">
          <span class="sn-verified-badge">${VERIFIED_SVG} Verified</span>
          ${productHtml}
        </div>
      </div>
      <button class="sn-close" aria-label="Close">&times;</button>
      <div class="sn-progress"><div class="sn-progress-bar"></div></div>
    `;

    toast.querySelector('.sn-close').addEventListener('click', function () {
      toast.classList.remove('sn-visible');
      toast.classList.add('sn-hiding');
      setTimeout(function () { toast.remove(); }, CONFIG.animationDuration);
    });

    containerEl.appendChild(toast);

    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        toast.classList.add('sn-visible');
      });
    });

    setTimeout(function () {
      if (toast.parentNode) {
        toast.classList.remove('sn-visible');
        toast.classList.add('sn-hiding');
        setTimeout(function () { if (toast.parentNode) toast.remove(); }, CONFIG.animationDuration);
      }
    }, CONFIG.notificationDuration);

    notificationCount++;
    scheduleNext();
  }

  function scheduleNext() {
    if (notificationCount >= CONFIG.maxNotificationsPerSession) return;
    var delay = getRandomInt(CONFIG.displayInterval.min, CONFIG.displayInterval.max);
    timeoutId = setTimeout(showNotification, delay);
  }

  function start() {
    var initialDelay = getRandomInt(4000, 10000);
    timeoutId = setTimeout(showNotification, initialDelay);
  }

  function stop() {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
  }

  function readScriptConfig() {
    var scripts = document.querySelectorAll('script[src*="smart-notifications"]');
    var script = scripts[scripts.length - 1];
    if (!script) return;

    var product = script.getAttribute('data-sn-product');
    if (product) CONFIG.productName = product;

    var interval = script.getAttribute('data-sn-interval');
    if (interval) {
      var parts = interval.split(',').map(Number);
      if (parts[0]) CONFIG.displayInterval.min = parts[0] * 1000;
      if (parts[1]) CONFIG.displayInterval.max = parts[1] * 1000;
    }

    var maxN = script.getAttribute('data-sn-max');
    if (maxN) CONFIG.maxNotificationsPerSession = parseInt(maxN, 10);

    var duration = script.getAttribute('data-sn-duration');
    if (duration) CONFIG.notificationDuration = parseInt(duration, 10) * 1000;
  }

  async function init() {
    readScriptConfig();
    injectStyles();
    createContainer();
    await fetchGeoData();
    start();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.SmartNotifications = {
    start: start,
    stop: stop,
    show: showNotification,
    config: CONFIG
  };
})();
