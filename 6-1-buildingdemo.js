
/*jshint esversion: 6 */
// @ts-check

// these four lines fake out TypeScript into thinking that THREE
// has the same type as the T.js module, so things work for type checking
// type inferencing figures out that THREE has the same type as T
// and then I have to use T (not THREE) to avoid the "UMD Module" warning
/**  @type typeof import("./THREE/threets/index"); */
let T;
// @ts-ignore
T = THREE;

// get things we need
import { GrWorld } from "./Framework/GrWorld.js";
import { GrObject } from "./Framework/GrObject.js";
import { GrTwoRoofBulid, GrCrossHipped, GrPyramidHip } from "./6-1-buildings.js";
import * as Helpers from "./Libs/helpers.js";

// your buildings are defined in another file... you should import them
// here
function shift(obj, x, z)
{
    obj.objects[0].translateX(x);
    obj.objects[0].translateZ(z);
    return obj;
}

function test() {
    let world = new GrWorld();
    let build1 = shift(new GrTwoRoofBulid(), -1, 1);
    world.add(build1);
    let build2 = shift(new GrCrossHipped(), 1, 1);
    world.add(build2);
    let build3 = shift(new GrPyramidHip(), 4, 0);
    world.add(build3);
    // place your buildings and trees into the world here

    world.go();
}
Helpers.onWindowOnload(test);
