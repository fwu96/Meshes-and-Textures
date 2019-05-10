
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
import { GrObject } from "./Framework/GrObject.js";

// define your buildings here - remember, they need to be imported
// into the "main" program
export class GrTwoRoofBulid extends GrObject
{
    constructor()
    {
        let geo = new T.Geometry();
        geo.vertices.push(new T.Vector3(-1, 0, 1));
        geo.vertices.push(new T.Vector3(-1, 1, 1));
        geo.vertices.push(new T.Vector3(0, 1, 1));
        geo.vertices.push(new T.Vector3(0, 0, 1));
        geo.vertices.push(new T.Vector3(0, 0, -2));
        geo.vertices.push(new T.Vector3(0, 1, -2));
        geo.vertices.push(new T.Vector3(-1, 1, -2));
        geo.vertices.push(new T.Vector3(-1, 0, -2));
        geo.vertices.push(new T.Vector3(-0.5, 1.5, -2));
        geo.vertices.push(new T.Vector3(-0.5, 1.5, 1));
        geo.faceVertexUvs = [ [] ];
        let ot1 = new T.Vector2(1.8/3, 0),
            ot2 = new T.Vector2(2.1/3, 0),
            ot3 = new T.Vector2(1.8/3, 0.8/3),
            ot4 = new T.Vector2(2.1/3, 0.8/3);
        // Front face
        let f1 = new T.Face3(1, 0, 2);
        geo.faceVertexUvs[0].push([new T.Vector2(0, 0), new T.Vector2(0, 1), new T.Vector2(1, 0)]);
        geo.faces.push(f1);
        let f2 = new T.Face3(0, 3, 2);
        geo.faceVertexUvs[0].push([new T.Vector2(0, 1), new T.Vector2(1, 1), new T.Vector2(1, 0)]);
        geo.faces.push(f2);
        // Right face
        let f3 = new T.Face3(3, 4, 2);
        geo.faceVertexUvs[0].push([ot4, ot2, ot3]);
        geo.faces.push(f3);
        let f4 = new T.Face3(4, 5, 2);
        geo.faceVertexUvs[0].push([ot2, ot1, ot3]);
        geo.faces.push(f4);
        // Left face
        let f5 = new T.Face3(7, 0, 6);
        geo.faceVertexUvs[0].push([ot1, ot3, ot2]);
        geo.faces.push(f5);
        let f6 = new T.Face3(0, 1, 6);
        geo.faceVertexUvs[0].push([ot3, ot4, ot2]);
        geo.faces.push(f6);
        // Back face
        let f7 = new T.Face3(5, 4, 6);
        geo.faceVertexUvs[0].push([new T.Vector2(1.8/3, 0.3/3), new T.Vector2(1.8/3, 0.6/3), new T.Vector2(2.1/3, 0.3/3)]);
        geo.faces.push(f7);
        let f8 = new T.Face3(4, 7, 6);
        geo.faceVertexUvs[0].push([new T.Vector2(1.8/3, 0.6/3), new T.Vector2(2.1/3, 0.6/3), new T.Vector2(2.1/3, 0.3/3)]);
        geo.faces.push(f8);
        // Bottom face
        let f9 = new T.Face3(0, 7, 3);
        geo.faceVertexUvs[0].push([ot3, ot1, ot4]);
        geo.faces.push(f9);
        let f10 = new T.Face3(7, 4, 3);
        geo.faceVertexUvs[0].push([ot1, ot2, ot4]);
        geo.faces.push(f10);
        // Top-right face
        let f11 = new T.Face3(2, 5, 9);
        geo.faceVertexUvs[0].push([ot4, ot2, ot3]);
        geo.faces.push(f11);
        let f12 = new T.Face3(5, 8, 9);
        geo.faceVertexUvs[0].push([ot2, ot1, ot3]);
        geo.faces.push(f12);
        // Top-left face
        let f13 = new T.Face3(6, 1, 9);
        geo.faceVertexUvs[0].push([ot1, ot3, ot4]);
        geo.faces.push(f13);
        let f14 = new T.Face3(8, 6, 9);
        geo.faceVertexUvs[0].push([ot2, ot1, ot4]);
        geo.faces.push(f14);
        // Top-front face
        let f15 = new T.Face3(9, 1, 2);
        geo.faces.push(f15);
        // Top-back face
        let f16 = new T.Face3(8, 5, 6);
        geo.faces.push(f16);
        geo.uvsNeedUpdate = true;
        geo.computeFaceNormals();
        let texture = new T.TextureLoader().load("./Buildings/door_and_windows.jpg");
        texture.flipY = false;
        let material = new T.MeshStandardMaterial({map: texture, roughness: 0.8});
        //let material = new T.MeshBasicMaterial({color: "white"});
        let mesh = new T.Mesh(geo, material);
        super("twoRoofPiece", mesh);
    }
}
export class GrCrossHipped extends GrObject
{
    constructor()
    {
        let body = new T.Geometry();
        body.vertices.push(new T.Vector3(-1, 0, 1));
        body.vertices.push(new T.Vector3(-1, 1, 1));
        body.vertices.push(new T.Vector3(0, 1, 1));
        body.vertices.push(new T.Vector3(0, 0, 1));
        body.vertices.push(new T.Vector3(0, 0, 0));
        body.vertices.push(new T.Vector3(0, 1, 0));
        body.vertices.push(new T.Vector3(1, 1, 0));
        body.vertices.push(new T.Vector3(1, 0, 0));
        body.vertices.push(new T.Vector3(1, 0, -1));
        body.vertices.push(new T.Vector3(1, 1, -1));
        body.vertices.push(new T.Vector3(0, 1, -1));
        body.vertices.push(new T.Vector3(0, 0, -1));
        body.vertices.push(new T.Vector3(0, 0, -2));
        body.vertices.push(new T.Vector3(0, 1, -2));
        body.vertices.push(new T.Vector3(-1, 1, -2));
        body.vertices.push(new T.Vector3(-1, 0, -2));
        body.vertices.push(new T.Vector3(-0.5, 1.5, 1));
        body.vertices.push(new T.Vector3(-0.5, 1.5, -0.5));
        body.vertices.push(new T.Vector3(-0.5, 1.5, -2));
        body.vertices.push(new T.Vector3(1, 1.5, -0.5));
        body.faceVertexUvs = [ [] ];
        let r1 = new T.Vector2(0.75, 0.8),
            r2 = new T.Vector2(0.8, 0.85),
            r3 = new T.Vector2(0.8, 0.8),
            r4 = new T.Vector2(0.75, 0.85);
        // Front face1
        let f1 = new T.Face3(1, 0, 2);
        body.faceVertexUvs[0].push([new T.Vector2(0, 0), new T.Vector2(0, 1), new T.Vector2(1, 0)]);
        body.faces.push(f1);
        let f2 = new T.Face3(0, 3, 2);
        body.faceVertexUvs[0].push([new T.Vector2(0, 1), new T.Vector2(1, 1), new T.Vector2(1, 0)]);
        body.faces.push(f2);
        // Right face2
        let f3 = new T.Face3(4, 5, 3);
        body.faceVertexUvs[0].push([r1, r2, r3]);
        body.faces.push(f3);
        let f4 = new T.Face3(5, 2, 3);
        body.faceVertexUvs[0].push([r2, r4, r3]);
        body.faces.push(f4);
        // Front face2
        let f5 = new T.Face3(5, 4, 6);
        body.faceVertexUvs[0].push([r1, r2, r3]);
        body.faces.push(f5);
        let f6 = new T.Face3(4, 7, 6);
        body.faceVertexUvs[0].push([r2, r4, r3]);
        body.faces.push(f6);
        // Right face2
        let f7 = new T.Face3(8, 9 , 7);
        body.faceVertexUvs[0].push([r1, r2, r3]);
        body.faces.push(f7);
        let f8 = new T.Face3(9, 6, 7);
        body.faceVertexUvs[0].push([r2, r4, r3]);
        body.faces.push(f8);
        // Back face2
        let f9 = new T.Face3(9, 8, 10);
        body.faceVertexUvs[0].push([r1, r2, r3]);
        body.faces.push(f9);
        let f10 = new T.Face3(8, 11, 10);
        body.faceVertexUvs[0].push([r2, r4, r3]);
        body.faces.push(f10);
        // Right face3
        let f11 = new T.Face3(11, 12, 10);
        body.faceVertexUvs[0].push([r1, r2, r3]);
        body.faces.push(f11);
        let f12 = new T.Face3(12, 13, 10);
        body.faceVertexUvs[0].push([r2, r4, r3]);
        body.faces.push(f12);
        // Back face1
        let f13 = new T.Face3(13, 12, 14);
        body.faceVertexUvs[0].push([r1, r2, r3]);
        body.faces.push(f13);
        let f14 = new T.Face3(12, 15, 14);
        body.faceVertexUvs[0].push([r2, r4, r3]);
        body.faces.push(f14);
        // Left face
        let f15 = new T.Face3(15, 0, 14);
        body.faceVertexUvs[0].push([r1, r2, r3]);
        body.faces.push(f15);
        let f16 = new T.Face3(0, 1, 14);
        body.faceVertexUvs[0].push([r2, r4, r3]);
        body.faces.push(f16);
        // Top-left face
        let f17 = new T.Face3(14, 1, 16);
        body.faceVertexUvs[0].push([r1, r2, r3]);
        body.faces.push(f17);
        let f18 = new T.Face3(18, 14, 16);
        body.faceVertexUvs[0].push([r4, r1, r3]);
        body.faces.push(f18);
        // Top-right face1
        let f19 = new T.Face3(2, 13, 16);
        body.faceVertexUvs[0].push([r1, r2, r3]);
        body.faces.push(f19);
        let f20 = new T.Face3(13, 18, 16);
        body.faceVertexUvs[0].push([r2, r4, r3]);
        body.faces.push(f20);
        // Top-front face2
        let f21 = new T.Face3(5, 6, 19);
        body.faceVertexUvs[0].push([r1, r2, r3]);
        body.faces.push(f21);
        let f22 = new T.Face3(17, 5, 19);
        body.faceVertexUvs[0].push([r4, r1, r3]);
        body.faces.push(f22);
        // Top-back face2
        let f23 = new T.Face3(17, 19, 9);
        body.faceVertexUvs[0].push([r4, r3, r2]);
        body.faces.push(f23);
        let f24 = new T.Face3(10, 17, 9);
        body.faceVertexUvs[0].push([r1, r4, r2]);
        body.faces.push(f24);
        // Top-front face1
        let f25 = new T.Face3(16, 1, 2);
        body.faces.push(f25);
        // Top-back face1
        let f26 = new T.Face3(18, 13, 14);
        body.faces.push(f26);
        // Top-right face2
        let f27 = new T.Face3(19, 6, 9);
        body.faces.push(f27);
        // Bottom face1
        let f28 = new T.Face3(0, 15, 3);
        body.faces.push(f28);
        let f29 = new T.Face3(15, 12, 3);
        body.faces.push(f29);
        // Bottom face2
        let f30 = new T.Face3(4, 11, 7);
        body.faces.push(f30);
        let f31 = new T.Face3(11, 8, 7);
        body.faces.push(f31);
        body.computeFaceNormals();
        body.uvsNeedUpdate = true;
        let texture1 = new T.TextureLoader().load("./Buildings/door_and_windows.jpg");
        texture1.flipY = false;
        let material = new T.MeshStandardMaterial({map: texture1, roughness: 0.75});
        let mesh = new T.Mesh(body, material);
        super("crossHipped", mesh);
    }
}
export class GrPyramidHip extends GrObject
{
    constructor()
    {
        let geo = new T.Geometry();
        geo.vertices.push(new T.Vector3(-1, 0, 1));
        geo.vertices.push(new T.Vector3(-1, 1, 1));
        geo.vertices.push(new T.Vector3(0, 1, 1));
        geo.vertices.push(new T.Vector3(0, 0, 1));
        geo.vertices.push(new T.Vector3(0, 0, 0));
        geo.vertices.push(new T.Vector3(0,1, 0));
        geo.vertices.push(new T.Vector3(-1, 1, 0));
        geo.vertices.push(new T.Vector3(-1, 0, 0));
        geo.vertices.push(new T.Vector3(-0.5, 1.5, 0.5));
        geo.faceVertexUvs = [ [] ];

        // Front face
        let f1 = new T.Face3(1, 0, 2);
        geo.faceVertexUvs[0].push([new T.Vector2(0, 0), new T.Vector2(0, 1), new T.Vector2(1, 0)]);
        geo.faces.push(f1);
        let f2 = new T.Face3(0, 3, 2);
        geo.faceVertexUvs[0].push([new T.Vector2(0, 1), new T.Vector2(1, 1), new T.Vector2(1, 0)]);
        geo.faces.push(f2);
        // Right face
        let f3 = new T.Face3(3, 4, 2);
        geo.faceVertexUvs[0].push([new T.Vector2(0, 0), new T.Vector2(0, 1), new T.Vector2(1, 0)]);
        geo.faces.push(f3);
        let f4 = new T.Face3(4, 5, 2);
        geo.faceVertexUvs[0].push([new T.Vector2(0, 1), new T.Vector2(1, 1), new T.Vector2(1, 0)]);
        geo.faces.push(f4);
        // Left face
        let f5 = new T.Face3(7, 0, 6);
        geo.faceVertexUvs[0].push([new T.Vector2(0, 0), new T.Vector2(0, 1), new T.Vector2(1, 0)]);
        geo.faces.push(f5);
        let f6 = new T.Face3(0, 1, 6);
        geo.faceVertexUvs[0].push([new T.Vector2(0, 1), new T.Vector2(1, 1), new T.Vector2(1, 0)]);
        geo.faces.push(f6);
        // Back face
        let f7 = new T.Face3(5, 4, 6);
        geo.faceVertexUvs[0].push([new T.Vector2(0, 0), new T.Vector2(0, 1), new T.Vector2(1, 0)]);
        geo.faces.push(f7);
        let f8 = new T.Face3(4, 7, 6);
        geo.faceVertexUvs[0].push([new T.Vector2(0, 1), new T.Vector2(1, 1), new T.Vector2(1, 0)]);
        geo.faces.push(f8);
        // Bottom face
        let f9 = new T.Face3(0, 7, 3);
        geo.faces.push(f9);
        let f10 = new T.Face3(7, 4, 3);
        geo.faces.push(f10);
        // Top-front face
        let f11 = new T.Face3(8, 1, 2);
        geo.faces.push(f11);
        // Top-right face
        let f12 = new T.Face3(8, 2, 5);
        geo.faces.push(f12);
        // Top-back face
        let f13 = new T.Face3(8, 5, 6);
        geo.faces.push(f13);
        // Top-left face
        let f14 = new T.Face3(8, 6, 1);
        geo.faces.push(f14);
        geo.computeFaceNormals();
        geo.uvsNeedUpdate = true;
        let texture = new T.TextureLoader().load("./Buildings/windows.jpg");
        texture.flipY = false;
        let material = new T.MeshStandardMaterial({map: texture, roughness: 0.7});
        let mesh = new T.Mesh(geo, material);
        super("pyramidHip", mesh);
    }
}