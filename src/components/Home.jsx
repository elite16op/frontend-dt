import React, { useState, useEffect } from "react";
import Gandhipic from "../images/gandhi-ji.jpg";
import Up from "../images/up.png";
import Down from "../images/down-arrow.png";
import BjpPic from "../images/bjp.png";
import IncPic from "../images/INC_Logo.png";
import AapPic from "../images/aap.jpg";
import axios from "axios";
import Historical from "../images/historical.png";

export default function Home() {
  useEffect(()=>{async () => {
    await axios
      .get("http://localhost:3000/data", {
        headers: { "content-type": "application/x-www-form-urlencoded" },
      })
      .then((res) => {
        console.log(res);
        const bjpBolo = res.data.bjp;
        const aapBolo = res.data.aap;
        const incBolo = res.data.inc;
      });
  }, []});



  const [bjp, setBjp] = useState("hidden");
  const [aap, setAap] = useState("hidden");
  const [inc, setInc] = useState("hidden");
  const [bshow, setBshow] = useState(Down);
  const [ashow, setAshow] = useState(Down);
  const [ishow, setIshow] = useState(Down);
  const [hist, setHist] = useState("hidden");
  const [sent, setSent] = useState("hidden");

  const wiki = () => {
    location.href="https://en.wikipedia.org/wiki/Elections_in_India";
  };

  const histToggle = () => {
    if (hist == "hidden") {
      setHist("block");
      setSent("hidden");
    } else {
      setHist("hidden");
      setSent("block");
    }
  };
  const sentToggle = () => {
    if (sent == "hidden") {
      setSent("block");
      setHist("hidden");
    } else {
      setSent("hidden");
      setHist("block");
    }
  };

  const bjpToggle = () => {
    if (bjp == "hidden") {
      setBjp("block");
      setBshow(Up);
    } else {
      setBjp("hidden");
      setBshow(Down);
    }
  };
  const aapToggle = () => {
    if (aap == "hidden") {
      setAap("block");
      setAshow(Up);
    } else {
      setAap("hidden");
      setAshow(Down);
    }
  };
  const incToggle = () => {
    if (inc == "hidden") {
      setInc("block");
      setInc(Up);
    } else {
      setInc("hidden");
      setIshow(Down);
    }
  };

  return (
    <div>
      <div className="">
        <div className="top-row block mb-[3rem] mt-0">
          <i className="not-italic text-[4rem] font-bold block my-6">
            Election Prediction Of India
          </i>
          <i className="not-italic text-right">Using Sentimental Analysis</i>
        </div>
        <div className="row1 flex justify-evenly">
          <div className="image w-[50%]py-4 text-center">
            <img src={Gandhipic} alt="" className="w-[25rem] align-middle" />
          </div>
          <div className="context1 w-[45%] mr-14 border border-black px-6 py-4 rounded-3xl">
            <i className="not-italic block mt-7 text-left">
              The Lok Sabha is composed of representatives of people chosen by
              direct election on the basis of Universal Adult Suffrage. Maximum
              strength of the House is 552 members - 530 members to represent
              the States, 20 members to represent the Union Territories, and 2
              members to be nominated by the President from the Anglo-Indian
              Community. At present, the strength of the House is 543. The term
              of the Lok Sabha, unless dissolved, is five years from the date
              appointed for its first meeting. However, while a proclamation of
              emergency is in operation, this period may be extended by
              Parliament by law for a period not exceeding one year at a time
              and not extending in any case, beyond a period of six months after
              the proclamation has ceased to operate.
            </i>
            <div className="block text-left mt-5">
              <div
                className="button bg-blue-600 inline-block py-4 px-4 rounded-3xl cursor-pointer hover:scale-105 hover:duration-300"
                onClick={wiki}
              >
                <i className="not-italic text-white font-semibold text-lg">
                  Wikipedia
                </i>
              </div>
            </div>
          </div>
        </div>
        <div className="row2 mt-16 flex justify-evenly">
          <div className="parties w-[40%]">
            <div className="bjp mt-2 border border-black rounded-2xl py-1">
              <div className="">
                <div className="inline-block align-sub">
                  <img src={BjpPic} alt="" className="w-10" />
                </div>
                <i className="not-italic text-xl ml-4 mr-[8rem] font-bold">
                  Bhartiya Janta Party
                </i>
                <div
                  className="inline-block cursor-pointer align-sub"
                  onClick={bjpToggle}
                >
                  <img src={bshow} alt="" className="w-10" />
                </div>
              </div>
              <div className={`${bjp} text-left px-3 py-2`}>
                <i className="not-italic">
                  The party's origins lie in the Bharatiya Jana Sangh, which was
                  founded in 1951 by Indian politician Shyama Prasad
                  Mukherjee.[45] After The Emergency of 1975 to 1977, the Jana
                  Sangh merged with several other political parties to form the
                  Janata Party; it defeated the then-incumbent Indian National
                  Congress in the 1977 general election.
                </i>
              </div>
            </div>
            <div className="aap mt-2 border border-black rounded-2xl py-1">
              <div className="">
                <div className="inline-block align-sub">
                  <img src={AapPic} alt="" className="w-12" />
                </div>
                <i className="not-italic text-xl ml-4 mr-[9.4rem] font-bold">
                  Aam Aadmi Party
                </i>
                <div
                  className="inline-block cursor-pointer align-sub"
                  onClick={aapToggle}
                >
                  <img src={ashow} alt="" className="w-10" />
                </div>
              </div>
              <div className={`${aap} text-left px-3 py-2`}>
                <i className="not-italic">
                  The party came into existence following a rift between
                  Kejriwal and Indian activist Anna Hazare regarding the
                  incorporation of electoral politics into the popular 2011
                  Indian anti-corruption movement, which had been demanding a
                  Jan Lokpal Bill since 2011. Hazare preferred the movement
                  should remain politically unaligned, whereas Kejriwal felt the
                  failure of the agitation route necessitated changes in
                  government's representation itself. Janlokpal was established
                  in Delhi and in Punjab as soon as AAP formed the respective
                  governments with full majority.[28]
                </i>
              </div>
            </div>
            <div className="inc mt-2 border border-black rounded-2xl py-1">
              <div className="">
                <div className="inline-block align-sub">
                  <img src={IncPic} alt="" className="w-10" />
                </div>
                <i className="not-italic text-xl ml-4 mr-[5.2rem] font-bold">
                  Indian National Congress
                </i>
                <div
                  className="inline-block cursor-pointer align-sub"
                  onClick={incToggle}
                >
                  <img src={ishow} alt="" className="w-10 align-middle" />
                </div>
              </div>
              <div className={`${inc} text-left px-3 py-2`}>
                <i className="not-italic">
                  The Indian National Congress (INC), colloquially the Congress
                  Party but often simply the Congress, is a political party in
                  India with widespread roots.[24] Founded in 1885, it was the
                  first modern nationalist movement to emerge in the British
                  Empire in Asia and Africa.[a][25] From the late 19th century,
                  and especially after 1920, under the leadership of Mahatma
                  Gandhi, the Congress became the principal leader of the Indian
                  independence movement.[26] The Congress led India to
                  independence from the United Kingdom,[d] and significantly
                  influenced other anti-colonial nationalist movements in the
                  British Empire.[e][25]
                </i>
              </div>
            </div>
          </div>
          <div className="context2 w-[50%] border border-black ml-10 rounded-xl">
            <div className="type flex justify-evenly">
              <div
                className="historical mt-3 px-4 py-1 rounded-lg bg-orange-600 cursor-pointer"
                onClick={histToggle}
              >
                <i className="not-italic text-lg font-bold text-white">
                  Historical Data
                </i>
              </div>
              <div
                className="sentimental mt-3 px-4 py-1 rounded-lg bg-green-600 cursor-pointer"
                onClick={sentToggle}
              >
                <i className="not-italic text-lg font-bold text-white">
                  Sentimental analysis
                </i>
              </div>
            </div>
            <div className="analysis block">
              <img src={Historical} alt="" className={`mx-auto my-2 ${hist}`} />
              <div className={`my-2 mx-auto ${sent}`}>
                <div className="bjp text-left ml-4 mt-4">
                  <i className="not-italic text-xl font-semibold">Bhartiya Janta Party</i>
                  <i className="not-italic text-orange-500">{}</i>
                </div>
                <div className="aap ml-4 text-left mt-4">
                  <i className="not-italic text-xl font-semibold">Aam Aadmi Party</i>
                  <i className="not-italic text-blue-500">{}</i>
                </div>
                <div className="inc text-left ml-4 mt-4">
                  <i className="not-italic text-xl font-semibold">Indian National Congress</i>
                  <i className="not-italic text-green-500">{}</i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
