import React, { useState, useEffect } from "react";
import logo from './Logo.png'
import google from './google.png'
import microsoft from './microsoft.png'
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link } from "react-router-dom";

function CreateAccount() {
  const [fname, setfName] = useState("");
  const [lname, setlName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const [loading, setLoading] = useState(false);

  const create =()=>{
    let item = {fname,lname,phoneNumber,email,password,confirm}
    console.warn(item)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const countryPhoneCodes = {
    Afghanistan: "+93",
    Albania: "+355",
    Algeria: "+213",
    Andorra: "+376",
    Angola: "+244",
    "Antigua and Barbuda": "+1-268",
    Argentina: "+54",
    Armenia: "+374",
    Australia: "+61",
    Austria: "+43",
    Azerbaijan: "+994",
    Bahamas: "+1-242",
    Bahrain: "+973",
    Bangladesh: "+880",
    Barbados: "+1-246",
    Belarus: "+375",
    Belgium: "+32",
    Belize: "+501",
    Benin: "+229",
    Bhutan: "+975",
    Bolivia: "+591",
    "Bosnia and Herzegovina": "+387",
    Botswana: "+267",
    Brazil: "+55",
    Brunei: "+673",
    Bulgaria: "+359",
    "Burkina Faso": "+226",
    Burundi: "+257",
    "Cabo Verde": "+238",
    Cambodia: "+855",
    Cameroon: "+237",
    Canada: "+1",
    "Central African Republic": "+236",
    Chad: "+235",
    Chile: "+56",
    China: "+86",
    Colombia: "+57",
    Comoros: "+269",
    Congo: "+242",
    "Costa Rica": "+506",
    Croatia: "+385",
    Cuba: "+53",
    Cyprus: "+357",
    "Czech Republic": "+420",
    Denmark: "+45",
    Djibouti: "+253",
    Dominica: "+1-767",
    "Dominican Republic": "+1-809",
    "East Timor": "+670",
    Ecuador: "+593",
    Egypt: "+20",
    "El Salvador": "+503",
    "Equatorial Guinea": "+240",
    Eritrea: "+291",
    Estonia: "+372",
    Eswatini: "+268",
    Ethiopia: "+251",
    Fiji: "+679",
    Finland: "+358",
    France: "+33",
    Gabon: "+241",
    Gambia: "+220",
    Georgia: "+995",
    Germany: "+49",
    Ghana: "+233",
    Greece: "+30",
    Grenada: "+1-473",
    Guatemala: "+502",
    Guinea: "+224",
    "Guinea-Bissau": "+245",
    Guyana: "+592",
    Haiti: "+509",
    Honduras: "+504",
    Hungary: "+36",
    Iceland: "+354",
    India: "+91",
    Indonesia: "+62",
    Iran: "+98",
    Iraq: "+964",
    Ireland: "+353",
    Israel: "+972",
    Italy: "+39",
    Jamaica: "+1-876",
    Japan: "+81",
    Jordan: "+962",
    Kazakhstan: "+7",
    Kenya: "+254",
    Kiribati: "+686",
    "Korea, North": "+850",
    "Korea, South": "+82",
    Kosovo: "+383",
    Kuwait: "+965",
    Kyrgyzstan: "+996",
    Laos: "+856",
    Latvia: "+371",
    Lebanon: "+961",
    Lesotho: "+266",
    Liberia: "+231",
    Libya: "+218",
    Liechtenstein: "+423",
    Lithuania: "+370",
    Luxembourg: "+352",
    Madagascar: "+261",
    Malawi: "+265",
    Malaysia: "+60",
    Maldives: "+960",
    Mali: "+223",
    Malta: "+356",
    "Marshall Islands": "+692",
    Mauritania: "+222",
    Mauritius: "+230",
    Mexico: "+52",
    Micronesia: "+691",
    Moldova: "+373",
    Monaco: "+377",
    Mongolia: "+976",
    Montenegro: "+382",
    Morocco: "+212",
    Mozambique: "+258",
    Myanmar: "+95",
    Namibia: "+264",
    Nauru: "+674",
    Nepal: "+977",
    Netherlands: "+31",
    "New Zealand": "+64",
    Nicaragua: "+505",
    Niger: "+227",
    Nigeria: "+234",
    "North Macedonia": "+389",
    Norway: "+47",
    Oman: "+968",
    Pakistan: "+92",
    Palau: "+680",
    Palestine: "+970",
    Panama: "+507",
    "Papua New Guinea": "+675",
    Paraguay: "+595",
    Peru: "+51",
    Philippines: "+63",
    Poland: "+48",
    Portugal: "+351",
    Qatar: "+974",
    Romania: "+40",
    Russia: "+7",
    Rwanda: "+250",
    "Saint Kitts and Nevis": "+1-869",
    "Saint Lucia": "+1-758",
    "Saint Vincent and the Grenadines": "+1-784",
    Samoa: "+685",
    "San Marino": "+378",
    "Sao Tome and Principe": "+239",
    "Saudi Arabia": "+966",
    Senegal: "+221",
    Serbia: "+381",
    Seychelles: "+248",
    "Sierra Leone": "+232",
    Singapore: "+65",
    Slovakia: "+421",
    Slovenia: "+386",
    "Solomon Islands": "+677",
    Somalia: "+252",
    "South Africa": "+27",
    "South Sudan": "+211",
    Spain: "+34",
    "Sri Lanka": "+94",
    Sudan: "+249",
    Suriname: "+597",
    Sweden: "+46",
    Switzerland: "+41",
    Syria: "+963",
    Taiwan: "+886",
    Tajikistan: "+992",
    Tanzania: "+255",
    Thailand: "+66",
    Togo: "+228",
    Tonga: "+676",
    "Trinidad and Tobago": "+1-868",
    Tunisia: "+216",
    Turkey: "+90",
    Turkmenistan: "+993",
    Tuvalu: "+688",
    Uganda: "+256",
    Ukraine: "+380",
    "United Arab Emirates": "+971",
    "United Kingdom": "+44",
    "United States": "+1",
    Uruguay: "+598",
    Uzbekistan: "+998",
    Vanuatu: "+678",
    "Vatican City": "+379",
    Venezuela: "+58",
    Vietnam: "+84",
    Yemen: "+967",
    Zambia: "+260",
    Zimbabwe: "+263",
  };

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(email)
  }

  return (
   <>
   <div className='flex flex-col md:flex-row bg-emerald-800 m-8 h-[680px]'>
   <div className='text-left mx-8 md:w-2/5'>
        <img className=' rounded-full h-52 ml-12 my-5' src={logo} alt="Logo" />
        <h1 className='text-yellow-300 text-4xl my-8 font-medium'>Create Your Account</h1>
        <h1 className='text-yellow-300 text-4xl my-5 font-medium'>Welcome To AI Chef Master</h1>
        <p className='text-white text-3xl'>Where Taste Meets Technology: Experience AI Chef Master</p>
      </div>
    <div className='bg-yellow-100 w-full border-black rounded-l-3xl'>
    <h1 className='text-4xl font-medium ml-8 md:ml-40 mt-12'>Create Your Account</h1>
    <form onSubmit={handleSubmit} className="my-5 flex flex-col justify-start gap-y-7 ml-8 md:ml-32">
        <div className="md:w-3/5 text-sm flex md:gap-x-5">
            <input 
                type="text" 
                className="p-3 bg-yellow-100 border border-black focus:outline-none w-full md:w-3/4 placeholder-black rounded-lg"
                value={fname}
                required
                onChange={(e) => setfName(e.target.value)}
                placeholder='First Name'
            />
            <input 
                type="text" 
                className="p-3 bg-yellow-100 border border-black focus:outline-none w-full md:w-3/4 placeholder-black rounded-lg"
                value={lname}
                required
                onChange={(e) => setlName(e.target.value)}
                placeholder='Last Name'
            />
        </div>
        <div className="md:w-3/5 text-sm flex md:gap-x-5">
            <select className="p-3 bg-yellow-100 border rounded-lg border-black  focus:outline-none w-1/4">
                <option value="Select">Select</option>
                {Object.keys(countryPhoneCodes).map((country, index) => (
                    <option key={index} value={countryPhoneCodes[country]}>
                        {countryPhoneCodes[country]} ({country})
                    </option>
                ))}
            </select>
            <input 
                type="text" 
                className="p-3 bg-yellow-100 border border-black focus:outline-none w-full md:w-3/4 placeholder-black rounded-lg"
                value={phoneNumber}
                required
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder='Phone Number'
            />
        </div>
        <div className="md:w-3/4 text-sm  flex md:gap-x-24">
            <input 
                type="text" 
                className="p-3 bg-yellow-100 border border-black focus:outline-none w-full md:w-3/4 placeholder-black rounded-lg"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Email Address'
            />
        </div>
        <div className="md:w-3/5 text-sm  flex md:gap-x-5">
            <input 
                type="text" 
                className="p-3 bg-yellow-100 border border-black focus:outline-none w-full md:w-3/4 placeholder-black rounded-lg"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Password'
            />
            <input 
                type="text" 
                className="p-3 bg-yellow-100 border border-black focus:outline-none w-full md:w-3/4 placeholder-black rounded-lg"
                value={confirm}
                required
                onChange={(e) => setConfirm(e.target.value)}
                placeholder='Confirm Password'
            />
        </div>
        <button type="submit" onClick={create} className='bg-emerald-800 p-3 item-center my-3 w-full md:w-3/5 text-white text-2xl rounded-lg hover:scale-110'>Create Your Account</button>
    </form>
    
    <div className='flex ml-8 md:ml-32'>
          <p>Already have an account? <Link className="text-emerald-800 font-medium" to="/login">Login</Link></p>
        </div>

        <p className='text-3xl font-medium ml-8 md:ml-96 my-5'>Or</p>
        <div className='ml-8 md:ml-40 flex flex-col md:flex-row'>
          <div className='border p-2 rounded-lg border-black flex w-full md:w-52 hover:scale-110'>
            <img className='mr-2' src={google} alt="Google" />
            <button className='font-medium '>Signup With Google</button>
          </div>
          <div className='mt-4 md:mt-0 md:ml-8 border p-2 rounded-lg border-black flex w-full md:w-64 hover:scale-110'>
            <img className='mr-2' src={microsoft} alt="Microsoft" />
            <button className='font-medium '>Signup With Microsoft</button>
          </div>
        </div>
</div> 
   </div>
   </>
  )
}

export default CreateAccount
