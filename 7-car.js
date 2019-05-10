
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

// define your vehicles here - remember, they need to be imported
// into the "main" program
export class GrCar extends GrObject
{
    constructor()
    {
        let wheelSettings = {
            steps: 2,
            depth: 0.2,
            bevelEnabled: false
        };
        let car = new T.Group();

        let grwheel = new T.Group();
        car.add(grwheel);
        let swheel = new T.Shape();
        swheel.moveTo(-1, 0.3);
        swheel.arc(0, 0, 0.3, 0, Math.PI * 2, false);
        let gwheel = new T.ExtrudeGeometry(swheel, wheelSettings);
        let mwheel = new T.MeshLambertMaterial({color: "#1C2833"});
        let wheel1 = new T.Mesh(gwheel, mwheel);
        grwheel.add(wheel1);
        let wheel2 = new T.Mesh(gwheel, mwheel);
        wheel2.translateX(2.5);
        grwheel.add(wheel2);
        let wheel3 = new T.Mesh(gwheel, mwheel);
        wheel3.translateZ(-2);
        grwheel.add(wheel3);
        let wheel4 = new T.Mesh(gwheel, mwheel);
        wheel4.translateX(2.5);
        wheel4.translateZ(-2);
        grwheel.add(wheel4);
        let grbody = new T.Group();
        car.add(grbody);

        let wheelUpSettings = {
            steps: 10,
            depth: 2,
            bevelEnabled: false
        };
        let shape_wheel_up1 = new T.Shape();
        shape_wheel_up1.moveTo(-1.4, 0.5);
        shape_wheel_up1.bezierCurveTo(-1.4, 0.9, -0.6,0.9, -0.6, 0.2);
        let geo_wheel_up = new T.ExtrudeGeometry(shape_wheel_up1, wheelUpSettings);
        let m_up_body = new T.MeshStandardMaterial({color: "#CCD1D1", metalness: 0.8, roughness: 0.3});
        let up_wheel1 = new T.Mesh(geo_wheel_up, m_up_body);
        up_wheel1.translateZ(-1.9);
        grbody.add(up_wheel1);
        let shape_wheel_up2 = new T.Shape();
        shape_wheel_up2.moveTo(1.1, 0.2);
        shape_wheel_up2.bezierCurveTo(1.1, 0.9, 1.9, 0.9, 1.9, 0.2);
        let geo_wheel_up2 = new T.ExtrudeGeometry(shape_wheel_up2, wheelUpSettings);
        let up_wheel2 = new T.Mesh(geo_wheel_up2, m_up_body);
        up_wheel2.translateZ(-1.9);
        grbody.add(up_wheel2);

        let bodySettings = {
            steps: 10,
            depth: 1.7,
            bevelEnabled: false
        };
        let shape_mid_body = new T.Shape();
        shape_mid_body.moveTo(-1, 0.8);
        shape_mid_body.lineTo(-0.8, 0.2);
        shape_mid_body.lineTo(1.6, 0.2);
        shape_mid_body.lineTo(1.5, 0.8);
        let geo_mid_body = new T.ExtrudeGeometry(shape_mid_body, bodySettings);
        let m_body = new T.MeshStandardMaterial({color: "#EC407A", metalness: 0.8, roughness: 0.3});
        let mid_body = new T.Mesh(geo_mid_body, m_body);
        mid_body.translateZ(-1.8);
        grbody.add(mid_body);

        let roomSettings = {
            steps: 10,
            depth: 0.2,
            bevelEnabled: false
        };
        let shape_room_front = new T.Shape();
        shape_room_front.moveTo(-0.4, 0.7);
        shape_room_front.lineTo(-0.2, 0.7);
        shape_room_front.lineTo(0, 1.6);
        shape_room_front.lineTo(-0.2, 1.6);
        shape_room_front.lineTo(-0.4, 0.7);
        let geo_r1 = new T.ExtrudeGeometry(shape_room_front, roomSettings);
        let r1 = new T.Mesh(geo_r1, m_body);
        r1.translateZ(-0.3);
        grbody.add(r1);
        let r2 = new T.Mesh(geo_r1, m_body);
        r2.translateZ(-1.8);
        grbody.add(r2);

        let shape_room_top = new T.Shape();
        shape_room_top.moveTo(-0.2, 1.4);
        shape_room_top.lineTo(-0.1, 1.6);
        shape_room_top.lineTo(0.9, 1.6);
        shape_room_top.lineTo(0.7, 1.4);
        let geo_r2 = new T.ExtrudeGeometry(shape_room_top, roomSettings);
        let r3 = new T.Mesh(geo_r2, m_body);
        r3.translateZ(-0.3);
        grbody.add(r3);
        let r4 = new T.Mesh(geo_r2, m_body);
        r4.translateZ(-1.8);
        grbody.add(r4);

        let shape_room_back = new T.Shape();
        shape_room_back.moveTo(0.7, 1.4);
        shape_room_back.lineTo(0.9, 0.7);
        shape_room_back.lineTo(1.1, 0.7);
        shape_room_back.lineTo(0.9, 1.6);
        let geo_r3 = new T.ExtrudeGeometry(shape_room_back, roomSettings);
        let r5 = new T.Mesh(geo_r3, m_body);
        r5.translateZ(-0.3);
        grbody.add(r5);
        let r6 = new T.Mesh(geo_r3, m_body);
        r6.translateZ(-1.8);
        grbody.add(r6);

        let topSettings = {
            steps: 10,
            depth: 1.7,
            bevelEnabled: false
        };
        let shape_top = new T.Shape();
        shape_top.moveTo(-1.1/4.5, 1.4);
        shape_top.lineTo(-0.2, 1.6)
        shape_top.lineTo(0, 1.6)
        shape_top.lineTo(-0.2/4.5, 1.4);
        let geo_r4 = new T.ExtrudeGeometry(shape_top, topSettings);
        let r7 = new T.Mesh(geo_r4, m_body);
        r7.translateZ(-1.8);
        grbody.add(r7);

        let shape_top2 = new T.Shape();
        shape_top2.moveTo(0.7, 1.4);
        shape_top2.lineTo(0.7, 1.6);
        shape_top2.lineTo(0.9, 1.6);
        shape_top2.lineTo(4.25/4.5, 1.4);
        let geo_r5 = new T.ExtrudeGeometry(shape_top2, topSettings);
        let r8 = new T.Mesh(geo_r5, m_body);
        r8.translateZ(-1.8);
        grbody.add(r8);

        let shape_roof = new T.Shape();
        shape_roof.moveTo(-0.2/4.5, 1.4);
        shape_roof.lineTo(4.25/4.5, 1.4);
        shape_roof.lineTo(0.7, 1.6);
        shape_roof.lineTo(0, 1.6);
        let geo_r6 = new T.ExtrudeGeometry(shape_roof, topSettings);
        let roof = new T.Mesh(geo_r6, m_body);
        roof.translateZ(-1.8);
        grbody.add(roof);

        let shape_back_window = new T.Shape();
        shape_back_window.moveTo(0.7, 1.4);
        shape_back_window.lineTo(0.9, 0.7);
        shape_back_window.lineTo(1.1, 0.7);
        shape_back_window.lineTo(0.9, 1.6);
        let geo_r7 = new T.ExtrudeGeometry(shape_back_window, topSettings);
        let back = new T.Mesh(geo_r7, m_body);
        back.translateZ(-1.8);
        grbody.add(back);
        super("car", car);
    }
}