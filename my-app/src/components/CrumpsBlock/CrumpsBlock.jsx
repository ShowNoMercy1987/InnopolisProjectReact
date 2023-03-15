import Crumps from "../Crumps/Crumps";
import "../CrumpsBlock/CrumpsBlock.css";
import crumpslist from "../CrumpsBlock/crumpslist";

function CrumpsBlock() {
  return (
    <>
      <nav className="crumps crumps_padding">
        {crumpslist.map(function (list, id) {
          return (
            <div className="childs" key={id}>
              <Crumps link={list.name} />
            </div>
          );
        })}
      </nav>
    </>
  );
};

export default CrumpsBlock;
