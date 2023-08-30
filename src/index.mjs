import "./styles.css";
import {Name,fruit, trr as vish} from './script';
import Fname from './script';
import * as script from './script'

console.log(Name);
console.log(fruit);
console.log (Fname);
console.log(vish);
console.log(script.Name);


document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>

<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
