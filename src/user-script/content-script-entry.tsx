import "../../refs";
import "../setup";
import { ContentScript } from "./content-script";
import { customPDFViewerRedirectCheck } from "../pdf-viewer/pdf-utils";
import { initContentPage as initMellowtel } from "../../mellowtel/mellowtel.bgc";

// handle translation in PDF-files
void customPDFViewerRedirectCheck();

// mellowtel integration
void initMellowtel();

// render app
void ContentScript.init();
