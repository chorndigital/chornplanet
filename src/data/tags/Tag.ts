import {ITag} from "./_model/ITag";
import {TagDA} from "./TagDA";
import {TagDE} from "./TagDE";
import {TagEN} from "./TagEN";
import {TagFI} from "./TagFI";
import {TagFR} from "./TagFR";
import {TagJA} from "./TagJA";
import {TagKO} from "./TagKO";
import {TagNL} from "./TagNL";
import {TagTH} from "./TagTH";
import {TagZH_CN} from "./TagZH_CN";

export const Tag: Record<string, ITag> = {
    'en': TagEN,
    'th': TagTH,
    'fr': TagFR,
    'ja': TagJA,
    'de': TagDE,
    'nl': TagNL,
    'da': TagDA,
    'fi': TagFI,
    'ko': TagKO,
    'zh': TagZH_CN,
}