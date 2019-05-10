
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
import * as Helpers from "./Libs/helpers.js";

// define a class of Dice here - it should be a subclass of GrObject
class GrDice extends GrObject
{
    constructor()
    {
        let geo = new T.Geometry();

        geo.vertices.push(new T.Vector3(-1, 0, 1));
        geo.vertices.push(new T.Vector3(-1, 1, 1));
        geo.vertices.push(new T.Vector3(0, 1, 1));
        geo.vertices.push(new T.Vector3(0, 0, 1));
        geo.vertices.push(new T.Vector3(0, 0, 0));
        geo.vertices.push(new T.Vector3(0, 1, 0));
        geo.vertices.push(new T.Vector3(-1, 1, 0));
        geo.vertices.push(new T.Vector3(-1, 0, 0));
        geo.faceVertexUvs = [ [] ];
        // Front-face
        let f1 = new T.Face3(1, 0, 2);
        geo.faces.push(f1);
        geo.faceVertexUvs[0].push([new T.Vector2(1/3, 1/3), new T.Vector2(1/3, 2/3), new T.Vector2(2/3, 1/3)]);
        let f2 = new T.Face3(0, 3, 2);
        geo.faces.push(f2);
        geo.faceVertexUvs[0].push([new T.Vector2(1/3, 2/3), new T.Vector2(2/3, 2/3), new T.Vector2(2/3, 1/3)]);
        // Right-face
        let f3 = new T.Face3(3, 4, 2);
        geo.faces.push(f3);
        geo.faceVertexUvs[0].push([new T.Vector2(1/3, 1), new T.Vector2(2/3, 1), new T.Vector2(1/3, 2/3)]);
        let f4 = new T.Face3(4, 5, 2);
        geo.faces.push(f4);
        geo.faceVertexUvs[0].push([new T.Vector2(2/3, 1), new T.Vector2(2/3, 2/3), new T.Vector2(1/3, 2/3)]);
        // Top-face
        let f5 = new T.Face3(5, 6, 2);
        geo.faces.push(f5);
        geo.faceVertexUvs[0].push([new T.Vector2(1, 1/3), new T.Vector2(2/3, 1/3), new T.Vector2(1, 2/3)]);
        let f6 = new T.Face3(6, 1, 2);
        geo.faces.push(f6);
        geo.faceVertexUvs[0].push([new T.Vector2(2/3, 1/3), new T.Vector2(2/3, 2/3), new T.Vector2(1, 2/3)]);
        // back-face
        let f7 = new T.Face3(5, 4, 6);
        geo.faces.push(f7);
        geo.faceVertexUvs[0].push([new T.Vector2(2/3, 2/3), new T.Vector2(2/3, 1), new T.Vector2(1, 2/3)]);
        let f8 = new T.Face3(4, 7, 6);
        geo.faces.push(f8);
        geo.faceVertexUvs[0].push([new T.Vector2(2/3, 1), new T.Vector2(1, 1), new T.Vector2(1, 2/3)]);
        // Left-face
        let f9 = new T.Face3(7, 0, 6);
        geo.faces.push(f9);
        geo.faceVertexUvs[0].push([new T.Vector2(1/3, 1/3), new T.Vector2(2/3, 1/3), new T.Vector2(1/3, 0)]);
        let f10 = new T.Face3(0, 1, 6);
        geo.faces.push(f10);
        geo.faceVertexUvs[0].push([new T.Vector2(2/3, 1/3), new T.Vector2(2/3, 0), new T.Vector2(1/3, 0)]);
        // Bottom-face
        let f11 = new T.Face3(0, 7, 3);
        geo.faces.push(f11);
        geo.faceVertexUvs[0].push([new T.Vector2(0, 2/3), new T.Vector2(0, 1/3), new T.Vector2(1/3, 2/3)]);
        let f12 = new T.Face3(7, 4, 3);
        geo.faces.push(f12);
        geo.faceVertexUvs[0].push([new T.Vector2(0, 1/3), new T.Vector2(1/3, 1/3), new T.Vector2(1/3, 2/3)]);
        geo.computeFaceNormals();
        geo.uvsNeedUpdate = true;
        let texture = new T.TextureLoader().load("./Texture/dice_texture.png");
        texture.flipY = false;
        //let material = new T.MeshStandardMaterial({color: "white"});
        let material = new T.MeshStandardMaterial({map: texture});
        let mesh = new T.Mesh(geo, material);
        super("dice", mesh);
    }
}
function shift (grobj, x)
{
    grobj.objects[0].translateX(x);
    return grobj;
}
function test() {

    let world = new GrWorld();
    let d1 = shift(new GrDice(), -2);
    world.add(d1);
    let d2 = shift(new GrDice(), 2);
    d2.objects[0].rotateZ(Math.PI / 2);
    d2.objects[0].translateX(1);
    world.add(d2);
    // put the two dice into the world Here
    // don't forget to orient them so they have different numbers facing up

    world.go();
}
Helpers.onWindowOnload(test);
