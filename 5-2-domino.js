
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

let ot1 = new T.Vector2(0, 0),
    ot2 = new T.Vector2(1/3, 0),
    ot3 = new T.Vector2(0, 1/3);
let n1tr1 = new T.Vector2(1/3, 1/3),
    n1tr2 = new T.Vector2(1/3, 2/3),
    n1tr3 = new T.Vector2(2/3, 1/3),
    n1lb1 = new T.Vector2(1/3, 2/3),
    n1lb2 = new T.Vector2(2/3, 2/3),
    n1lb3 = new T.Vector2(2/3, 1/3);
let n2tr1 = new T.Vector2(0, 1/3),
    n2tr2 = new T.Vector2(0, 2/3),
    n2tr3 = new T.Vector2(1/3, 1/3),
    n2lb1 = new T.Vector2(0, 2/3),
    n2lb2 = new T.Vector2(1/3, 2/3),
    n2lb3 = new T.Vector2(1/3, 1/3);
let n3tr1 = new T.Vector2(1/3, 2/3),
    n3tr2 = new T.Vector2(1/3, 1),
    n3tr3 = new T.Vector2(2/3, 2/3),
    n3lb1 = new T.Vector2(1/3, 1),
    n3lb2 = new T.Vector2(2/3, 1),
    n3lb3 = new T.Vector2(2/3, 2/3);
let n4tr1 = new T.Vector2(1/3, 0),
    n4tr2 = new T.Vector2(1/3, 1/3),
    n4tr3 = new T.Vector2(2/3, 0),
    n4lb1 = new T.Vector2(1/3, 1/3),
    n4lb2 = new T.Vector2(2/3, 1/3),
    n4lb3 = new T.Vector2(2/3, 0);
let n5tr1 = new T.Vector2(2/3, 1/3),
    n5tr2 = new T.Vector2(2/3, 2/3),
    n5tr3 = new T.Vector2(1, 1/3),
    n5lb1 = new T.Vector2(2/3, 2/3),
    n5lb2 = new T.Vector2(1, 2/3),
    n5lb3 = new T.Vector2(1, 1/3);
let n6tr1 = new T.Vector2(2/3, 2/3),
    n6tr2 = new T.Vector2(2/3, 1),
    n6tr3 = new T.Vector2(1, 2/3),
    n6lb1 = new T.Vector2(2/3, 1),
    n6lb2 = new T.Vector2(1, 1),
    n6lb3 = new T.Vector2(1, 2/3);
// define a class of Domino here - it should be a subclass of GrObject
class GrDominosHalf extends GrObject
{
    constructor(tr1, tr2, tr3, lb1, lb2, lb3, ot1, ot2, ot3)
    {
        let geo = new T.Geometry();
        geo.vertices.push(new T.Vector3(-1, 0, 1));
        geo.vertices.push(new T.Vector3(-1, 1, 1));
        geo.vertices.push(new T.Vector3(0, 1, 1));
        geo.vertices.push(new T.Vector3(0, 0, 1));
        geo.vertices.push(new T.Vector3(0, 0, 0.8));
        geo.vertices.push(new T.Vector3(0, 1, 0.8));
        geo.vertices.push(new T.Vector3(-1, 1, 0.8));
        geo.vertices.push(new T.Vector3(-1, 0, 0.8));
        geo.faceVertexUvs = [ [] ];
        // Front-face
        let f1 = new T.Face3(1, 0, 2);
        geo.faces.push(f1);
        geo.faceVertexUvs[0].push([tr1, tr2, tr3]);
        let f2 = new T.Face3(0, 3, 2);
        geo.faces.push(f2);
        geo.faceVertexUvs[0].push([lb1, lb2, lb3]);
        // Right-face
        let f3 = new T.Face3(3, 4, 2);
        geo.faces.push(f3);
        geo.faceVertexUvs[0].push([ot1, ot2, ot3]);
        let f4 = new T.Face3(4, 5, 2);
        geo.faces.push(f4);
        geo.faceVertexUvs[0].push([ot1, ot2, ot3]);
        // Top-face
        let f5 = new T.Face3(5, 6, 2);
        geo.faces.push(f5);
        geo.faceVertexUvs[0].push([ot1, ot2, ot3]);
        let f6 = new T.Face3(6, 1, 2);
        geo.faces.push(f6);
        geo.faceVertexUvs[0].push([ot1, ot2, ot3]);
        // back-face
        let f7 = new T.Face3(5, 4, 6);
        geo.faces.push(f7);
        geo.faceVertexUvs[0].push([ot1, ot2, ot3]);
        let f8 = new T.Face3(4, 7, 6);
        geo.faces.push(f8);
        geo.faceVertexUvs[0].push([ot1, ot2, ot3]);
        // Left-face
        let f9 = new T.Face3(7, 0, 6);
        geo.faces.push(f9);
        geo.faceVertexUvs[0].push([ot1, ot2, ot3]);
        let f10 = new T.Face3(0, 1, 6);
        geo.faces.push(f10);
        geo.faceVertexUvs[0].push([ot1, ot2, ot3]);
        // Bottom-face
        let f11 = new T.Face3(0, 7, 3);
        geo.faces.push(f11);
        geo.faceVertexUvs[0].push([ot1, ot2, ot3]);
        let f12 = new T.Face3(7, 4, 3);
        geo.faces.push(f12);
        geo.faceVertexUvs[0].push([ot1, ot2, ot3]);
        geo.uvsNeedUpdate = true;
        geo.computeFaceNormals();
        let texture = new T.TextureLoader().load("./Texture/dice_texture.png");
        texture.flipY = false;
        let mline = new T.LineDashedMaterial({color: "black"});
        let geoline = new T.Geometry();
        geoline.vertices.push(new T.Vector3(-1, 1, 1));
        geoline.vertices.push(new T.Vector3(0, 1, 1));
        let line = new T.Line(geoline, mline);
        let material = new T.MeshBasicMaterial({map: texture});
        let mesh = new T.Mesh(geo, material);
        mesh.add(line);
        super("dominos", mesh);
    }
}
function shift (grobj, x, y, z)
{
    grobj.objects[0].translateX(x);
    grobj.objects[0].translateY(y);
    grobj.objects[0].translateZ(z);
    return grobj;
}

