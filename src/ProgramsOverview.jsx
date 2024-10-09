import React from "react";
import PrPathway from "./HomePrograms/PrPathway";
import WorkforceSolution from "./HomePrograms/WorkforceSolution";
import TailorImmigration from "./HomePrograms/TailorImmigration";
import ImmigrationIntialAssesment from "./HomePrograms/ImmigrationIntialAssesment";
import VisitorVisa from './HomePrograms/VisitorVisa';
import StudyVisa from "./HomePrograms/StudyVisa";
import WorkVisa from "./HomePrograms/WorkVisa";
import FamilySponsorship from "./HomePrograms/FamilySponsorship";
import HireWorker from "./HomePrograms/HireWorker";
import InvestBanner from "./HomePrograms/InvestBanner";
import AlbertaPNP from "./HomePrograms/AlbertaPNP";
import USVisa from "./HomePrograms/USVisa";

const ProgramsOverview = () => {
  return (
    <div>
      <PrPathway/>
      <WorkforceSolution/>
      <TailorImmigration/>
      <ImmigrationIntialAssesment/>
      <VisitorVisa/>
      <StudyVisa/>
      <WorkVisa/>
      <FamilySponsorship/>
      <HireWorker/>
      <InvestBanner/>
      <AlbertaPNP/>
      <USVisa/>
    </div>
  );
};

export default ProgramsOverview;
