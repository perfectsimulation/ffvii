import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import Map from './map/map';
import AncientForest from './map/ancient-forest';
import BoneVillage from './map/bone-village';
import ChocoboFarm from './map/chocobo-farm';
import ChocoboSage from './map/chocobo-sage';
import CosmoCanyon from './map/cosmo-canyon';
import CostaDelSol from './map/costa-del-sol';
import ForgottenCapital from './map/forgotten-capital';
import FortCondor from './map/fort-condor';
import GoblinIsland from './map/goblin-island';
import GoldSaucer from './map/gold-saucer';
import Gongaga from './map/gongaga';
import GreatGlacier from './map/great-glacier';
import IcicleInn from './map/icicle-inn';
import Junon from './map/junon';
import Kalm from './map/kalm';
import LucreciasCave from './map/lucrecias-cave';
import Mideel from './map/mideel';
import Midgar from './map/midgar';
import Nibelheim from './map/nibelheim';
import NorthCorel from './map/north-corel';
import NorthernCrater from './map/northern-crater';
import RocketTown from './map/rocket-town';
import RoundIsland from './map/round-island';
import SunkenGelnika from './map/sunken-gelnika';
import TempleOfTheAncients from './map/temple-of-the-ancients';
import Wutai from './map/wutai';

const routing = (
  <Router>
    <Route exact path='/' component={App} />
    <Route exact path='/map' component={Map} />
    <Route path='/map/ancient-forest' component={AncientForest} />
    <Route path='/map/bone-village' component={BoneVillage} />
    <Route path='/map/chocobo-farm' component={ChocoboFarm} />
    <Route path='/map/chocobo-sage' component={ChocoboSage} />
    <Route path='/map/cosmo-canyon' component={CosmoCanyon} />
    <Route path='/map/costa-del-sol' component={CostaDelSol} />
    <Route path='/map/forgotten-capital' component={ForgottenCapital} />
    <Route path='/map/fort-condor' component={FortCondor} />
    <Route path='/map/goblin-island' component={GoblinIsland} />
    <Route path='/map/gold-saucer' component={GoldSaucer} />
    <Route path='/map/gongaga' component={Gongaga} />
    <Route path='/map/great-glacier' component={GreatGlacier} />
    <Route path='/map/icicle-inn' component={IcicleInn} />
    <Route path='/map/junon' component={Junon} />
    <Route path='/map/kalm' component={Kalm} />
    <Route path='/map/lucrecias-cave' component={LucreciasCave} />
    <Route path='/map/mideel' component={Mideel} />
    <Route path='/map/midgar' component={Midgar} />
    <Route path='/map/nibelheim' component={Nibelheim} />
    <Route path='/map/north-corel' component={NorthCorel} />
    <Route path='/map/northern-crater' component={NorthernCrater} />
    <Route path='/map/rocket-town' component={RocketTown} />
    <Route path='/map/round-island' component={RoundIsland} />
    <Route path='/map/sunken-gelnika' component={SunkenGelnika} />
    <Route path='/map/temple-of-the-ancients' component={TempleOfTheAncients} />
    <Route path='/map/wutai' component={Wutai} />
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