function test() {
    let world = new GrWorld();
    let d11 = shift(new GrDominosHalf(n1tr1, n1tr2, n1tr3, n1lb1, n1lb2, n1lb3, ot1, ot2, ot3), -2, 0, 0);
    world.add(d11);
    let d12 = shift(new GrDominosHalf(n1tr1, n1tr2, n1tr3, n1lb1, n1lb2, n1lb3, ot1, ot2, ot3), -2, 1, 0);
    world.add(d12);
    let d21 = shift(new GrDominosHalf(n2tr1, n2tr2, n2tr3, n2lb1, n2lb2, n2lb3, ot1, ot2, ot3), -1, 0, -1);
    world.add(d21);
    let d22 = shift(new GrDominosHalf(n2tr1, n2tr2, n2tr3, n2lb1, n2lb2, n2lb3, ot1, ot2, ot3), -1, 1, -1);
    world.add(d22);
    let d31 = shift(new GrDominosHalf(n3tr1, n3tr2, n3tr3, n3lb1, n3lb2, n3lb3, ot1, ot2, ot3), 0, 0, -2);
    world.add(d31);
    let d32 = shift(new GrDominosHalf(n3tr1, n3tr2, n3tr3, n3lb1, n3lb2, n3lb3, ot1, ot2, ot3), 0, 1, -2);
    world.add(d32);
    let d41 = shift(new GrDominosHalf(n4tr1, n4tr2, n4tr3, n4lb1, n4lb2, n4lb3, ot1, ot2, ot3), 1, 0, -1);
    world.add(d41);
    let d42 = shift(new GrDominosHalf(n4tr1, n4tr2, n4tr3, n4lb1, n4lb2, n4lb3, ot1, ot2, ot3), 1, 1, -1);
    world.add(d42);
    let d51 = shift(new GrDominosHalf(n5tr1, n5tr2, n5tr3, n5lb1, n5lb2, n5lb3, ot1, ot2, ot3), 2, 0, 0);
    world.add(d51);
    let d52 = shift(new GrDominosHalf(n5tr1, n5tr2, n5tr3, n5lb1, n5lb2, n5lb3, ot1, ot2, ot3), 2, 1, 0);
    world.add(d52);
    let d61 = shift(new GrDominosHalf(n6tr1, n6tr2, n6tr3, n6lb1, n6lb2, n6lb3, ot1, ot2, ot3), 3, 0, -1);
    world.add(d61);
    let d62 = shift(new GrDominosHalf(n6tr1, n6tr2, n6tr3, n6lb1, n6lb2, n6lb3, ot1, ot2, ot3), 3, 1, -1);
    world.add(d62);
    // put the domino into the world Here
    // you can, of course, add more than 1
    world.go();
}
Helpers.onWindowOnload(test);
