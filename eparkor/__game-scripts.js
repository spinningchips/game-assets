var Utils = pc.createScript("utils");
Utils.attributes.add("left", {
    type: "entity"
}),
Utils.attributes.add("right", {
    type: "entity"
}),
Utils.attributes.add("jump", {
    type: "entity"
}),
Utils.attributes.add("menu", {
    type: "entity"
}),
Utils.attributes.add("pivot", {
    type: "entity"
}),
Utils.attributes.add("button2", {
    type: "entity"
}),
Utils.attributes.add("crosshair", {
    type: "entity"
}),
Utils.attributes.add("crosshair2", {
    type: "entity"
}),
Utils.attributes.add("sound", {
    type: "entity"
}),
Utils.attributes.add("enabledButton", {
    type: "entity"
}),
Utils.attributes.add("disabledButton", {
    type: "entity"
}),
Utils.attributes.add("enabledButtonText", {
    type: "entity"
}),
Utils.attributes.add("disabledButtonText", {
    type: "entity"
}),
Utils.attributes.add("settings", {
    type: "entity"
}),
Utils.attributes.add("back", {
    type: "entity"
}),
Utils.attributes.add("white", {
    type: "entity"
}),
Utils.attributes.add("whiteText", {
    type: "entity"
}),
Utils.attributes.add("red", {
    type: "entity"
}),
Utils.attributes.add("redText", {
    type: "entity"
}),
Utils.attributes.add("blue", {
    type: "entity"
}),
Utils.attributes.add("blueText", {
    type: "entity"
}),
Utils.attributes.add("green", {
    type: "entity"
}),
Utils.attributes.add("greenText", {
    type: "entity"
}),
Utils.attributes.add("yellow", {
    type: "entity"
}),
Utils.attributes.add("yellowText", {
    type: "entity"
}),
Utils.attributes.add("purple", {
    type: "entity"
}),
Utils.attributes.add("purpleText", {
    type: "entity"
});
var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
  , isApple = /iPhone|iPad|iPod/i.test(navigator.userAgent)
  , isAndroid = /Android/i.test(navigator.userAgent);
Utils.prototype.initialize = function() {
    this.player = this.app.root.findByName("Player"),
    this.camera = this.app.root.findByName("Camera"),
    this.time = this.app.root.findByName("Time"),
    spodruns && (this.player.script.level1bubble && (this.player.script.level1bubble.enabled = !1),
    this.player.script.level2bubble && (this.player.script.level2bubble.enabled = !1)),
    isMobile && (this.pivot.enabled = !0,
    this.left.enabled = !0,
    this.right.enabled = !0,
    this.jump.enabled = !0,
    this.menu.enabled = !0,
    this.left.script.touchJoystick.enabled = !0,
    this.right.script.touchJoystick.enabled = !0,
    this.jump.script.touchButton.enabled = !0,
    this.menu.script.touchButton.enabled = !0,
    this.player.script.playerController2.enabled = !0,
    this.player.script.playerController.enabled = !1,
    this.camera.script.orbitCameraFollowEntity.enabled = !0,
    this.camera.script.orbitCameraTouchJoypadInput.enabled = !0,
    this.camera.script.orbitCamera.enabled = !0,
    this.button2.setLocalPosition(0, -61, 0),
    this.crosshair.element.width = 300,
    this.crosshair.element.height = 300,
    this.sound.setLocalPosition(0, 132.837, 0),
    this.sound.element.fontSize = 45,
    this.enabledButton.setLocalPosition(0, 70.837, 0),
    this.enabledButton.element.height = 50,
    this.enabledButton.element.width = 50,
    this.enabledButtonText.element.height = 42,
    this.enabledButtonText.element.width = 42,
    this.disabledButton.setLocalPosition(0, 70.837, 0),
    this.disabledButton.element.height = 50,
    this.disabledButton.element.width = 50,
    this.disabledButtonText.element.height = 42,
    this.disabledButtonText.element.width = 42,
    this.crosshair2.setLocalPosition(0, -20.837, 0),
    this.crosshair2.element.fontSize = 45,
    this.white.setLocalPosition(-300, -90.837, 0),
    this.white.element.height = 50,
    this.white.element.width = 50,
    this.whiteText.element.height = 42,
    this.whiteText.element.width = 42,
    this.red.setLocalPosition(-180, -90.837, 0),
    this.red.element.height = 50,
    this.red.element.width = 50,
    this.redText.element.height = 42,
    this.redText.element.width = 42,
    this.blue.setLocalPosition(-60, -90.837, 0),
    this.blue.element.height = 50,
    this.blue.element.width = 50,
    this.blueText.element.height = 42,
    this.blueText.element.width = 42,
    this.green.setLocalPosition(60, -90.837, 0),
    this.green.element.height = 50,
    this.green.element.width = 50,
    this.greenText.element.height = 42,
    this.greenText.element.width = 42,
    this.yellow.setLocalPosition(180, -90.837, 0),
    this.yellow.element.height = 50,
    this.yellow.element.width = 50,
    this.yellowText.element.height = 42,
    this.yellowText.element.width = 42,
    this.purple.setLocalPosition(300, -90.837, 0),
    this.purple.element.height = 50,
    this.purple.element.width = 50,
    this.purpleText.element.height = 42,
    this.purpleText.element.width = 42,
    this.back.element.height = 90,
    this.back.element.width = 90,
    this.settings.element.height = 90,
    this.settings.element.width = 90),
    spodruns ? this.time.script.time.enabled = !0 : this.time.script.time.enabled = !1
}
;
!function() {
    pc.RigidBodyComponentSystem._convexShapesData = Object.create(null),
    pc.RigidBodyComponentSystem._convexShapesData.ammoHalfExtents = new Ammo.btVector3,
    pc.RigidBodyComponentSystem._convexShapesData.ammoRotFrom = new Ammo.btQuaternion,
    pc.RigidBodyComponentSystem._convexShapesData.ammoRotTo = new Ammo.btQuaternion,
    pc.RigidBodyComponentSystem._convexShapesData.ammoPosFrom = new Ammo.btVector3,
    pc.RigidBodyComponentSystem._convexShapesData.ammoPosTo = new Ammo.btVector3,
    pc.RigidBodyComponentSystem._convexShapesData.ammoTransformFrom = new Ammo.btTransform,
    pc.RigidBodyComponentSystem._convexShapesData.ammoTransformTo = new Ammo.btTransform,
    pc.RigidBodyComponentSystem._convexShapesData.pcMat4 = new pc.Mat4,
    pc.RigidBodyComponentSystem._convexShapesData.pcStartRot = new pc.Quat,
    pc.RigidBodyComponentSystem._convexShapesData.pcEndRot = new pc.Quat;
    var e = function ConvexCastResult(e, t, o, a) {
        this.entity = e,
        this.hitFraction = t,
        this.point = o,
        this.normal = a
    };
    pc.RigidBodyComponentSystem.prototype.convexCast = function(t, o, a, n, m, r) {
        var s = null
          , i = null
          , p = pc.RigidBodyComponentSystem._convexShapesData;
        n && m || (i = p.pcMat4.setLookAt(o, a, pc.Vec3.UP)),
        n || (n = p.pcStartRot.setFromMat4(i)),
        m || (m = p.pcEndRot.setFromMat4(i)),
        r || (r = 0),
        p.ammoPosFrom.setValue(o.x, o.y, o.z),
        p.ammoPosTo.setValue(a.x, a.y, a.z),
        p.ammoTransformFrom.setOrigin(p.ammoPosFrom),
        p.ammoTransformTo.setOrigin(p.ammoPosTo),
        p.ammoRotFrom.setValue(n.x, n.y, n.z, n.w),
        p.ammoTransformFrom.setRotation(p.ammoRotFrom),
        p.ammoRotTo.setValue(m.x, m.y, m.z, m.w),
        p.ammoTransformFrom.setRotation(p.ammoRotTo);
        var c = new Ammo.ClosestConvexResultCallback(p.ammoPosFrom,p.ammoPosTo);
        if (c.set_m_collisionFilterMask(pc.BODYMASK_ALL ^ pc.BODYGROUP_USER_1),
        this.dynamicsWorld.convexSweepTest(t, p.ammoTransformFrom, p.ammoTransformTo, c, r),
        c.hasHit()) {
            var h = c.get_m_hitCollisionObject()
              , y = Ammo.castObject(h, Ammo.btRigidBody);
            if (y) {
                var d = c.get_m_closestHitFraction()
                  , l = c.get_m_hitPointWorld()
                  , S = c.get_m_hitNormalWorld();
                s = new e(y.entity,d,new pc.Vec3(l.x(),l.y(),l.z()),new pc.Vec3(S.x(),S.y(),S.z()))
            }
        }
        return Ammo.destroy(t),
        Ammo.destroy(c),
        s
    }
    ,
    pc.RigidBodyComponentSystem.prototype.coneCast = function(e, t, o, a, n, m, r, s) {
        n || (n = pc.Vec3.UP);
        var i = _getConeShape(e, t, n, this);
        if (!i)
            throw "Failed to generate cone shape. Check attributes.";
        return this.convexCast(i, o, a, m, r, s)
    }
    ,
    pc.RigidBodyComponentSystem.prototype.sphereCast = function(e, t, o, a, n, m, r) {
        var s = _getSphereShape(e, a, this);
        if (!s)
            throw "Failed to generate sphere shape. Check attributes.";
        return this.convexCast(s, t, o, n, m, r)
    }
    ,
    pc.RigidBodyComponentSystem.prototype.boxCast = function(e, t, o, a, n, m, r) {
        var s = _getBoxShape(e, a);
        if (!s)
            throw "Failed to generate box shape. Check attributes.";
        return this.convexCast(s, t, o, n, m, r)
    }
    ,
    pc.RigidBodyComponentSystem.prototype.cylinderCast = function(e, t, o, a, n, m, r) {
        a || (a = pc.Vec3.UP);
        var s = _getCylinderShape(e, a);
        if (!s)
            throw "Failed to generate cylinder shape. Check attributes.";
        return this.convexCast(s, t, o, n, m, r)
    }
    ,
    pc.RigidBodyComponentSystem.prototype.capsuleCast = function(e, t, o, a, n, m, r, s) {
        var i = _getCapsuleShape(e, t, n);
        if (!i)
            throw "Failed to generate capsule shape. Check attributes.";
        return this.convexCast(i, o, a, m, r, s)
    }
    ,
    pc.RigidBodyComponentSystem.prototype.shapeCast = function(e, t, o, a, n, m, r) {
        var s = _getConvexHullShape(e);
        if (!s)
            throw "Failed to generate convex hull shape. Check attributes.";
        return this.convexCast(s, t, o, n, m, r)
    }
    ,
    _getConeShape = function(e, t, o) {
        var a = null;
        switch (o) {
        case pc.Vec3.UP:
            a = new Ammo.btConeShape(e,t);
            break;
        case pc.Vec3.RIGHT:
            a = new Ammo.btConeShapeX(e,t);
            break;
        case pc.Vec3.BACK:
            a = new Ammo.btConeShapeZ(e,t);
            break;
        default:
            throw "Invalid orientation"
        }
        return a
    }
    ,
    _getSphereShape = function(e, t) {
        var o = new Ammo.btSphereShape(e);
        return t && o.setMargin(t),
        o
    }
    ,
    _getBoxShape = function(e, t) {
        var o = pc.RigidBodyComponentSystem._convexShapesData.ammoHalfExtents;
        o.setValue(e.x, e.y, e.z);
        var a = new Ammo.btBoxShape(o);
        return t && a.setMargin(t),
        a
    }
    ,
    _getCylinderShape = function(e, t) {
        var o = null
          , a = pc.RigidBodyComponentSystem._convexShapesData.ammoHalfExtents;
        switch (a.setValue(e.x, e.y, e.z),
        t) {
        case pc.Vec3.UP:
            o = new Ammo.btCylinderShape(a);
            break;
        case pc.Vec3.RIGHT:
            o = new Ammo.btCylinderShapeX(a);
            break;
        case pc.Vec3.BACK:
            o = new Ammo.btCylinderShapeZ(a);
            break;
        default:
            throw "Invalid orientation"
        }
        return o
    }
    ,
    _getCapsuleShape = function(e, t, o) {
        var a = new Ammo.btCapsuleShape(e,t);
        return o && a.setMargin(o),
        a
    }
    ,
    _getConvexHullShape = function(e) {
        return new Ammo.btConvexHullShape(e,e.length,3)
    }
}();
const PauseMenu = pc.createScript("pauseMenu");
PauseMenu.attributes.add("pMenu", {
    type: "entity"
}),
PauseMenu.attributes.add("continueButton", {
    type: "entity"
}),
PauseMenu.attributes.add("mainMenuButton", {
    type: "entity"
}),
PauseMenu.attributes.add("continueButtonText", {
    type: "entity"
}),
PauseMenu.attributes.add("mainMenuButtonText", {
    type: "entity"
}),
PauseMenu.attributes.add("sceneName", {
    type: "string"
}),
PauseMenu.attributes.add("menuButtonId", {
    type: "string"
}),
PauseMenu.attributes.add("settings", {
    type: "entity"
}),
PauseMenu.attributes.add("left", {
    type: "entity"
}),
PauseMenu.attributes.add("right", {
    type: "entity"
}),
PauseMenu.attributes.add("jump", {
    type: "entity"
}),
PauseMenu.attributes.add("menu", {
    type: "entity"
}),
PauseMenu.attributes.add("ui1", {
    type: "entity"
}),
PauseMenu.attributes.add("ui2", {
    type: "entity"
}),
PauseMenu.attributes.add("ui3", {
    type: "entity"
}),
PauseMenu.attributes.add("ui4", {
    type: "entity"
}),
PauseMenu.prototype.initialize = function() {
    this.crosshair = this.app.root.findByName("Crosshair"),
    this.time = this.app.root.findByName("Time"),
    this.continueButton.button.on("click", this.onClickContinue, this),
    this.mainMenuButton.button.once("click", this.onClickMainMenu, this)
}
,
PauseMenu.prototype.update = function() {
    const e = window.touchJoypad;
    this._pointerLockedLastFrame && !pc.Mouse.isPointerLocked() || e.buttons.wasPressed(this.menuButtonId) ? pause = !0 : !this._pointerLockedLastFrame && pc.Mouse.isPointerLocked() && (pause = !1),
    this._pointerLockedLastFrame = pc.Mouse.isPointerLocked(),
    pause ? (this.app.mouse.disablePointerLock(),
    spodruns && this.time.script.time.stopStopwatch(),
    this.continueButton.enabled = !0,
    this.mainMenuButton.enabled = !0,
    this.crosshair.enabled = !1,
    null !== this.ui1 && (this.ui1.enabled = !1),
    null !== this.ui2 && (this.ui2.enabled = !1),
    null !== this.ui3 && (this.ui3.enabled = !1),
    null !== this.ui4 && (this.ui4.enabled = !1),
    this.settings.enabled = !0,
    settings && (this.continueButton.enabled = !1,
    this.mainMenuButton.enabled = !1,
    this.settings.enabled = !1),
    isMobile && (this.left.enabled = !1,
    this.right.enabled = !1,
    this.jump.enabled = !1,
    this.continueButtonText.element.fontSize = 50,
    this.mainMenuButtonText.element.fontSize = 50),
    this.pMenu.enabled = !0,
    this.app.timeScale = 0) : this.app.timeScale = 1
}
,
PauseMenu.prototype.onClickContinue = function() {
    this.app.mouse.enablePointerLock(),
    spodruns && this.time.script.time.startStopwatch(),
    this.continueButton.enabled = !1,
    this.mainMenuButton.enabled = !1,
    this.crosshair.enabled = !0,
    null !== this.ui1 && null !== this.ui2 && null !== this.ui3 && null !== this.ui4 && (this.ui1.enabled && (this.ui2.enabled = !1,
    this.ui3.enabled = !1,
    this.ui4.enabled = !1),
    this.ui2.enabled && (this.ui1.enabled = !1,
    this.ui3.enabled = !1,
    this.ui4.enabled = !1),
    this.ui3.enabled && (this.ui1.enabled = !1,
    this.ui2.enabled = !1,
    this.ui4.enabled = !1),
    this.ui4.enabled && (this.ui1.enabled = !1,
    this.ui2.enabled = !1,
    this.ui3.enabled = !1)),
    this.settings.enabled = !1,
    isMobile && (this.left.enabled = !0,
    this.right.enabled = !0,
    this.jump.enabled = !0),
    this.pMenu.enabled = !1,
    pause = !1
}
,
PauseMenu.prototype.onClickMainMenu = function() {
    loadScene(this.sceneName, {
        hierarchy: !0,
        settings: !0
    }),
    spodruns && (spodruns = !1),
    (!0 === level1 || localStorage.getItem("progress1")) && storageAvailable("localStorage") && localStorage.setItem("progress1", level1),
    (!0 === level2 || localStorage.getItem("progress2")) && storageAvailable("localStorage") && localStorage.setItem("progress2", level2),
    (!0 === level3 || localStorage.getItem("progress3")) && storageAvailable("localStorage") && localStorage.setItem("progress3", level3),
    (!0 === level4 || localStorage.getItem("progress4")) && storageAvailable("localStorage") && localStorage.setItem("progress4", level4),
    (!0 === level5 || localStorage.getItem("progress5")) && storageAvailable("localStorage") && localStorage.setItem("progress5", level5),
    (!0 === level6 || localStorage.getItem("progress6")) && storageAvailable("localStorage") && localStorage.setItem("progress6", level6),
    (!0 === level7 || localStorage.getItem("progress7")) && storageAvailable("localStorage") && localStorage.setItem("progress7", level7),
    (!0 === level8 || localStorage.getItem("progress8")) && storageAvailable("localStorage") && localStorage.setItem("progress8", level8),
    (!0 === level9 || localStorage.getItem("progress9")) && storageAvailable("localStorage") && localStorage.setItem("progress9", level9),
    (!0 === level10 || localStorage.getItem("progress10")) && storageAvailable("localStorage") && localStorage.setItem("progress10", level10),
    (!0 === level11 || localStorage.getItem("progress11")) && storageAvailable("localStorage") && localStorage.setItem("progress11", level11),
    (!0 === level12 || localStorage.getItem("progress12")) && storageAvailable("localStorage") && localStorage.setItem("progress12", level12),
    (!0 === level13 || localStorage.getItem("progress13")) && storageAvailable("localStorage") && localStorage.setItem("progress13", level13),
    (!0 === level14 || localStorage.getItem("progress14")) && storageAvailable("localStorage") && localStorage.setItem("progress14", level14),
    (!0 === level15 || localStorage.getItem("progress15")) && storageAvailable("localStorage") && localStorage.setItem("progress15", level15),
    (!0 === level16 || localStorage.getItem("progress16")) && storageAvailable("localStorage") && localStorage.setItem("progress16", level16),
    (!0 === level17 || localStorage.getItem("progress17")) && storageAvailable("localStorage") && localStorage.setItem("progress17", level17),
    (!0 === level18 || localStorage.getItem("progress18")) && storageAvailable("localStorage") && localStorage.setItem("progress18", level18),
    (!0 === level19 || localStorage.getItem("progress19")) && storageAvailable("localStorage") && localStorage.setItem("progress19", level19),
    (!0 === level20 || localStorage.getItem("progress20")) && storageAvailable("localStorage") && localStorage.setItem("progress20", level20),
    (!0 === level21 || localStorage.getItem("progress21")) && storageAvailable("localStorage") && localStorage.setItem("progress21", level21),
    (!0 === level22 || localStorage.getItem("progress22")) && storageAvailable("localStorage") && localStorage.setItem("progress22", level22),
    (!0 === level23 || localStorage.getItem("progress23")) && storageAvailable("localStorage") && localStorage.setItem("progress23", level23),
    (!0 === level24 || localStorage.getItem("progress24")) && storageAvailable("localStorage") && localStorage.setItem("progress24", level24),
    (!0 === level25 || localStorage.getItem("progress25")) && storageAvailable("localStorage") && localStorage.setItem("progress25", level25),
    (!0 === level26 || localStorage.getItem("progress26")) && storageAvailable("localStorage") && localStorage.setItem("progress26", level26),
    (!0 === level27 || localStorage.getItem("progress27")) && storageAvailable("localStorage") && localStorage.setItem("progress27", level27),
    (!0 === level28 || localStorage.getItem("progress28")) && storageAvailable("localStorage") && localStorage.setItem("progress28", level28),
    (!0 === level29 || localStorage.getItem("progress29")) && storageAvailable("localStorage") && localStorage.setItem("progress29", level29),
    (!0 === level30 || localStorage.getItem("progress30")) && storageAvailable("localStorage") && localStorage.setItem("progress30", level30),
    (!0 === level31 || localStorage.getItem("progress31")) && storageAvailable("localStorage") && localStorage.setItem("progress31", level31),
    (!0 === level32 || localStorage.getItem("progress32")) && storageAvailable("localStorage") && localStorage.setItem("progress32", level32),
    (!0 === level33 || localStorage.getItem("progress33")) && storageAvailable("localStorage") && localStorage.setItem("progress33", level33),
    (!0 === level34 || localStorage.getItem("progress34")) && storageAvailable("localStorage") && localStorage.setItem("progress34", level34),
    (!0 === level35 || localStorage.getItem("progress35")) && storageAvailable("localStorage") && localStorage.setItem("progress35", level35),
    (!0 === level36 || localStorage.getItem("progress36")) && storageAvailable("localStorage") && localStorage.setItem("progress36", level36),
    (!0 === level37 || localStorage.getItem("progress37")) && storageAvailable("localStorage") && localStorage.setItem("progress37", level37),
    (!0 === level38 || localStorage.getItem("progress38")) && storageAvailable("localStorage") && localStorage.setItem("progress38", level38),
    (!0 === level39 || localStorage.getItem("progress39")) && storageAvailable("localStorage") && localStorage.setItem("progress39", level39),
    (!0 === level40 || localStorage.getItem("progress40")) && storageAvailable("localStorage") && localStorage.setItem("progress40", level40),
    (!0 === level41 || localStorage.getItem("progress41")) && storageAvailable("localStorage") && localStorage.setItem("progress41", level41),
    (!0 === level42 || localStorage.getItem("progress42")) && storageAvailable("localStorage") && localStorage.setItem("progress42", level42),
    (!0 === level43 || localStorage.getItem("progress43")) && storageAvailable("localStorage") && localStorage.setItem("progress43", level43),
    (!0 === level44 || localStorage.getItem("progress44")) && storageAvailable("localStorage") && localStorage.setItem("progress44", level44),
    (!0 === level45 || localStorage.getItem("progress45")) && storageAvailable("localStorage") && localStorage.setItem("progress45", level45),
    this.progress1 = localStorage.getItem("progress1"),
    this.progress2 = localStorage.getItem("progress2"),
    this.progress3 = localStorage.getItem("progress3"),
    this.progress4 = localStorage.getItem("progress4"),
    this.progress5 = localStorage.getItem("progress5"),
    this.progress6 = localStorage.getItem("progress6"),
    this.progress7 = localStorage.getItem("progress7"),
    this.progress8 = localStorage.getItem("progress8"),
    this.progress9 = localStorage.getItem("progress9"),
    this.progress10 = localStorage.getItem("progress10"),
    this.progress11 = localStorage.getItem("progress11"),
    this.progress12 = localStorage.getItem("progress12"),
    this.progress13 = localStorage.getItem("progress13"),
    this.progress14 = localStorage.getItem("progress14"),
    this.progress15 = localStorage.getItem("progress15"),
    this.progress16 = localStorage.getItem("progress16"),
    this.progress17 = localStorage.getItem("progress17"),
    this.progress18 = localStorage.getItem("progress18"),
    this.progress19 = localStorage.getItem("progress19"),
    this.progress20 = localStorage.getItem("progress20"),
    this.progress21 = localStorage.getItem("progress21"),
    this.progress22 = localStorage.getItem("progress22"),
    this.progress23 = localStorage.getItem("progress23"),
    this.progress24 = localStorage.getItem("progress24"),
    this.progress25 = localStorage.getItem("progress25"),
    this.progress26 = localStorage.getItem("progress26"),
    this.progress27 = localStorage.getItem("progress27"),
    this.progress28 = localStorage.getItem("progress28"),
    this.progress29 = localStorage.getItem("progress29"),
    this.progress30 = localStorage.getItem("progress30"),
    this.progress31 = localStorage.getItem("progress31"),
    this.progress32 = localStorage.getItem("progress32"),
    this.progress33 = localStorage.getItem("progress33"),
    this.progress34 = localStorage.getItem("progress34"),
    this.progress35 = localStorage.getItem("progress35"),
    this.progress36 = localStorage.getItem("progress36"),
    this.progress37 = localStorage.getItem("progress37"),
    this.progress38 = localStorage.getItem("progress38"),
    this.progress39 = localStorage.getItem("progress39"),
    this.progress40 = localStorage.getItem("progress40"),
    this.progress41 = localStorage.getItem("progress41"),
    this.progress42 = localStorage.getItem("progress42"),
    this.progress43 = localStorage.getItem("progress43"),
    this.progress44 = localStorage.getItem("progress44"),
    this.progress45 = localStorage.getItem("progress45")
}
;
const PlayerCrosshair = pc.createScript("playerCrosshair");
PlayerCrosshair.attributes.add("crosshair_size", {
    type: "number",
    min: .15,
    max: .45,
    default: .3,
    description: "Adjusts the crosshair size"
}),
PlayerCrosshair.attributes.add("crosshair_thickness", {
    type: "number",
    min: 2,
    max: 8,
    default: 4,
    description: "Adjusts the crosshair thickness"
}),
PlayerCrosshair.attributes.add("crosshair_reticle_size", {
    type: "number",
    min: 10,
    max: 40,
    default: 30,
    description: "Adjusts the crosshair reticle size"
}),
PlayerCrosshair.attributes.add("crosshair_gap", {
    type: "number",
    min: 100,
    max: 200,
    default: 105,
    description: "Adjusts the crosshair gap"
}),
PlayerCrosshair.attributes.add("crosshair_colour", {
    type: "rgb",
    default: [255, 255, 255],
    description: "Adjusts the crosshair colour"
}),
PlayerCrosshair.attributes.add("dynamic_jump_toggle", {
    type: "boolean",
    default: !0,
    description: "Toggles the dynamic crosshair when jumping"
}),
PlayerCrosshair.attributes.add("dynamic_move_toggle", {
    type: "boolean",
    default: !0,
    description: "Toggles the dynamic crosshair when moving"
}),
PlayerCrosshair.attributes.add("dynamic_jump_amount", {
    type: "number",
    min: 0,
    max: 600,
    default: 400,
    description: "Adjusts the jump amount of the dynamic crosshair"
}),
PlayerCrosshair.attributes.add("dynamic_move_amount", {
    type: "number",
    min: 0,
    max: 600,
    default: 400,
    description: "Adjusts the move amount of the dynamic crosshair"
}),
PlayerCrosshair.attributes.add("dynamic_speed", {
    type: "number",
    min: 1,
    max: 5,
    default: 1,
    description: "Adjusts the speed of the dynamic crosshair"
});
let white = pc.Color.WHITE
  , red = pc.Color.RED
  , blue = pc.Color.CYAN
  , green = pc.Color.GREEN
  , yellow = pc.Color.YELLOW
  , purple = pc.Color.MAGENTA;
PlayerCrosshair.prototype.initialize = function() {
    this.crosshair = this.app.root.findByName("Crosshair"),
    this.topReticle = this.app.root.findByName("Top"),
    this.leftReticle = this.app.root.findByName("Left"),
    this.rightReticle = this.app.root.findByName("Right"),
    this.bottomReticle = this.app.root.findByName("Bottom"),
    this.playerController = this.entity.script.playerController,
    this.playerController2 = this.entity.script.playerController2,
    localStorage.getItem("white") && (localStorage.removeItem("red"),
    localStorage.removeItem("blue"),
    localStorage.removeItem("green"),
    localStorage.removeItem("yellow"),
    localStorage.removeItem("purple"),
    this.topReticle.element.color = white,
    this.leftReticle.element.color = white,
    this.rightReticle.element.color = white,
    this.bottomReticle.element.color = white),
    localStorage.getItem("red") && (localStorage.removeItem("white"),
    localStorage.removeItem("blue"),
    localStorage.removeItem("green"),
    localStorage.removeItem("yellow"),
    localStorage.removeItem("purple"),
    this.topReticle.element.color = red,
    this.leftReticle.element.color = red,
    this.rightReticle.element.color = red,
    this.bottomReticle.element.color = red),
    localStorage.getItem("blue") && (localStorage.removeItem("white"),
    localStorage.removeItem("red"),
    localStorage.removeItem("green"),
    localStorage.removeItem("yellow"),
    localStorage.removeItem("purple"),
    this.topReticle.element.color = blue,
    this.leftReticle.element.color = blue,
    this.rightReticle.element.color = blue,
    this.bottomReticle.element.color = blue),
    localStorage.getItem("green") && (localStorage.removeItem("white"),
    localStorage.removeItem("red"),
    localStorage.removeItem("blue"),
    localStorage.removeItem("yellow"),
    localStorage.removeItem("purple"),
    this.topReticle.element.color = green,
    this.leftReticle.element.color = green,
    this.rightReticle.element.color = green,
    this.bottomReticle.element.color = green),
    localStorage.getItem("yellow") && (localStorage.removeItem("white"),
    localStorage.removeItem("red"),
    localStorage.removeItem("blue"),
    localStorage.removeItem("green"),
    localStorage.removeItem("purple"),
    this.topReticle.element.color = yellow,
    this.leftReticle.element.color = yellow,
    this.rightReticle.element.color = yellow,
    this.bottomReticle.element.color = yellow),
    localStorage.getItem("purple") && (localStorage.removeItem("white"),
    localStorage.removeItem("red"),
    localStorage.removeItem("blue"),
    localStorage.removeItem("green"),
    localStorage.removeItem("yellow"),
    this.topReticle.element.color = purple,
    this.leftReticle.element.color = purple,
    this.rightReticle.element.color = purple,
    this.bottomReticle.element.color = purple)
}
,
PlayerCrosshair.prototype.update = function(e) {
    (this.playerController.isJumping || this.playerController2.isJumping) && this.dynamic_jump_toggle && (this.crosshair.element.height = pc.math.lerp(this.crosshair.element.height, this.crosshair_gap + this.dynamic_jump_amount, e * this.dynamic_speed),
    this.crosshair.element.width = pc.math.lerp(this.crosshair.element.width, this.crosshair_gap + this.dynamic_jump_amount, e * this.dynamic_speed)),
    (this.playerController.isLanding || this.playerController2.isLanding) && (this.crosshair.element.height = pc.math.lerp(this.crosshair.element.height, this.crosshair_gap + this.dynamic_jump_amount, e * this.dynamic_speed),
    this.crosshair.element.width = pc.math.lerp(this.crosshair.element.width, this.crosshair_gap + this.dynamic_jump_amount, e * this.dynamic_speed)),
    (this.playerController.moveForward || this.playerController.moveLeft || this.playerController.moveRight || this.playerController.moveBack || this.playerController2.moving) && this.dynamic_move_toggle && (this.crosshair.element.height = pc.math.lerp(this.crosshair.element.height, this.crosshair_gap + this.dynamic_move_amount, e * this.dynamic_speed),
    this.crosshair.element.width = pc.math.lerp(this.crosshair.element.width, this.crosshair_gap + this.dynamic_move_amount, e * this.dynamic_speed)),
    this.crosshair.element.height = pc.math.lerp(this.crosshair.element.height, this.crosshair_gap, 5 * e),
    this.crosshair.element.width = pc.math.lerp(this.crosshair.element.width, this.crosshair_gap, 5 * e)
}
,
PlayerCrosshair.prototype.crosshairSize = function() {
    this.crosshair.setLocalScale(this.crosshair_size, this.crosshair_size, 1)
}
,
PlayerCrosshair.prototype.crosshairThickness = function() {
    this.topReticle.element.width = this.crosshair_thickness,
    this.leftReticle.element.height = this.crosshair_thickness,
    this.rightReticle.element.height = this.crosshair_thickness,
    this.bottomReticle.element.width = this.crosshair_thickness
}
,
PlayerCrosshair.prototype.crosshairReticleSize = function() {
    this.topReticle.element.height = this.crosshair_reticle_size,
    this.leftReticle.element.width = this.crosshair_reticle_size,
    this.rightReticle.element.width = this.crosshair_reticle_size,
    this.bottomReticle.element.height = this.crosshair_reticle_size
}
,
PlayerCrosshair.prototype.crosshairGap = function() {
    this.crosshair.element.height = this.crosshair_gap,
    this.crosshair.element.width = this.crosshair_gap
}
,
PlayerCrosshair.prototype.crosshairColour = function() {
    this.topReticle.element.color = this.crosshair_colour,
    this.leftReticle.element.color = this.crosshair_colour,
    this.rightReticle.element.color = this.crosshair_colour,
    this.bottomReticle.element.color = this.crosshair_colour
}
,
PlayerCrosshair.prototype.crosshairWhite = function() {
    localStorage.setItem("white", white),
    this.topReticle.element.color = white,
    this.leftReticle.element.color = white,
    this.rightReticle.element.color = white,
    this.bottomReticle.element.color = white
}
,
PlayerCrosshair.prototype.crosshairRed = function() {
    localStorage.setItem("red", red),
    this.topReticle.element.color = red,
    this.leftReticle.element.color = red,
    this.rightReticle.element.color = red,
    this.bottomReticle.element.color = red
}
,
PlayerCrosshair.prototype.crosshairBlue = function() {
    localStorage.setItem("blue", blue),
    this.topReticle.element.color = blue,
    this.leftReticle.element.color = blue,
    this.rightReticle.element.color = blue,
    this.bottomReticle.element.color = blue
}
,
PlayerCrosshair.prototype.crosshairGreen = function() {
    localStorage.setItem("green", green),
    this.topReticle.element.color = green,
    this.leftReticle.element.color = green,
    this.rightReticle.element.color = green,
    this.bottomReticle.element.color = green
}
,
PlayerCrosshair.prototype.crosshairYellow = function() {
    localStorage.setItem("yellow", yellow),
    this.topReticle.element.color = yellow,
    this.leftReticle.element.color = yellow,
    this.rightReticle.element.color = yellow,
    this.bottomReticle.element.color = yellow
}
,
PlayerCrosshair.prototype.crosshairPurple = function() {
    localStorage.setItem("purple", purple),
    this.topReticle.element.color = purple,
    this.leftReticle.element.color = purple,
    this.rightReticle.element.color = purple,
    this.bottomReticle.element.color = purple
}
;
const PlayerCamera = pc.createScript("playerCamera");
PlayerCamera.attributes.add("sensitivity", {
    type: "number",
    min: .01,
    max: .5,
    title: "Sensitivity",
    default: .09
}),
PlayerCamera.attributes.add("fov", {
    type: "number",
    min: 1,
    max: 100,
    title: "FOV",
    default: 60
});
let pause = !1;
PlayerCamera.prototype.initialize = function() {
    this.app.mouse.on(pc.EVENT_MOUSEDOWN, this.onMouseDown, this),
    this.app.mouse.on(pc.EVENT_MOUSEMOVE, this.onMouseMove, this),
    this.eulers = new pc.Vec3(0,0,0),
    localStorage.getItem("fov", yo),
    this.entity.camera.fov = yo,
    localStorage.getItem("sens", bro),
    this.sensitivity = bro
}
,
PlayerCamera.prototype.onMouseDown = function(e) {
    pause || this.app.mouse.enablePointerLock()
}
,
PlayerCamera.prototype.onMouseMove = function(e) {
    pc.Mouse.isPointerLocked() && (this.eulers.x -= bro * e.dx,
    this.eulers.y -= bro * e.dy,
    this.eulers.y = this.clamp(this.eulers.y),
    this.entity.setLocalEulerAngles(this.eulers.y, this.eulers.x, 0))
}
,
PlayerCamera.prototype.clamp = function(e) {
    return e < -89.99 ? -89.99 : e > 89.99 ? 89.99 : e
}
,
PlayerCamera.prototype.reset = function() {
    this.eulers.y = 0,
    this.eulers.x = 0,
    this.entity.setEulerAngles(this.eulers.y, this.eulers.x, 0)
}
,
PlayerCamera.prototype.reset2 = function() {
    this.eulers.y = 0,
    this.eulers.x = -90,
    this.entity.setEulerAngles(this.eulers.y, this.eulers.x, 0)
}
,
PlayerCamera.prototype.reset3 = function() {
    this.eulers.y = 0,
    this.eulers.x = 90,
    this.entity.setEulerAngles(this.eulers.y, this.eulers.x, 0)
}
,
PlayerCamera.prototype.camOff = function() {
    this.app.mouse.off(pc.EVENT_MOUSEDOWN, this.onMouseDown, this),
    this.app.mouse.off(pc.EVENT_MOUSEMOVE, this.onMouseMove, this)
}
;
const PlayerController = pc.createScript("playerController");
PlayerController.attributes.add("waiting", {
    type: "number",
    default: 2500
}),
PlayerController.attributes.add("standing", {
    type: "number",
    default: 1e3
}),
PlayerController.prototype.initialize = function() {
    this.entity.rigidbody.group = pc.BODYGROUP_USER_1,
    this.map = this.app.root.findByName("Map");
    for (let t of this.map.children)
        "Wall" === t.name && (t.rigidbody.group = pc.BODYGROUP_USER_1);
    this.force = new pc.Vec3(0,0,0),
    this.directions = new pc.Vec2(0,0),
    this.jumpRaycastStart = new pc.Vec3(0,0,0),
    this.jumpRaycastEnd = new pc.Vec3(0,0,0),
    this.jumpTimeLast = 0,
    this.jumpTimeInterval = 650,
    this.pause = this.app.root.findByName("Pause Menu"),
    "true" === localStorage.getItem("sound") ? this.entity.sound.enabled = !1 : "false" === localStorage.getItem("sound") && (this.entity.sound.enabled = !0),
    this.camera = this.entity.findByName("Camera"),
    this.playerCollision = this.entity.findByName("player-collision"),
    this.app.keyboard.on("keydown", this.onKeyDown, this),
    this.app.keyboard.on("keyup", this.onKeyUp, this)
}
,
PlayerController.prototype.controls = function() {
    this.app.keyboard.isPressed(pc.KEY_W) || this.app.keyboard.isPressed(pc.KEY_UP) ? this.moveForward = !0 : this.moveForward = !1,
    this.app.keyboard.isPressed(pc.KEY_A) || this.app.keyboard.isPressed(pc.KEY_LEFT) ? this.moveLeft = !0 : this.moveLeft = !1,
    this.app.keyboard.isPressed(pc.KEY_S) || this.app.keyboard.isPressed(pc.KEY_DOWN) ? this.moveBack = !0 : this.moveBack = !1,
    this.app.keyboard.isPressed(pc.KEY_D) || this.app.keyboard.isPressed(pc.KEY_RIGHT) ? this.moveRight = !0 : this.moveRight = !1
}
,
PlayerController.prototype.update = function() {
    let t = this.waiting;
    this.right = this.camera.right,
    this.forward = this.camera.forward;
    const i = this.entity.rigidbody.linearVelocity;
    if (i.y < -1 ? this.isLanding = !0 : this.isLanding = !1,
    i.y > 1 ? this.isJumping = !0 : this.isJumping = !1,
    this.moveForward && (this.directions.x += this.forward.x,
    this.directions.y += this.forward.z),
    this.moveLeft && (this.directions.x -= this.right.x,
    this.directions.y -= this.right.z),
    this.moveRight && (this.directions.x += this.right.x,
    this.directions.y += this.right.z),
    this.moveBack && (this.directions.x -= this.forward.x,
    this.directions.y -= this.forward.z),
    this.directions.lengthSq() > 0) {
        this.moving = !0;
        const i = this.force
          , s = this.directions.x
          , e = this.directions.y;
        i.set(s, 0, e).normalize().scale(t),
        this.entity.rigidbody.applyForce(i),
        this.directions.scale(0)
    } else
        this.moving = !1;
    let s = this.playerCollision.collision.halfExtents
      , e = this.playerCollision.getPosition()
      , o = this.entity.getPosition();
    this.jumpRaycastStart.copy(e),
    this.jumpRaycastEnd.copy(o),
    this.jumpRaycastStart.y -= .2,
    this.jumpRaycastEnd.y += .9;
    const a = this.app.systems.rigidbody.boxCast(s, this.jumpRaycastStart, this.jumpRaycastEnd);
    let r = !1;
    a && a.entity.rigidbody && a.entity !== this.entity && (r = !0);
    const n = Math.abs(this.entity.rigidbody.linearVelocity.x)
      , h = Math.abs(this.entity.rigidbody.linearVelocity.z)
      , y = Math.trunc(n)
      , d = Math.trunc(h);
    this.moving && !this.isLanding && (y > 1 || d > 1) && this.app.systems.rigidbody.boxCast(s, this.jumpRaycastStart, this.jumpRaycastEnd) && (this.entity.sound.slot(1).isPlaying || this.entity.sound.play(1)),
    this.app.keyboard.wasPressed(pc.KEY_SPACE) && !this.isLanding && r && pc.BODYGROUP_USER_1 && (this.entity.sound.slot(1).isPlaying || this.entity.sound.play(1)),
    this.jump(),
    this.controls()
}
,
PlayerController.prototype.postUpdate = function(t) {
    const i = Math.pow(1 - .99, t)
      , s = this.entity.rigidbody.linearVelocity;
    if (s.x *= i,
    s.z *= i,
    this.entity.rigidbody.linearVelocity = s,
    this.isJumping) {
        let t = 0;
        t -= 14 * this.entity.rigidbody.mass,
        this.entity.rigidbody.applyForce(0, t, 0)
    }
    if (this.isLanding) {
        let t = 0;
        t -= 7 * this.entity.rigidbody.mass,
        this.entity.rigidbody.applyForce(0, t, 0)
    }
}
,
PlayerController.prototype.jump = function() {
    if (this.app.keyboard.wasPressed(pc.KEY_SPACE)) {
        const t = Date.now() - this.jumpTimeLast > this.jumpTimeInterval && this.isGrounded();
        this.grounded = t,
        this.grounded && (this.jumpTimeLast = Date.now())
    } else
        this.grounded = !1;
    this.grounded && (this.entity.rigidbody.applyImpulse(0, this.standing, 0),
    this.grounded = !1)
}
,
PlayerController.prototype.isGrounded = function() {
    let t = this.playerCollision.collision.halfExtents
      , i = this.playerCollision.getPosition()
      , s = this.entity.getPosition();
    this.jumpRaycastStart.copy(i),
    this.jumpRaycastEnd.copy(s),
    this.jumpRaycastStart.y -= .2,
    this.jumpRaycastEnd.y += .9;
    const e = this.app.systems.rigidbody.boxCast(t, this.jumpRaycastStart, this.jumpRaycastEnd);
    let o = !1;
    return e && e.entity.rigidbody && e.entity !== this.entity && (o = !0),
    o
}
;
const ChangeSceneOnTrigger = pc.createScript("changeSceneOnTrigger");
ChangeSceneOnTrigger.attributes.add("sceneName", {
    type: "string"
}),
ChangeSceneOnTrigger.attributes.add("Level", {
    type: "string"
});
let level1 = !1
  , level2 = !1
  , level3 = !1
  , level4 = !1
  , level5 = !1
  , level6 = !1
  , level7 = !1
  , level8 = !1
  , level9 = !1
  , level10 = !1
  , level11 = !1
  , level12 = !1
  , level13 = !1
  , level14 = !1
  , level15 = !1
  , level16 = !1
  , level17 = !1
  , level18 = !1
  , level19 = !1
  , level20 = !1
  , level21 = !1
  , level22 = !1
  , level23 = !1
  , level24 = !1
  , level25 = !1
  , level26 = !1
  , level27 = !1
  , level28 = !1
  , level29 = !1
  , level30 = !1
  , level31 = !1
  , level32 = !1
  , level33 = !1
  , level34 = !1
  , level35 = !1
  , level36 = !1
  , level37 = !1
  , level38 = !1
  , level39 = !1
  , level40 = !1
  , level41 = !1
  , level42 = !1
  , level43 = !1
  , level44 = !1;
ChangeSceneOnTrigger.prototype.initialize = function() {
    this.entity.collision.on("triggerenter", this.onTriggerEnter, this),
    this.player = this.app.root.findByName("Player"),
    this.camera = this.app.root.findByName("Camera"),
    this.time = this.app.root.findByName("Time")
}
,
ChangeSceneOnTrigger.prototype.onTriggerEnter = function(e) {
    "Player" == e.collision.entity.name && (spodruns && this.time.script.time.stopStopwatch(),
    "Level1" === this.Level && (level1 = !0),
    "Level2" === this.Level && (level2 = !0),
    "Level3" === this.Level && (level3 = !0),
    "Level4" === this.Level && (level4 = !0),
    "Level5" === this.Level && (level5 = !0),
    "Level6" === this.Level && (level6 = !0),
    "Level7" === this.Level && (level7 = !0),
    "Level8" === this.Level && (level8 = !0),
    "Level9" === this.Level && (level9 = !0),
    "Level10" === this.Level && (level10 = !0),
    "Level11" === this.Level && (level11 = !0),
    "Level12" === this.Level && (level12 = !0),
    "Level13" === this.Level && (level13 = !0),
    "Level14" === this.Level && (level14 = !0),
    "Level15" === this.Level && (level15 = !0),
    "Level16" === this.Level && (level16 = !0),
    "Level17" === this.Level && (level17 = !0),
    "Level18" === this.Level && (level18 = !0),
    "Level19" === this.Level && (level19 = !0),
    "Level20" === this.Level && (level20 = !0),
    "Level21" === this.Level && (level21 = !0),
    "Level22" === this.Level && (level22 = !0),
    "Level23" === this.Level && (level23 = !0),
    "Level24" === this.Level && (level24 = !0),
    "Level25" === this.Level && (level25 = !0),
    "Level26" === this.Level && (level26 = !0),
    "Level27" === this.Level && (level27 = !0),
    "Level28" === this.Level && (level28 = !0),
    "Level29" === this.Level && (level29 = !0),
    "Level30" === this.Level && (level30 = !0),
    "Level31" === this.Level && (level31 = !0),
    "Level32" === this.Level && (level32 = !0),
    "Level33" === this.Level && (level33 = !0),
    "Level34" === this.Level && (level34 = !0),
    "Level35" === this.Level && (level35 = !0),
    "Level36" === this.Level && (level36 = !0),
    "Level37" === this.Level && (level37 = !0),
    "Level38" === this.Level && (level38 = !0),
    "Level39" === this.Level && (level39 = !0),
    "Level40" === this.Level && (level40 = !0),
    "Level41" === this.Level && (level41 = !0),
    "Level42" === this.Level && (level42 = !0),
    "Level43" === this.Level && (level43 = !0),
    "Level44" === this.Level && (level44 = !0),
    this.player.sound.slot(3).isPlaying || this.player.sound.play(3),
    this.player.script.playerController.enabled = !1,
    this.camera.script.playerCamera.camOff(),
    this.player.collision.enabled = !1,
    this.player.script.pauseMenu.enabled = !1,
    isMobile && (this.camera.script.orbitCamera.enabled = !1,
    this.player.script.playerController2.enabled = !1),
    setTimeout(( () => {
        loadScene(this.sceneName, {
            hierarchy: !0,
            settings: !0
        })
    }
    ), 1e3))
}
;
function loadScene(e, n, c, l) {
    var a = pc.Application.getApplication()
      , o = a.scenes.find(e);
    if (o) {
        var t = o.loaded;
        a.scenes.loadSceneData(o, (function(e, o) {
            if (e)
                c && c.call(l, e);
            else {
                for (var i = null, s = a.root.children; s.length > 0; )
                    s[0].destroy();
                n.settings && a.scenes.loadSceneSettings(o, (function(e) {
                    e && c && c.call(l, e)
                }
                )),
                n.hierarchy && a.scenes.loadSceneHierarchy(o, (function(e, n) {
                    e ? c && c(e) : i = n
                }
                )),
                t || a.scenes.unloadSceneData(o),
                c && c.call(l, null, i)
            }
        }
        ))
    } else
        c && c.call(l, "Scene not found: " + e)
}
const ScrollingTexture = pc.createScript("scrollingTexture");
ScrollingTexture.attributes.add("materialAsset", {
    type: "asset"
}),
ScrollingTexture.attributes.add("speed", {
    type: "vec2"
}),
ScrollingTexture.tmpVec2 = new pc.Vec2,
ScrollingTexture.tmpOffset = new pc.Vec2,
ScrollingTexture.prototype.initialize = function() {
    this.materialAsset && (this.material = this.materialAsset.resource)
}
,
ScrollingTexture.prototype.update = function(e) {
    var t = ScrollingTexture.tmpVec2
      , i = ScrollingTexture.tmpOffset;
    t.set(this.speed.x, this.speed.y),
    t.scale(e),
    i.copy(this.material.diffuseMapOffset),
    i.add(t),
    this.material.diffuseMapOffset = i,
    this.material.normalMapOffset = i,
    this.material.update()
}
;
const ChangeMenu = pc.createScript("changeMenu");
ChangeMenu.attributes.add("menu", {
    type: "entity"
}),
ChangeMenu.prototype.initialize = function() {
    this.entity.button.on("click", this.onClick, this)
}
,
ChangeMenu.prototype.onClick = function() {
    this.menu.enabled = !0,
    this.entity.parent.enabled = !1
}
;
const RotateCamera = pc.createScript("rotateCamera");
RotateCamera.prototype.update = function(t) {
    this.entity.rotateLocal(0, .07, 0)
}
;
const ChangeSceneOnClick = pc.createScript("changeSceneOnClick");
ChangeSceneOnClick.attributes.add("sceneName", {
    type: "string"
}),
ChangeSceneOnClick.prototype.initialize = function() {
    this.entity.button.once("click", this.onClick, this)
}
,
ChangeSceneOnClick.prototype.onClick = function() {
    pause = !1,
    this.app.mouse.enablePointerLock(),
    loadScene(this.sceneName, {
        hierarchy: !0,
        settings: !0
    })
}
;
const PlayerRespawn = pc.createScript("playerRespawn");
PlayerRespawn.prototype.initialize = function() {
    this.velocity = new pc.Vec3,
    this.player = this.app.root.findByName("Player"),
    this.camera = this.app.root.findByName("Camera"),
    this.spawn = this.player.getPosition().clone()
}
,
PlayerRespawn.prototype.update = function(e) {
    this.entity.getPosition().y < -3 && (this.player.rigidbody.teleport(this.spawn),
    this.player.rigidbody.linearVelocity = this.velocity.set(0, 0, 0),
    this.player.rigidbody.angularVelocity = new pc.Vec3(0,0,0),
    this.player.sound.slot(2).isPlaying || this.player.sound.play(2),
    this.camera.script.playerCamera.reset(),
    !0 === this.camera.script.orbitCamera.enabled && this.camera.script.orbitCamera.reset())
}
;
pc.script.createLoadingScreen((function(e) {
    var t, a, showSplash = function() {
        var e = document.createElement("div");
        e.id = "application-splash-wrapper",
        document.body.appendChild(e);
        var t = document.createElement("div");
        t.id = "application-splash",
        e.appendChild(t),
        t.style.display = "none";
        var a = document.createElement("img");
        a.src = "https://i.hizliresim.com/57ig8s5.png",
        t.appendChild(a),
        a.onload = function() {
            t.style.display = "block"
        }
        ;
        var o = document.createElement("div");
        o.id = "progress-bar-container",
        t.appendChild(o);
        var i = document.createElement("div");
        i.id = "progress-bar",
        o.appendChild(i)
    };
    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
        t = ["body {", "    background-color: #283538;", "}", "", "#application-splash-wrapper {", "    position: absolute;", "    top: 0;", "    left: 0;", "    height: 100%;", "    width: 100%;", "    background-color: #F7F7F7;", "}", "", "#application-splash {", "    margin-top:80px;", "    margin-left:auto;", "    margin-right:auto;", "    width:300px;", "}", "", "#application-splash img {", "    width: 100%;", "}", "", "#progress-bar-container {", "    margin: 20px auto 0 auto;", "    height: 5px;", "    width: 100%;", "    background-color: black;", "}", "", "#progress-bar {", "    width: 0%;", "    height: 100%;", "    background-color: cyan;", "}", "", "@media (max-width: 480px) {", "    #application-splash {", "        width: 170px;", "        left: calc(50% - 85px);", "    }", "}"].join("\n"),
        (a = document.createElement("style")).type = "text/css",
        a.styleSheet ? a.styleSheet.cssText = t : a.appendChild(document.createTextNode(t)),
        document.head.appendChild(a),
        showSplash()
    } else {
        !function() {
            var e = ["body {", "    background-color: #283538;", "}", "", "#application-splash-wrapper {", "    position: absolute;", "    top: 0;", "    left: 0;", "    height: 100%;", "    width: 100%;", "    background-color: #F7F7F7;", "}", "", "#application-splash {", "    margin-top:180px;", "    margin-left:auto;", "    margin-right:auto;", "    width:350px;", "}", "", "#application-splash img {", "    width: 100%;", "}", "", "#progress-bar-container {", "    margin: 20px auto 0 auto;", "    height: 5px;", "    width: 100%;", "    background-color: black;", "}", "", "#progress-bar {", "    width: 0%;", "    height: 100%;", "    background-color: cyan;", "}", "", "@media (max-width: 480px) {", "    #application-splash {", "        width: 170px;", "        left: calc(50% - 85px);", "    }", "}"].join("\n")
              , t = document.createElement("style");
            t.type = "text/css",
            t.styleSheet ? t.styleSheet.cssText = e : t.appendChild(document.createTextNode(e)),
            document.head.appendChild(t)
        }(),
        showSplash()
    }
    e.on("preload:end", (function() {
        e.off("preload:progress")
    }
    )),
    e.on("preload:progress", (function(e) {
        var t = document.getElementById("progress-bar");
        t && (e = Math.min(1, Math.max(0, e)),
        t.style.width = 100 * e + "%")
    }
    )),
    e.on("start", (function() {
        var e = document.getElementById("application-splash-wrapper");
        e.parentElement.removeChild(e)
    }
    ))
}
));
const Hmmm = pc.createScript("hmmm");
function storageAvailable(e) {
    try {
        var l = window[e]
          , t = "__storage_test__";
        return l.setItem(t, t),
        l.removeItem(t),
        !0
    } catch (e) {
        return !1
    }
}
Hmmm.attributes.add("Level1", {
    type: "entity"
}),
Hmmm.attributes.add("Level2", {
    type: "entity"
}),
Hmmm.attributes.add("Level3", {
    type: "entity"
}),
Hmmm.attributes.add("Level4", {
    type: "entity"
}),
Hmmm.attributes.add("Level5", {
    type: "entity"
}),
Hmmm.attributes.add("Level6", {
    type: "entity"
}),
Hmmm.attributes.add("Level7", {
    type: "entity"
}),
Hmmm.attributes.add("Level8", {
    type: "entity"
}),
Hmmm.attributes.add("Level9", {
    type: "entity"
}),
Hmmm.attributes.add("Level10", {
    type: "entity"
}),
Hmmm.attributes.add("Level11", {
    type: "entity"
}),
Hmmm.attributes.add("Level12", {
    type: "entity"
}),
Hmmm.attributes.add("Level13", {
    type: "entity"
}),
Hmmm.attributes.add("Level14", {
    type: "entity"
}),
Hmmm.attributes.add("Level15", {
    type: "entity"
}),
Hmmm.attributes.add("Level16", {
    type: "entity"
}),
Hmmm.attributes.add("Level17", {
    type: "entity"
}),
Hmmm.attributes.add("Level18", {
    type: "entity"
}),
Hmmm.attributes.add("Level19", {
    type: "entity"
}),
Hmmm.attributes.add("Level20", {
    type: "entity"
}),
Hmmm.attributes.add("Level21", {
    type: "entity"
}),
Hmmm.attributes.add("Level22", {
    type: "entity"
}),
Hmmm.attributes.add("Level23", {
    type: "entity"
}),
Hmmm.attributes.add("Level24", {
    type: "entity"
}),
Hmmm.attributes.add("Level25", {
    type: "entity"
}),
Hmmm.attributes.add("Level26", {
    type: "entity"
}),
Hmmm.attributes.add("Level27", {
    type: "entity"
}),
Hmmm.attributes.add("Level28", {
    type: "entity"
}),
Hmmm.attributes.add("Level29", {
    type: "entity"
}),
Hmmm.attributes.add("Level30", {
    type: "entity"
}),
Hmmm.attributes.add("Level31", {
    type: "entity"
}),
Hmmm.attributes.add("Level32", {
    type: "entity"
}),
Hmmm.attributes.add("Level33", {
    type: "entity"
}),
Hmmm.attributes.add("Level34", {
    type: "entity"
}),
Hmmm.attributes.add("Level35", {
    type: "entity"
}),
Hmmm.attributes.add("Level36", {
    type: "entity"
}),
Hmmm.attributes.add("Level37", {
    type: "entity"
}),
Hmmm.attributes.add("Level38", {
    type: "entity"
}),
Hmmm.attributes.add("Level39", {
    type: "entity"
}),
Hmmm.attributes.add("Level40", {
    type: "entity"
}),
Hmmm.attributes.add("Level41", {
    type: "entity"
}),
Hmmm.attributes.add("Level42", {
    type: "entity"
}),
Hmmm.attributes.add("Level43", {
    type: "entity"
}),
Hmmm.attributes.add("Level44", {
    type: "entity"
}),
Hmmm.attributes.add("Level45", {
    type: "entity"
}),
Hmmm.attributes.add("Level46", {
    type: "entity"
}),
Hmmm.attributes.add("Level47", {
    type: "entity"
}),
Hmmm.attributes.add("Level48", {
    type: "entity"
}),
Hmmm.attributes.add("a", {
    type: "entity"
}),
Hmmm.attributes.add("b", {
    type: "entity"
}),
Hmmm.attributes.add("c", {
    type: "entity"
}),
Hmmm.prototype.initialize = function() {
    "true" === localStorage.getItem("ach1") && "true" === localStorage.getItem("secs") ? this.a.enabled = !0 : this.a.enabled = !1,
    "true" === localStorage.getItem("ach1") && "true" === localStorage.getItem("gost") ? this.b.enabled = !0 : this.b.enabled = !1,
    "true" === localStorage.getItem("ach1") && "true" === localStorage.getItem("ach3") ? this.c.enabled = !0 : this.c.enabled = !1,
    this.level1 = this.app.root.findByName("Level 1"),
    this.level2 = this.app.root.findByName("Level 2"),
    this.level3 = this.app.root.findByName("Level 3"),
    this.level4 = this.app.root.findByName("Level 4"),
    this.level5 = this.app.root.findByName("Level 5"),
    this.level6 = this.app.root.findByName("Level 6"),
    this.level7 = this.app.root.findByName("Level 7"),
    this.level8 = this.app.root.findByName("Level 8"),
    this.level9 = this.app.root.findByName("Level 9"),
    this.level10 = this.app.root.findByName("Level 10"),
    this.level11 = this.app.root.findByName("Level 11"),
    this.level12 = this.app.root.findByName("Level 12"),
    this.level13 = this.app.root.findByName("Level 13"),
    this.level14 = this.app.root.findByName("Level 14"),
    this.level15 = this.app.root.findByName("Level 15"),
    this.level16 = this.app.root.findByName("Level 16"),
    this.level17 = this.app.root.findByName("Level 17"),
    this.level18 = this.app.root.findByName("Level 18"),
    this.level19 = this.app.root.findByName("Level 19"),
    this.level20 = this.app.root.findByName("Level 20"),
    this.level21 = this.app.root.findByName("Level 21"),
    this.level22 = this.app.root.findByName("Level 22"),
    this.level23 = this.app.root.findByName("Level 23"),
    this.level24 = this.app.root.findByName("Level 24"),
    this.level25 = this.app.root.findByName("Level 25"),
    this.level26 = this.app.root.findByName("Level 26"),
    this.level27 = this.app.root.findByName("Level 27"),
    this.level28 = this.app.root.findByName("Level 28"),
    this.level29 = this.app.root.findByName("Level 29"),
    this.level30 = this.app.root.findByName("Level 30"),
    this.level31 = this.app.root.findByName("Level 31"),
    this.level32 = this.app.root.findByName("Level 32"),
    this.level33 = this.app.root.findByName("Level 33"),
    this.level34 = this.app.root.findByName("Level 34"),
    this.level35 = this.app.root.findByName("Level 35"),
    this.level36 = this.app.root.findByName("Level 36"),
    this.level37 = this.app.root.findByName("Level 37"),
    this.level38 = this.app.root.findByName("Level 38"),
    this.level39 = this.app.root.findByName("Level 39"),
    this.level40 = this.app.root.findByName("Level 40"),
    this.level41 = this.app.root.findByName("Level 41"),
    this.level42 = this.app.root.findByName("Level 42"),
    this.level43 = this.app.root.findByName("Level 43"),
    this.level44 = this.app.root.findByName("Level 44"),
    this.level45 = this.app.root.findByName("Level 45"),
    this.level46 = this.app.root.findByName("Secret"),
    this.level47 = this.app.root.findByName("Ghost"),
    this.level48 = this.app.root.findByName("Faster"),
    this.level2a = this.app.root.findByName("Level 2"),
    this.level2b = this.app.root.findByName("Level 2 b"),
    this.level3a = this.app.root.findByName("Level 3"),
    this.level3b = this.app.root.findByName("Level 3 b"),
    this.level4a = this.app.root.findByName("Level 4"),
    this.level4b = this.app.root.findByName("Level 4 b"),
    this.level5a = this.app.root.findByName("Level 5"),
    this.level5b = this.app.root.findByName("Level 5 b"),
    this.level6a = this.app.root.findByName("Level 6"),
    this.level6b = this.app.root.findByName("Level 6 b"),
    this.level7a = this.app.root.findByName("Level 7"),
    this.level7b = this.app.root.findByName("Level 7 b"),
    this.level8a = this.app.root.findByName("Level 8"),
    this.level8b = this.app.root.findByName("Level 8 b"),
    this.level9a = this.app.root.findByName("Level 9"),
    this.level9b = this.app.root.findByName("Level 9 b"),
    this.level10a = this.app.root.findByName("Level 10"),
    this.level10b = this.app.root.findByName("Level 10 b"),
    this.level11a = this.app.root.findByName("Level 11"),
    this.level11b = this.app.root.findByName("Level 11 b"),
    this.level12a = this.app.root.findByName("Level 12"),
    this.level12b = this.app.root.findByName("Level 12 b"),
    this.level13a = this.app.root.findByName("Level 13"),
    this.level13b = this.app.root.findByName("Level 13 b"),
    this.level14a = this.app.root.findByName("Level 14"),
    this.level14b = this.app.root.findByName("Level 14 b"),
    this.level15a = this.app.root.findByName("Level 15"),
    this.level15b = this.app.root.findByName("Level 15 b"),
    this.level16a = this.app.root.findByName("Level 16"),
    this.level16b = this.app.root.findByName("Level 16 b"),
    this.level17a = this.app.root.findByName("Level 17"),
    this.level17b = this.app.root.findByName("Level 17 b"),
    this.level18a = this.app.root.findByName("Level 18"),
    this.level18b = this.app.root.findByName("Level 18 b"),
    this.level19a = this.app.root.findByName("Level 19"),
    this.level19b = this.app.root.findByName("Level 19 b"),
    this.level20a = this.app.root.findByName("Level 20"),
    this.level20b = this.app.root.findByName("Level 20 b"),
    this.level21a = this.app.root.findByName("Level 21"),
    this.level21b = this.app.root.findByName("Level 21 b"),
    this.level22a = this.app.root.findByName("Level 22"),
    this.level22b = this.app.root.findByName("Level 22 b"),
    this.level23a = this.app.root.findByName("Level 23"),
    this.level23b = this.app.root.findByName("Level 23 b"),
    this.level24a = this.app.root.findByName("Level 24"),
    this.level24b = this.app.root.findByName("Level 24 b"),
    this.level25a = this.app.root.findByName("Level 25"),
    this.level25b = this.app.root.findByName("Level 25 b"),
    this.level26a = this.app.root.findByName("Level 26"),
    this.level26b = this.app.root.findByName("Level 26 b"),
    this.level27a = this.app.root.findByName("Level 27"),
    this.level27b = this.app.root.findByName("Level 27 b"),
    this.level28a = this.app.root.findByName("Level 28"),
    this.level28b = this.app.root.findByName("Level 28 b"),
    this.level29a = this.app.root.findByName("Level 29"),
    this.level29b = this.app.root.findByName("Level 29 b"),
    this.level30a = this.app.root.findByName("Level 30"),
    this.level30b = this.app.root.findByName("Level 30 b"),
    this.level31a = this.app.root.findByName("Level 31"),
    this.level31b = this.app.root.findByName("Level 31 b"),
    this.level32a = this.app.root.findByName("Level 32"),
    this.level32b = this.app.root.findByName("Level 32 b"),
    this.level33a = this.app.root.findByName("Level 33"),
    this.level33b = this.app.root.findByName("Level 33 b"),
    this.level34a = this.app.root.findByName("Level 34"),
    this.level34b = this.app.root.findByName("Level 34 b"),
    this.level35a = this.app.root.findByName("Level 35"),
    this.level35b = this.app.root.findByName("Level 35 b"),
    this.level36a = this.app.root.findByName("Level 36"),
    this.level36b = this.app.root.findByName("Level 36 b"),
    this.level37a = this.app.root.findByName("Level 37"),
    this.level37b = this.app.root.findByName("Level 37 b"),
    this.level38a = this.app.root.findByName("Level 38"),
    this.level38b = this.app.root.findByName("Level 38 b"),
    this.level39a = this.app.root.findByName("Level 39"),
    this.level39b = this.app.root.findByName("Level 39 b"),
    this.level40a = this.app.root.findByName("Level 40"),
    this.level40b = this.app.root.findByName("Level 40 b"),
    this.level41a = this.app.root.findByName("Level 41"),
    this.level41b = this.app.root.findByName("Level 41 b"),
    this.level42a = this.app.root.findByName("Level 42"),
    this.level42b = this.app.root.findByName("Level 42 b"),
    this.level43a = this.app.root.findByName("Level 43"),
    this.level43b = this.app.root.findByName("Level 43 b"),
    this.level44a = this.app.root.findByName("Level 44"),
    this.level44b = this.app.root.findByName("Level 44 b"),
    this.level45a = this.app.root.findByName("Level 45"),
    this.level45b = this.app.root.findByName("Level 45 b"),
    (!0 === level1 || localStorage.getItem("progress1")) && (storageAvailable("localStorage") && localStorage.setItem("progress1", level1),
    this.Level1.enabled = !0,
    this.level1.enabled = !1,
    this.level2b.enabled = !1,
    this.level2a.enabled = !0),
    (!0 === level2 || localStorage.getItem("progress2")) && (storageAvailable("localStorage") && localStorage.setItem("progress2", level2),
    this.Level2.enabled = !0,
    this.level2.enabled = !1,
    this.level3b.enabled = !1,
    this.level3a.enabled = !0),
    (!0 === level3 || localStorage.getItem("progress3")) && (storageAvailable("localStorage") && localStorage.setItem("progress3", level3),
    this.Level3.enabled = !0,
    this.level3.enabled = !1,
    this.level4b.enabled = !1,
    this.level4a.enabled = !0),
    (!0 === level4 || localStorage.getItem("progress4")) && (storageAvailable("localStorage") && localStorage.setItem("progress4", level4),
    this.Level4.enabled = !0,
    this.level4.enabled = !1,
    this.level5b.enabled = !1,
    this.level5a.enabled = !0),
    (!0 === level5 || localStorage.getItem("progress5")) && (storageAvailable("localStorage") && localStorage.setItem("progress5", level5),
    this.Level5.enabled = !0,
    this.level5.enabled = !1,
    this.level6b.enabled = !1,
    this.level6a.enabled = !0),
    (!0 === level6 || localStorage.getItem("progress6")) && (storageAvailable("localStorage") && localStorage.setItem("progress6", level6),
    this.Level6.enabled = !0,
    this.level6.enabled = !1,
    this.level7b.enabled = !1,
    this.level7a.enabled = !0),
    (!0 === level7 || localStorage.getItem("progress7")) && (storageAvailable("localStorage") && localStorage.setItem("progress7", level7),
    this.Level7.enabled = !0,
    this.level7.enabled = !1,
    this.level8b.enabled = !1,
    this.level8a.enabled = !0),
    (!0 === level8 || localStorage.getItem("progress8")) && (storageAvailable("localStorage") && localStorage.setItem("progress8", level8),
    this.Level8.enabled = !0,
    this.level8.enabled = !1,
    this.level9b.enabled = !1,
    this.level9a.enabled = !0),
    (!0 === level9 || localStorage.getItem("progress9")) && (storageAvailable("localStorage") && localStorage.setItem("progress9", level9),
    this.Level9.enabled = !0,
    this.level9.enabled = !1,
    this.level10b.enabled = !1,
    this.level10a.enabled = !0),
    (!0 === level10 || localStorage.getItem("progress10")) && (storageAvailable("localStorage") && localStorage.setItem("progress10", level10),
    this.Level10.enabled = !0,
    this.level10.enabled = !1,
    this.level11b.enabled = !1,
    this.level11a.enabled = !0),
    (!0 === level11 || localStorage.getItem("progress11")) && (storageAvailable("localStorage") && localStorage.setItem("progress11", level11),
    this.Level11.enabled = !0,
    this.level11.enabled = !1,
    this.level12b.enabled = !1,
    this.level12a.enabled = !0),
    (!0 === level12 || localStorage.getItem("progress12")) && (storageAvailable("localStorage") && localStorage.setItem("progress12", level12),
    this.Level12.enabled = !0,
    this.level12.enabled = !1,
    this.level13b.enabled = !1,
    this.level13a.enabled = !0),
    (!0 === level13 || localStorage.getItem("progress13")) && (storageAvailable("localStorage") && localStorage.setItem("progress13", level13),
    this.Level13.enabled = !0,
    this.level13.enabled = !1,
    this.level14b.enabled = !1,
    this.level14a.enabled = !0),
    (!0 === level14 || localStorage.getItem("progress14")) && (storageAvailable("localStorage") && localStorage.setItem("progress14", level14),
    this.Level14.enabled = !0,
    this.level14.enabled = !1,
    this.level15b.enabled = !1,
    this.level15a.enabled = !0),
    (!0 === level15 || localStorage.getItem("progress15")) && (storageAvailable("localStorage") && localStorage.setItem("progress15", level15),
    this.Level15.enabled = !0,
    this.level15.enabled = !1,
    this.level16b.enabled = !1,
    this.level16a.enabled = !0),
    (!0 === level16 || localStorage.getItem("progress16")) && (storageAvailable("localStorage") && localStorage.setItem("progress16", level16),
    this.Level16.enabled = !0,
    this.level16.enabled = !1,
    this.level17b.enabled = !1,
    this.level17a.enabled = !0),
    (!0 === level17 || localStorage.getItem("progress17")) && (storageAvailable("localStorage") && localStorage.setItem("progress17", level17),
    this.Level17.enabled = !0,
    this.level17.enabled = !1,
    this.level18b.enabled = !1,
    this.level18a.enabled = !0),
    (!0 === level18 || localStorage.getItem("progress18")) && (storageAvailable("localStorage") && localStorage.setItem("progress18", level18),
    this.Level18.enabled = !0,
    this.level18.enabled = !1,
    this.level19b.enabled = !1,
    this.level19a.enabled = !0),
    (!0 === level19 || localStorage.getItem("progress19")) && (storageAvailable("localStorage") && localStorage.setItem("progress19", level19),
    this.Level19.enabled = !0,
    this.level19.enabled = !1,
    this.level20b.enabled = !1,
    this.level20a.enabled = !0),
    (!0 === level20 || localStorage.getItem("progress20")) && (storageAvailable("localStorage") && localStorage.setItem("progress20", level20),
    this.Level20.enabled = !0,
    this.level20.enabled = !1,
    this.level21b.enabled = !1,
    this.level21a.enabled = !0),
    (!0 === level21 || localStorage.getItem("progress21")) && (storageAvailable("localStorage") && localStorage.setItem("progress21", level21),
    this.Level21.enabled = !0,
    this.level21.enabled = !1,
    this.level22b.enabled = !1,
    this.level22a.enabled = !0),
    (!0 === level22 || localStorage.getItem("progress22")) && (storageAvailable("localStorage") && localStorage.setItem("progress22", level22),
    this.Level22.enabled = !0,
    this.level22.enabled = !1,
    this.level23b.enabled = !1,
    this.level23a.enabled = !0),
    (!0 === level23 || localStorage.getItem("progress23")) && (storageAvailable("localStorage") && localStorage.setItem("progress23", level23),
    this.Level23.enabled = !0,
    this.level23.enabled = !1,
    this.level24b.enabled = !1,
    this.level24a.enabled = !0),
    (!0 === level24 || localStorage.getItem("progress24")) && (storageAvailable("localStorage") && localStorage.setItem("progress24", level24),
    this.Level24.enabled = !0,
    this.level24.enabled = !1,
    this.level25b.enabled = !1,
    this.level25a.enabled = !0),
    (!0 === level25 || localStorage.getItem("progress25")) && (storageAvailable("localStorage") && localStorage.setItem("progress25", level25),
    this.Level25.enabled = !0,
    this.level25.enabled = !1,
    this.level26b.enabled = !1,
    this.level26a.enabled = !0),
    (!0 === level26 || localStorage.getItem("progress26")) && (storageAvailable("localStorage") && localStorage.setItem("progress26", level26),
    this.Level26.enabled = !0,
    this.level26.enabled = !1,
    this.level27b.enabled = !1,
    this.level27a.enabled = !0),
    (!0 === level27 || localStorage.getItem("progress27")) && (storageAvailable("localStorage") && localStorage.setItem("progress27", level27),
    this.Level27.enabled = !0,
    this.level27.enabled = !1,
    this.level28b.enabled = !1,
    this.level28a.enabled = !0),
    (!0 === level28 || localStorage.getItem("progress28")) && (storageAvailable("localStorage") && localStorage.setItem("progress28", level28),
    this.Level28.enabled = !0,
    this.level28.enabled = !1,
    this.level29b.enabled = !1,
    this.level29a.enabled = !0),
    (!0 === level29 || localStorage.getItem("progress29")) && (storageAvailable("localStorage") && localStorage.setItem("progress29", level29),
    this.Level29.enabled = !0,
    this.level29.enabled = !1,
    this.level30b.enabled = !1,
    this.level30a.enabled = !0),
    (!0 === level30 || localStorage.getItem("progress30")) && (storageAvailable("localStorage") && localStorage.setItem("progress30", level30),
    this.Level30.enabled = !0,
    this.level30.enabled = !1,
    this.level31b.enabled = !1,
    this.level31a.enabled = !0),
    (!0 === level31 || localStorage.getItem("progress31")) && (storageAvailable("localStorage") && localStorage.setItem("progress31", level31),
    this.Level31.enabled = !0,
    this.level31.enabled = !1,
    this.level32b.enabled = !1,
    this.level32a.enabled = !0),
    (!0 === level32 || localStorage.getItem("progress32")) && (storageAvailable("localStorage") && localStorage.setItem("progress32", level32),
    this.Level32.enabled = !0,
    this.level32.enabled = !1,
    this.level33b.enabled = !1,
    this.level33a.enabled = !0),
    (!0 === level33 || localStorage.getItem("progress33")) && (storageAvailable("localStorage") && localStorage.setItem("progress33", level33),
    this.Level33.enabled = !0,
    this.level33.enabled = !1,
    this.level34b.enabled = !1,
    this.level34a.enabled = !0),
    (!0 === level34 || localStorage.getItem("progress34")) && (storageAvailable("localStorage") && localStorage.setItem("progress34", level34),
    this.Level34.enabled = !0,
    this.level34.enabled = !1,
    this.level35b.enabled = !1,
    this.level35a.enabled = !0),
    (!0 === level35 || localStorage.getItem("progress35")) && (storageAvailable("localStorage") && localStorage.setItem("progress35", level35),
    this.Level35.enabled = !0,
    this.level35.enabled = !1,
    this.level36b.enabled = !1,
    this.level36a.enabled = !0),
    (!0 === level36 || localStorage.getItem("progress36")) && (storageAvailable("localStorage") && localStorage.setItem("progress36", level36),
    this.Level36.enabled = !0,
    this.level36.enabled = !1,
    this.level37b.enabled = !1,
    this.level37a.enabled = !0),
    (!0 === level37 || localStorage.getItem("progress37")) && (storageAvailable("localStorage") && localStorage.setItem("progress37", level37),
    this.Level37.enabled = !0,
    this.level37.enabled = !1,
    this.level38b.enabled = !1,
    this.level38a.enabled = !0),
    (!0 === level38 || localStorage.getItem("progress38")) && (storageAvailable("localStorage") && localStorage.setItem("progress38", level38),
    this.Level38.enabled = !0,
    this.level38.enabled = !1,
    this.level39b.enabled = !1,
    this.level39a.enabled = !0),
    (!0 === level39 || localStorage.getItem("progress39")) && (storageAvailable("localStorage") && localStorage.setItem("progress39", level39),
    this.Level39.enabled = !0,
    this.level39.enabled = !1,
    this.level40b.enabled = !1,
    this.level40a.enabled = !0),
    (!0 === level40 || localStorage.getItem("progress40")) && (storageAvailable("localStorage") && localStorage.setItem("progress40", level40),
    this.Level40.enabled = !0,
    this.level40.enabled = !1,
    this.level41b.enabled = !1,
    this.level41a.enabled = !0),
    (!0 === level41 || localStorage.getItem("progress41")) && (storageAvailable("localStorage") && localStorage.setItem("progress41", level41),
    this.Level41.enabled = !0,
    this.level41.enabled = !1,
    this.level42b.enabled = !1,
    this.level42a.enabled = !0),
    (!0 === level42 || localStorage.getItem("progress42")) && (storageAvailable("localStorage") && localStorage.setItem("progress42", level42),
    this.Level42.enabled = !0,
    this.level42.enabled = !1,
    this.level43b.enabled = !1,
    this.level43a.enabled = !0),
    (!0 === level43 || localStorage.getItem("progress43")) && (storageAvailable("localStorage") && localStorage.setItem("progress43", level43),
    this.Level43.enabled = !0,
    this.level43.enabled = !1,
    this.level44b.enabled = !1,
    this.level44a.enabled = !0),
    (!0 === level44 || localStorage.getItem("progress44")) && (storageAvailable("localStorage") && localStorage.setItem("progress44", level44),
    this.Level44.enabled = !0,
    this.level44.enabled = !1,
    this.level45b.enabled = !1,
    this.level45a.enabled = !0),
    (!0 === level45 || localStorage.getItem("progress45")) && (storageAvailable("localStorage") && localStorage.setItem("progress45", level45),
    this.Level45.enabled = !0,
    this.level45.enabled = !1),
    (!0 === level46 || localStorage.getItem("progress46")) && (storageAvailable("localStorage") && localStorage.setItem("progress46", level46),
    this.Level46.enabled = !0),
    (!0 === level47 || localStorage.getItem("progress47")) && (storageAvailable("localStorage") && localStorage.setItem("progress47", level47),
    this.Level47.enabled = !0),
    (!0 === level48 || localStorage.getItem("progress48")) && (storageAvailable("localStorage") && localStorage.setItem("progress48", level48),
    this.Level48.enabled = !0),
    this.progress1 = localStorage.getItem("progress1"),
    this.progress2 = localStorage.getItem("progress2"),
    this.progress3 = localStorage.getItem("progress3"),
    this.progress4 = localStorage.getItem("progress4"),
    this.progress5 = localStorage.getItem("progress5"),
    this.progress6 = localStorage.getItem("progress6"),
    this.progress7 = localStorage.getItem("progress7"),
    this.progress8 = localStorage.getItem("progress8"),
    this.progress9 = localStorage.getItem("progress9"),
    this.progress10 = localStorage.getItem("progress10"),
    this.progress11 = localStorage.getItem("progress11"),
    this.progress12 = localStorage.getItem("progress12"),
    this.progress13 = localStorage.getItem("progress13"),
    this.progress14 = localStorage.getItem("progress14"),
    this.progress15 = localStorage.getItem("progress15"),
    this.progress16 = localStorage.getItem("progress16"),
    this.progress17 = localStorage.getItem("progress17"),
    this.progress18 = localStorage.getItem("progress18"),
    this.progress19 = localStorage.getItem("progress19"),
    this.progress20 = localStorage.getItem("progress20"),
    this.progress21 = localStorage.getItem("progress21"),
    this.progress22 = localStorage.getItem("progress22"),
    this.progress23 = localStorage.getItem("progress23"),
    this.progress24 = localStorage.getItem("progress24"),
    this.progress25 = localStorage.getItem("progress25"),
    this.progress26 = localStorage.getItem("progress26"),
    this.progress27 = localStorage.getItem("progress27"),
    this.progress28 = localStorage.getItem("progress28"),
    this.progress29 = localStorage.getItem("progress29"),
    this.progress30 = localStorage.getItem("progress30"),
    this.progress31 = localStorage.getItem("progress31"),
    this.progress32 = localStorage.getItem("progress32"),
    this.progress33 = localStorage.getItem("progress33"),
    this.progress34 = localStorage.getItem("progress34"),
    this.progress35 = localStorage.getItem("progress35"),
    this.progress36 = localStorage.getItem("progress36"),
    this.progress37 = localStorage.getItem("progress37"),
    this.progress38 = localStorage.getItem("progress38"),
    this.progress39 = localStorage.getItem("progress39"),
    this.progress40 = localStorage.getItem("progress40"),
    this.progress41 = localStorage.getItem("progress41"),
    this.progress42 = localStorage.getItem("progress42"),
    this.progress43 = localStorage.getItem("progress43"),
    this.progress44 = localStorage.getItem("progress44"),
    this.progress45 = localStorage.getItem("progress45"),
    this.progress46 = localStorage.getItem("progress46"),
    this.progress47 = localStorage.getItem("progress47"),
    this.progress48 = localStorage.getItem("progress48")
}
,
window.onbeforeunload = function() {
    (!0 === level1 || localStorage.getItem("progress1")) && storageAvailable("localStorage") && localStorage.setItem("progress1", level1),
    (!0 === level2 || localStorage.getItem("progress2")) && storageAvailable("localStorage") && localStorage.setItem("progress2", level2),
    (!0 === level3 || localStorage.getItem("progress3")) && storageAvailable("localStorage") && localStorage.setItem("progress3", level3),
    (!0 === level4 || localStorage.getItem("progress4")) && storageAvailable("localStorage") && localStorage.setItem("progress4", level4),
    (!0 === level5 || localStorage.getItem("progress5")) && storageAvailable("localStorage") && localStorage.setItem("progress5", level5),
    (!0 === level6 || localStorage.getItem("progress6")) && storageAvailable("localStorage") && localStorage.setItem("progress6", level6),
    (!0 === level7 || localStorage.getItem("progress7")) && storageAvailable("localStorage") && localStorage.setItem("progress7", level7),
    (!0 === level8 || localStorage.getItem("progress8")) && storageAvailable("localStorage") && localStorage.setItem("progress8", level8),
    (!0 === level9 || localStorage.getItem("progress9")) && storageAvailable("localStorage") && localStorage.setItem("progress9", level9),
    (!0 === level10 || localStorage.getItem("progress10")) && storageAvailable("localStorage") && localStorage.setItem("progress10", level10),
    (!0 === level11 || localStorage.getItem("progress11")) && storageAvailable("localStorage") && localStorage.setItem("progress11", level11),
    (!0 === level12 || localStorage.getItem("progress12")) && storageAvailable("localStorage") && localStorage.setItem("progress12", level12),
    (!0 === level13 || localStorage.getItem("progress13")) && storageAvailable("localStorage") && localStorage.setItem("progress13", level13),
    (!0 === level14 || localStorage.getItem("progress14")) && storageAvailable("localStorage") && localStorage.setItem("progress14", level14),
    (!0 === level15 || localStorage.getItem("progress15")) && storageAvailable("localStorage") && localStorage.setItem("progress15", level15),
    (!0 === level16 || localStorage.getItem("progress16")) && storageAvailable("localStorage") && localStorage.setItem("progress16", level16),
    (!0 === level17 || localStorage.getItem("progress17")) && storageAvailable("localStorage") && localStorage.setItem("progress17", level17),
    (!0 === level18 || localStorage.getItem("progress18")) && storageAvailable("localStorage") && localStorage.setItem("progress18", level18),
    (!0 === level19 || localStorage.getItem("progress19")) && storageAvailable("localStorage") && localStorage.setItem("progress19", level19),
    (!0 === level20 || localStorage.getItem("progress20")) && storageAvailable("localStorage") && localStorage.setItem("progress20", level20),
    (!0 === level21 || localStorage.getItem("progress21")) && storageAvailable("localStorage") && localStorage.setItem("progress21", level21),
    (!0 === level22 || localStorage.getItem("progress22")) && storageAvailable("localStorage") && localStorage.setItem("progress22", level22),
    (!0 === level23 || localStorage.getItem("progress23")) && storageAvailable("localStorage") && localStorage.setItem("progress23", level23),
    (!0 === level24 || localStorage.getItem("progress24")) && storageAvailable("localStorage") && localStorage.setItem("progress24", level24),
    (!0 === level25 || localStorage.getItem("progress25")) && storageAvailable("localStorage") && localStorage.setItem("progress25", level25),
    (!0 === level26 || localStorage.getItem("progress26")) && storageAvailable("localStorage") && localStorage.setItem("progress26", level26),
    (!0 === level27 || localStorage.getItem("progress27")) && storageAvailable("localStorage") && localStorage.setItem("progress27", level27),
    (!0 === level28 || localStorage.getItem("progress28")) && storageAvailable("localStorage") && localStorage.setItem("progress28", level28),
    (!0 === level29 || localStorage.getItem("progress29")) && storageAvailable("localStorage") && localStorage.setItem("progress29", level29),
    (!0 === level30 || localStorage.getItem("progress30")) && storageAvailable("localStorage") && localStorage.setItem("progress30", level30),
    (!0 === level31 || localStorage.getItem("progress31")) && storageAvailable("localStorage") && localStorage.setItem("progress31", level31),
    (!0 === level32 || localStorage.getItem("progress32")) && storageAvailable("localStorage") && localStorage.setItem("progress32", level32),
    (!0 === level33 || localStorage.getItem("progress33")) && storageAvailable("localStorage") && localStorage.setItem("progress33", level33),
    (!0 === level34 || localStorage.getItem("progress34")) && storageAvailable("localStorage") && localStorage.setItem("progress34", level34),
    (!0 === level35 || localStorage.getItem("progress35")) && storageAvailable("localStorage") && localStorage.setItem("progress35", level35),
    (!0 === level36 || localStorage.getItem("progress36")) && storageAvailable("localStorage") && localStorage.setItem("progress36", level36),
    (!0 === level37 || localStorage.getItem("progress37")) && storageAvailable("localStorage") && localStorage.setItem("progress37", level37),
    (!0 === level38 || localStorage.getItem("progress38")) && storageAvailable("localStorage") && localStorage.setItem("progress38", level38),
    (!0 === level39 || localStorage.getItem("progress39")) && storageAvailable("localStorage") && localStorage.setItem("progress39", level39),
    (!0 === level40 || localStorage.getItem("progress40")) && storageAvailable("localStorage") && localStorage.setItem("progress40", level40),
    (!0 === level41 || localStorage.getItem("progress41")) && storageAvailable("localStorage") && localStorage.setItem("progress41", level41),
    (!0 === level42 || localStorage.getItem("progress42")) && storageAvailable("localStorage") && localStorage.setItem("progress42", level42),
    (!0 === level43 || localStorage.getItem("progress43")) && storageAvailable("localStorage") && localStorage.setItem("progress43", level43),
    (!0 === level44 || localStorage.getItem("progress44")) && storageAvailable("localStorage") && localStorage.setItem("progress44", level44),
    (!0 === level45 || localStorage.getItem("progress45")) && storageAvailable("localStorage") && localStorage.setItem("progress45", level45),
    (!0 === level46 || localStorage.getItem("progress46")) && storageAvailable("localStorage") && localStorage.setItem("progress46", level46),
    (!0 === level47 || localStorage.getItem("progress47")) && storageAvailable("localStorage") && localStorage.setItem("progress47", level47),
    (!0 === level48 || localStorage.getItem("progress48")) && storageAvailable("localStorage") && localStorage.setItem("progress48", level48),
    this.progress1 = localStorage.getItem("progress1"),
    this.progress2 = localStorage.getItem("progress2"),
    this.progress3 = localStorage.getItem("progress3"),
    this.progress4 = localStorage.getItem("progress4"),
    this.progress5 = localStorage.getItem("progress5"),
    this.progress6 = localStorage.getItem("progress6"),
    this.progress7 = localStorage.getItem("progress7"),
    this.progress8 = localStorage.getItem("progress8"),
    this.progress9 = localStorage.getItem("progress9"),
    this.progress10 = localStorage.getItem("progress10"),
    this.progress11 = localStorage.getItem("progress11"),
    this.progress12 = localStorage.getItem("progress12"),
    this.progress13 = localStorage.getItem("progress13"),
    this.progress14 = localStorage.getItem("progress14"),
    this.progress15 = localStorage.getItem("progress15"),
    this.progress16 = localStorage.getItem("progress16"),
    this.progress17 = localStorage.getItem("progress17"),
    this.progress18 = localStorage.getItem("progress18"),
    this.progress19 = localStorage.getItem("progress19"),
    this.progress20 = localStorage.getItem("progress20"),
    this.progress21 = localStorage.getItem("progress21"),
    this.progress22 = localStorage.getItem("progress22"),
    this.progress23 = localStorage.getItem("progress23"),
    this.progress24 = localStorage.getItem("progress24"),
    this.progress25 = localStorage.getItem("progress25"),
    this.progress26 = localStorage.getItem("progress26"),
    this.progress27 = localStorage.getItem("progress27"),
    this.progress28 = localStorage.getItem("progress28"),
    this.progress29 = localStorage.getItem("progress29"),
    this.progress30 = localStorage.getItem("progress30"),
    this.progress31 = localStorage.getItem("progress31"),
    this.progress32 = localStorage.getItem("progress32"),
    this.progress33 = localStorage.getItem("progress33"),
    this.progress34 = localStorage.getItem("progress34"),
    this.progress35 = localStorage.getItem("progress35"),
    this.progress36 = localStorage.getItem("progress36"),
    this.progress37 = localStorage.getItem("progress37"),
    this.progress38 = localStorage.getItem("progress38"),
    this.progress39 = localStorage.getItem("progress39"),
    this.progress40 = localStorage.getItem("progress40"),
    this.progress41 = localStorage.getItem("progress41"),
    this.progress42 = localStorage.getItem("progress42"),
    this.progress43 = localStorage.getItem("progress43"),
    this.progress44 = localStorage.getItem("progress44"),
    this.progress45 = localStorage.getItem("progress45"),
    this.progress46 = localStorage.getItem("progress46"),
    this.progress47 = localStorage.getItem("progress47"),
    this.progress48 = localStorage.getItem("progress48")
}
,
isApple && (window.onpagehide = function() {
    (!0 === level1 || localStorage.getItem("progress1")) && storageAvailable("localStorage") && localStorage.setItem("progress1", level1),
    (!0 === level2 || localStorage.getItem("progress2")) && storageAvailable("localStorage") && localStorage.setItem("progress2", level2),
    (!0 === level3 || localStorage.getItem("progress3")) && storageAvailable("localStorage") && localStorage.setItem("progress3", level3),
    (!0 === level4 || localStorage.getItem("progress4")) && storageAvailable("localStorage") && localStorage.setItem("progress4", level4),
    (!0 === level5 || localStorage.getItem("progress5")) && storageAvailable("localStorage") && localStorage.setItem("progress5", level5),
    (!0 === level6 || localStorage.getItem("progress6")) && storageAvailable("localStorage") && localStorage.setItem("progress6", level6),
    (!0 === level7 || localStorage.getItem("progress7")) && storageAvailable("localStorage") && localStorage.setItem("progress7", level7),
    (!0 === level8 || localStorage.getItem("progress8")) && storageAvailable("localStorage") && localStorage.setItem("progress8", level8),
    (!0 === level9 || localStorage.getItem("progress9")) && storageAvailable("localStorage") && localStorage.setItem("progress9", level9),
    (!0 === level10 || localStorage.getItem("progress10")) && storageAvailable("localStorage") && localStorage.setItem("progress10", level10),
    (!0 === level11 || localStorage.getItem("progress11")) && storageAvailable("localStorage") && localStorage.setItem("progress11", level11),
    (!0 === level12 || localStorage.getItem("progress12")) && storageAvailable("localStorage") && localStorage.setItem("progress12", level12),
    (!0 === level13 || localStorage.getItem("progress13")) && storageAvailable("localStorage") && localStorage.setItem("progress13", level13),
    (!0 === level14 || localStorage.getItem("progress14")) && storageAvailable("localStorage") && localStorage.setItem("progress14", level14),
    (!0 === level15 || localStorage.getItem("progress15")) && storageAvailable("localStorage") && localStorage.setItem("progress15", level15),
    (!0 === level16 || localStorage.getItem("progress16")) && storageAvailable("localStorage") && localStorage.setItem("progress16", level16),
    (!0 === level17 || localStorage.getItem("progress17")) && storageAvailable("localStorage") && localStorage.setItem("progress17", level17),
    (!0 === level18 || localStorage.getItem("progress18")) && storageAvailable("localStorage") && localStorage.setItem("progress18", level18),
    (!0 === level19 || localStorage.getItem("progress19")) && storageAvailable("localStorage") && localStorage.setItem("progress19", level19),
    (!0 === level20 || localStorage.getItem("progress20")) && storageAvailable("localStorage") && localStorage.setItem("progress20", level20),
    (!0 === level21 || localStorage.getItem("progress21")) && storageAvailable("localStorage") && localStorage.setItem("progress21", level21),
    (!0 === level22 || localStorage.getItem("progress22")) && storageAvailable("localStorage") && localStorage.setItem("progress22", level22),
    (!0 === level23 || localStorage.getItem("progress23")) && storageAvailable("localStorage") && localStorage.setItem("progress23", level23),
    (!0 === level24 || localStorage.getItem("progress24")) && storageAvailable("localStorage") && localStorage.setItem("progress24", level24),
    (!0 === level25 || localStorage.getItem("progress25")) && storageAvailable("localStorage") && localStorage.setItem("progress25", level25),
    (!0 === level26 || localStorage.getItem("progress26")) && storageAvailable("localStorage") && localStorage.setItem("progress26", level26),
    (!0 === level27 || localStorage.getItem("progress27")) && storageAvailable("localStorage") && localStorage.setItem("progress27", level27),
    (!0 === level28 || localStorage.getItem("progress28")) && storageAvailable("localStorage") && localStorage.setItem("progress28", level28),
    (!0 === level29 || localStorage.getItem("progress29")) && storageAvailable("localStorage") && localStorage.setItem("progress29", level29),
    (!0 === level30 || localStorage.getItem("progress30")) && storageAvailable("localStorage") && localStorage.setItem("progress30", level30),
    (!0 === level31 || localStorage.getItem("progress31")) && storageAvailable("localStorage") && localStorage.setItem("progress31", level31),
    (!0 === level32 || localStorage.getItem("progress32")) && storageAvailable("localStorage") && localStorage.setItem("progress32", level32),
    (!0 === level33 || localStorage.getItem("progress33")) && storageAvailable("localStorage") && localStorage.setItem("progress33", level33),
    (!0 === level34 || localStorage.getItem("progress34")) && storageAvailable("localStorage") && localStorage.setItem("progress34", level34),
    (!0 === level35 || localStorage.getItem("progress35")) && storageAvailable("localStorage") && localStorage.setItem("progress35", level35),
    (!0 === level36 || localStorage.getItem("progress36")) && storageAvailable("localStorage") && localStorage.setItem("progress36", level36),
    (!0 === level37 || localStorage.getItem("progress37")) && storageAvailable("localStorage") && localStorage.setItem("progress37", level37),
    (!0 === level38 || localStorage.getItem("progress38")) && storageAvailable("localStorage") && localStorage.setItem("progress38", level38),
    (!0 === level39 || localStorage.getItem("progress39")) && storageAvailable("localStorage") && localStorage.setItem("progress39", level39),
    (!0 === level40 || localStorage.getItem("progress40")) && storageAvailable("localStorage") && localStorage.setItem("progress40", level40),
    this.progress1 = localStorage.getItem("progress1"),
    this.progress2 = localStorage.getItem("progress2"),
    this.progress3 = localStorage.getItem("progress3"),
    this.progress4 = localStorage.getItem("progress4"),
    this.progress5 = localStorage.getItem("progress5"),
    this.progress6 = localStorage.getItem("progress6"),
    this.progress7 = localStorage.getItem("progress7"),
    this.progress8 = localStorage.getItem("progress8"),
    this.progress9 = localStorage.getItem("progress9"),
    this.progress10 = localStorage.getItem("progress10"),
    this.progress11 = localStorage.getItem("progress11"),
    this.progress12 = localStorage.getItem("progress12"),
    this.progress13 = localStorage.getItem("progress13"),
    this.progress14 = localStorage.getItem("progress14"),
    this.progress15 = localStorage.getItem("progress15"),
    this.progress16 = localStorage.getItem("progress16"),
    this.progress17 = localStorage.getItem("progress17"),
    this.progress18 = localStorage.getItem("progress18"),
    this.progress19 = localStorage.getItem("progress19"),
    this.progress20 = localStorage.getItem("progress20"),
    this.progress21 = localStorage.getItem("progress21"),
    this.progress22 = localStorage.getItem("progress22"),
    this.progress23 = localStorage.getItem("progress23"),
    this.progress24 = localStorage.getItem("progress24"),
    this.progress25 = localStorage.getItem("progress25"),
    this.progress26 = localStorage.getItem("progress26"),
    this.progress27 = localStorage.getItem("progress27"),
    this.progress28 = localStorage.getItem("progress28"),
    this.progress29 = localStorage.getItem("progress29"),
    this.progress30 = localStorage.getItem("progress30"),
    this.progress31 = localStorage.getItem("progress31"),
    this.progress32 = localStorage.getItem("progress32"),
    this.progress33 = localStorage.getItem("progress33"),
    this.progress34 = localStorage.getItem("progress34"),
    this.progress35 = localStorage.getItem("progress35"),
    this.progress36 = localStorage.getItem("progress36"),
    this.progress37 = localStorage.getItem("progress37"),
    this.progress38 = localStorage.getItem("progress38"),
    this.progress39 = localStorage.getItem("progress39"),
    this.progress40 = localStorage.getItem("progress40")
}
);
const ChangeScenePlay = pc.createScript("changeScenePlay");
ChangeScenePlay.prototype.initialize = function() {
    this.entity.button.once("click", this.onClick, this)
}
,
ChangeScenePlay.prototype.onClick = function() {
    pause = !1,
    this.app.mouse.enablePointerLock(),
    localStorage.getItem("progress1") && null === localStorage.getItem("progress2") ? loadScene("2", {
        hierarchy: !0,
        settings: !0
    }) : localStorage.getItem("progress2") && null === localStorage.getItem("progress3") ? loadScene("3", {
        hierarchy: !0,
        settings: !0
    }) : localStorage.getItem("progress3") && null === localStorage.getItem("progress4") ? loadScene("4", {
        hierarchy: !0,
        settings: !0
    }) : localStorage.getItem("progress4") && null === localStorage.getItem("progress5") ? loadScene("5", {
        hierarchy: !0,
        settings: !0
    }) : localStorage.getItem("progress5") && null === localStorage.getItem("progress6") ? loadScene("6", {
        hierarchy: !0,
        settings: !0
    }) : localStorage.getItem("progress6") && null === localStorage.getItem("progress7") ? loadScene("7", {
        hierarchy: !0,
        settings: !0
    }) : localStorage.getItem("progress7") && null === localStorage.getItem("progress8") ? loadScene("8", {
        hierarchy: !0,
        settings: !0
    }) : localStorage.getItem("progress8") && null === localStorage.getItem("progress9") ? loadScene("9", {
        hierarchy: !0,
        settings: !0
    }) : localStorage.getItem("progress9") && null === localStorage.getItem("progress10") ? loadScene("10", {
        hierarchy: !0,
        settings: !0
    }) : localStorage.getItem("progress10") && null === localStorage.getItem("progress11") ? loadScene("11", {
        hierarchy: !0,
        settings: !0
    }) : localStorage.getItem("progress11") && null === localStorage.getItem("progress12") ? loadScene("12", {
        hierarchy: !0,
        settings: !0
    }) : localStorage.getItem("progress12") && null === localStorage.getItem("progress13") ? loadScene("13", {
        hierarchy: !0,
        settings: !0
    }) : localStorage.getItem("progress13") && null === localStorage.getItem("progress14") ? loadScene("14", {
        hierarchy: !0,
        settings: !0
    }) : localStorage.getItem("progress14") && null === localStorage.getItem("progress15") ? loadScene("15", {
        hierarchy: !0,
        settings: !0
    }) : localStorage.getItem("progress15") && null === localStorage.getItem("progress16") ? loadScene("16", {
        hierarchy: !0,
        settings: !0
    }) : localStorage.getItem("progress16") && null === localStorage.getItem("progress17") ? loadScene("17", {
        hierarchy: !0,
        settings: !0
    }) : localStorage.getItem("progress17") && null === localStorage.getItem("progress18") ? loadScene("18", {
        hierarchy: !0,
        settings: !0
    }) : localStorage.getItem("progress18") && null === localStorage.getItem("progress19") ? loadScene("19", {
        hierarchy: !0,
        settings: !0
    }) : localStorage.getItem("progress19") && null === localStorage.getItem("progress20") ? loadScene("20", {
        hierarchy: !0,
        settings: !0
    }) : localStorage.getItem("progress20") && null === localStorage.getItem("progress21") ? loadScene("21", {
        hierarchy: !0,
        settings: !0
    }) : localStorage.getItem("progress21") && null === localStorage.getItem("progress22") ? loadScene("22", {
        hierarchy: !0,
        settings: !0
    }) : localStorage.getItem("progress22") && null === localStorage.getItem("progress23") ? loadScene("23", {
        hierarchy: !0,
        settings: !0
    }) : localStorage.getItem("progress23") && null === localStorage.getItem("progress24") ? loadScene("24", {
        hierarchy: !0,
        settings: !0
    }) : localStorage.getItem("progress24") && null === localStorage.getItem("progress25") ? loadScene("25", {
        hierarchy: !0,
        settings: !0
    }) : localStorage.getItem("progress25") && null === localStorage.getItem("progress26") ? loadScene("26", {
        hierarchy: !0,
        settings: !0
    }) : localStorage.getItem("progress26") && null === localStorage.getItem("progress27") ? loadScene("27", {
        hierarchy: !0,
        settings: !0
    }) : localStorage.getItem("progress27") && null === localStorage.getItem("progress28") ? loadScene("28", {
        hierarchy: !0,
        settings: !0
    }) : localStorage.getItem("progress28") && null === localStorage.getItem("progress29") ? loadScene("29", {
        hierarchy: !0,
        settings: !0
    }) : localStorage.getItem("progress29") && null === localStorage.getItem("progress30") ? loadScene("30", {
        hierarchy: !0,
        settings: !0
    }) : localStorage.getItem("progress30") && null === localStorage.getItem("progress31") ? loadScene("31", {
        hierarchy: !0,
        settings: !0
    }) : localStorage.getItem("progress31") && null === localStorage.getItem("progress32") ? loadScene("32", {
        hierarchy: !0,
        settings: !0
    }) : localStorage.getItem("progress32") && null === localStorage.getItem("progress33") ? loadScene("33", {
        hierarchy: !0,
        settings: !0
    }) : localStorage.getItem("progress33") && null === localStorage.getItem("progress34") ? loadScene("34", {
        hierarchy: !0,
        settings: !0
    }) : localStorage.getItem("progress34") && null === localStorage.getItem("progress35") ? loadScene("35", {
        hierarchy: !0,
        settings: !0
    }) : localStorage.getItem("progress35") && null === localStorage.getItem("progress36") ? loadScene("36", {
        hierarchy: !0,
        settings: !0
    }) : localStorage.getItem("progress36") && null === localStorage.getItem("progress37") ? loadScene("37", {
        hierarchy: !0,
        settings: !0
    }) : localStorage.getItem("progress37") && null === localStorage.getItem("progress38") ? loadScene("38", {
        hierarchy: !0,
        settings: !0
    }) : localStorage.getItem("progress38") && null === localStorage.getItem("progress39") ? loadScene("39", {
        hierarchy: !0,
        settings: !0
    }) : localStorage.getItem("progress39") && null === localStorage.getItem("progress40") ? loadScene("40", {
        hierarchy: !0,
        settings: !0
    }) : localStorage.getItem("progress40") && null === localStorage.getItem("progress41") ? loadScene("41", {
        hierarchy: !0,
        settings: !0
    }) : localStorage.getItem("progress41") && null === localStorage.getItem("progress42") ? loadScene("42", {
        hierarchy: !0,
        settings: !0
    }) : localStorage.getItem("progress42") && null === localStorage.getItem("progress43") ? loadScene("43", {
        hierarchy: !0,
        settings: !0
    }) : localStorage.getItem("progress43") && null === localStorage.getItem("progress44") ? loadScene("44", {
        hierarchy: !0,
        settings: !0
    }) : localStorage.getItem("progress44") && null === localStorage.getItem("progress45") || localStorage.getItem("progress45") ? loadScene("BOSS", {
        hierarchy: !0,
        settings: !0
    }) : loadScene("1", {
        hierarchy: !0,
        settings: !0
    })
}
;
const Rotater = pc.createScript("rotater");
Rotater.prototype.update = function(t) {
    let e = 0;
    e = isMobile ? 90 : 100,
    this.entity.rotateLocal(0, e * t, 0)
}
;
const Rotater2 = pc.createScript("rotater2");
Rotater2.prototype.update = function(t) {
    let e = 0;
    e = isMobile ? 90 : 100,
    this.entity.rotateLocal(0, -e * t, 0)
}
;
const Opacity = pc.createScript("opacity");
Opacity.prototype.initialize = function() {
    var t = this.entity.render.meshInstances[0].material;
    t.opacity = .6,
    t.blendType = pc.BLEND_NORMAL,
    t.update()
}
;
const FadeOut = pc.createScript("fadeOut");
FadeOut.attributes.add("sceneName", {
    type: "string"
}),
FadeOut.attributes.add("button", {
    type: "entity"
}),
FadeOut.prototype.initialize = function() {
    this.value = -1,
    this.credits = this.app.root.findByName("Credits"),
    this.player = this.app.root.findByName("Player"),
    "false" === localStorage.getItem("sound") && (this.player.sound.slot(6).isPlaying || this.player.sound.play(6)),
    this.button.button.once("click", this.onClick, this)
}
,
FadeOut.prototype.update = function(t) {
    this.value < 1 && (this.value += .35 * t,
    this.entity.element.opacity = this.value),
    this.value > 1 && (this.credits.enabled = !0,
    pause = !0,
    this.app.mouse.disablePointerLock())
}
,
FadeOut.prototype.onClick = function() {
    loadScene(this.sceneName, {
        hierarchy: !0,
        settings: !0
    })
}
;
const ChangeSceneOnFinal = pc.createScript("changeSceneOnFinal");
ChangeSceneOnFinal.attributes.add("sceneName", {
    type: "string"
}),
ChangeSceneOnFinal.attributes.add("Level", {
    type: "string"
});
let level45 = !1
  , ach1 = !1
  , ach3 = !1;
ChangeSceneOnFinal.prototype.initialize = function() {
    this.entity.collision.on("triggerenter", this.onTriggerEnter, this),
    this.player = this.app.root.findByName("Player"),
    this.camera = this.app.root.findByName("Camera"),
    this.finish = this.app.root.findByName("Finish"),
    this.time = this.app.root.findByName("Time"),
    this.player.sound.slot(7).isPlaying || this.player.sound.play(7)
}
,
ChangeSceneOnFinal.prototype.onTriggerEnter = function(e) {
    "Player" == e.collision.entity.name && (spodruns && (this.time.script.time.stopStopwatch(),
    this.time.element.color = pc.Color.GREEN),
    this.player.sound.slot(7).stop(),
    "Level45" === this.Level && (level45 = !0,
    spodruns && ((null === localStorage.getItem("1run") || localStorage.getItem("1run") > timeStr) && (localStorage.setItem("1run", timeStr),
    localStorage.setItem("times1", time)),
    time <= 9e4 && (ach3 = !0,
    localStorage.setItem("ach3", ach3))),
    ach1 = !0,
    localStorage.setItem("ach1", ach1)),
    this.player.sound.slot(6).isPlaying || this.player.sound.play(6),
    this.player.script.playerController.enabled = !1,
    this.camera.script.playerCamera.camOff(),
    this.player.collision.enabled = !1,
    this.player.script.pauseMenu.enabled = !1,
    isMobile && (this.camera.script.orbitCamera.enabled = !1,
    this.player.script.playerController2.enabled = !1),
    setTimeout(( () => {
        loadScene(this.sceneName, {
            hierarchy: !0,
            settings: !0
        }),
        this.spodruns && (this.time.script.time.resetStopwatch(),
        spodruns = !1)
    }
    ), 5e3))
}
;
const PlayerRespawn2 = pc.createScript("playerRespawn2");
PlayerRespawn2.prototype.initialize = function() {
    this.velocity = new pc.Vec3,
    this.respawn = this.app.root.findByName("Respawn1"),
    this.camera = this.app.root.findByName("Camera"),
    this.spawn = this.respawn.getPosition().clone(),
    this.entity.collision.on("triggerenter", this.onTriggerEnter, this)
}
,
PlayerRespawn2.prototype.onTriggerEnter = function(e) {
    "Player" == e.collision.entity.name && (e.rigidbody.teleport(this.spawn),
    e.rigidbody.linearVelocity = this.velocity.set(0, 0, 0),
    e.rigidbody.angularVelocity = new pc.Vec3(0,0,0),
    e.sound.slot(2).isPlaying || e.sound.play(2),
    this.camera.script.playerCamera.reset(),
    !0 === this.camera.script.orbitCamera.enabled && this.camera.script.orbitCamera.reset())
}
;
const TriggerBlue = pc.createScript("triggerBlue");
TriggerBlue.attributes.add("ui", {
    type: "entity"
}),
TriggerBlue.prototype.initialize = function() {
    this.blue = this.app.root.findByName("Blue"),
    this.blue2 = this.app.root.findByName("Blue2"),
    this.blue3 = this.app.root.findByName("Blue3"),
    this.blue4 = this.app.root.findByName("Blue4"),
    this.blue5 = this.app.root.findByName("Blue5"),
    this.blue6 = this.app.root.findByName("Blue6"),
    this.blue7 = this.app.root.findByName("Blue7"),
    this.blue8 = this.app.root.findByName("Blue8"),
    this.blue9 = this.app.root.findByName("Blue9"),
    this.blue10 = this.app.root.findByName("Blue10"),
    this.player = this.app.root.findByName("Player"),
    this.redLine = this.app.root.findByName("RedLine"),
    this.blueLine = this.app.root.findByName("BlueLine"),
    this.greenLine = this.app.root.findByName("GreenLine"),
    this.yellowLine = this.app.root.findByName("YellowLine"),
    this.water = this.app.root.findByName("Water"),
    this.waterFall1 = this.app.root.findByName("Waterfall1"),
    this.waterFall2 = this.app.root.findByName("Waterfall2"),
    this.blood = this.app.root.findByName("Blood"),
    this.bloodFall1 = this.app.root.findByName("Bloodfall1"),
    this.bloodFall2 = this.app.root.findByName("Bloodfall2"),
    this.finish = this.app.root.findByName("Finish"),
    this.finish2 = this.app.root.findByName("Finish2"),
    this.entity.collision.on("triggerenter", this.onTriggerEnter, this)
}
,
TriggerBlue.prototype.onTriggerEnter = function(e) {
    "Player" == e.collision.entity.name && (this.blueLine.enabled = !0,
    this.blue.destroy(),
    this.blue2.destroy(),
    this.blue3.destroy(),
    this.blue4.destroy(),
    this.blue5.destroy(),
    this.blue6.destroy(),
    this.blue7.destroy(),
    this.blue8.destroy(),
    this.blue9.destroy(),
    this.blue10.destroy(),
    "false" === localStorage.getItem("sound") && (this.player.sound.slot(4).isPlaying || this.player.sound.slot(4).play()),
    !0 === this.greenLine.enabled && !0 === this.yellowLine.enabled && !0 === this.blueLine.enabled && !0 === this.redLine.enabled && (this.finish.enabled = !0,
    this.water.enabled = !1,
    this.waterFall1.enabled = !1,
    this.waterFall2.enabled = !1,
    this.blood.enabled = !0,
    this.bloodFall1.enabled = !0,
    this.bloodFall2.enabled = !0),
    !0 === this.greenLine.enabled && !0 === this.yellowLine.enabled && !0 === this.blueLine.enabled && !0 === this.redLine.enabled && "true" === localStorage.getItem("ach1") && "true" === localStorage.getItem("secs") && "true" === localStorage.getItem("ach3") && "true" === localStorage.getItem("ach4") && "true" === localStorage.getItem("ach5") && "true" === localStorage.getItem("ach6") && (this.finish.enabled = !1,
    this.finish2.enabled = !0),
    this.ui.enabled = !0)
}
;
const TriggerYellow = pc.createScript("triggerYellow");
TriggerYellow.attributes.add("ui", {
    type: "entity"
}),
TriggerYellow.prototype.initialize = function() {
    this.yellow = this.app.root.findByName("Yellow"),
    this.yellow2 = this.app.root.findByName("Yellow2"),
    this.yellow3 = this.app.root.findByName("Yellow3"),
    this.yellow4 = this.app.root.findByName("Yellow4"),
    this.yellow5 = this.app.root.findByName("Yellow5"),
    this.yellow6 = this.app.root.findByName("Yellow6"),
    this.yellow7 = this.app.root.findByName("Yellow7"),
    this.yellow8 = this.app.root.findByName("Yellow8"),
    this.yellow9 = this.app.root.findByName("Yellow9"),
    this.yellow10 = this.app.root.findByName("Yellow10"),
    this.player = this.app.root.findByName("Player"),
    this.redLine = this.app.root.findByName("RedLine"),
    this.blueLine = this.app.root.findByName("BlueLine"),
    this.greenLine = this.app.root.findByName("GreenLine"),
    this.yellowLine = this.app.root.findByName("YellowLine"),
    this.water = this.app.root.findByName("Water"),
    this.waterFall1 = this.app.root.findByName("Waterfall1"),
    this.waterFall2 = this.app.root.findByName("Waterfall2"),
    this.blood = this.app.root.findByName("Blood"),
    this.bloodFall1 = this.app.root.findByName("Bloodfall1"),
    this.bloodFall2 = this.app.root.findByName("Bloodfall2"),
    this.finish = this.app.root.findByName("Finish"),
    this.finish2 = this.app.root.findByName("Finish2"),
    this.entity.collision.on("triggerenter", this.onTriggerEnter, this)
}
,
TriggerYellow.prototype.onTriggerEnter = function(e) {
    "Player" == e.collision.entity.name && (this.yellowLine.enabled = !0,
    this.yellow.destroy(),
    this.yellow2.destroy(),
    this.yellow3.destroy(),
    this.yellow4.destroy(),
    this.yellow5.destroy(),
    this.yellow6.destroy(),
    this.yellow7.destroy(),
    this.yellow8.destroy(),
    this.yellow9.destroy(),
    this.yellow10.destroy(),
    "false" === localStorage.getItem("sound") && (this.player.sound.slot(4).isPlaying || this.player.sound.slot(4).play()),
    !0 === this.greenLine.enabled && !0 === this.yellowLine.enabled && !0 === this.blueLine.enabled && !0 === this.redLine.enabled && (this.finish.enabled = !0,
    this.water.enabled = !1,
    this.waterFall1.enabled = !1,
    this.waterFall2.enabled = !1,
    this.blood.enabled = !0,
    this.bloodFall1.enabled = !0,
    this.bloodFall2.enabled = !0),
    !0 === this.greenLine.enabled && !0 === this.yellowLine.enabled && !0 === this.blueLine.enabled && !0 === this.redLine.enabled && "true" === localStorage.getItem("ach1") && "true" === localStorage.getItem("secs") && "true" === localStorage.getItem("ach3") && "true" === localStorage.getItem("ach4") && "true" === localStorage.getItem("ach5") && "true" === localStorage.getItem("ach6") && (this.finish.enabled = !1,
    this.finish2.enabled = !0),
    this.ui.enabled = !0)
}
;
const TriggerGreen = pc.createScript("triggerGreen");
TriggerGreen.attributes.add("ui", {
    type: "entity"
}),
TriggerGreen.attributes.add("uiintro", {
    type: "entity"
}),
TriggerGreen.prototype.initialize = function() {
    this.green = this.app.root.findByName("Green"),
    this.green2 = this.app.root.findByName("Green2"),
    this.green3 = this.app.root.findByName("Green3"),
    this.green4 = this.app.root.findByName("Green4"),
    this.green5 = this.app.root.findByName("Green5"),
    this.green6 = this.app.root.findByName("Green6"),
    this.green7 = this.app.root.findByName("Green7"),
    this.green8 = this.app.root.findByName("Green8"),
    this.green9 = this.app.root.findByName("Green9"),
    this.green10 = this.app.root.findByName("Green10"),
    this.player = this.app.root.findByName("Player"),
    this.redLine = this.app.root.findByName("RedLine"),
    this.blueLine = this.app.root.findByName("BlueLine"),
    this.greenLine = this.app.root.findByName("GreenLine"),
    this.yellowLine = this.app.root.findByName("YellowLine"),
    this.one = this.app.root.findByName("1"),
    this.two = this.app.root.findByName("2"),
    this.three = this.app.root.findByName("3"),
    this.four = this.app.root.findByName("4"),
    this.five = this.app.root.findByName("5"),
    this.six = this.app.root.findByName("6"),
    this.seven = this.app.root.findByName("7"),
    this.eight = this.app.root.findByName("8"),
    this.one1 = this.app.root.findByName("11"),
    this.two2 = this.app.root.findByName("22"),
    this.three3 = this.app.root.findByName("33"),
    this.four4 = this.app.root.findByName("44"),
    this.five5 = this.app.root.findByName("55"),
    this.six6 = this.app.root.findByName("66"),
    this.seven7 = this.app.root.findByName("77"),
    this.eight8 = this.app.root.findByName("88"),
    this.water = this.app.root.findByName("Water"),
    this.waterFall1 = this.app.root.findByName("Waterfall1"),
    this.waterFall2 = this.app.root.findByName("Waterfall2"),
    this.blood = this.app.root.findByName("Blood"),
    this.bloodFall1 = this.app.root.findByName("Bloodfall1"),
    this.bloodFall2 = this.app.root.findByName("Bloodfall2"),
    this.finish = this.app.root.findByName("Finish"),
    this.finish2 = this.app.root.findByName("Finish2"),
    this.entity.collision.on("triggerenter", this.onTriggerEnter, this)
}
,
TriggerGreen.prototype.onTriggerEnter = function(e) {
    "Player" == e.collision.entity.name && (this.greenLine.enabled = !0,
    this.green.destroy(),
    this.green2.destroy(),
    this.green3.destroy(),
    this.green4.destroy(),
    this.green5.destroy(),
    this.green6.destroy(),
    this.green7.destroy(),
    this.green8.destroy(),
    this.green9.destroy(),
    this.green10.destroy(),
    this.one.enabled = !0,
    this.two.enabled = !0,
    this.three.enabled = !0,
    this.four.enabled = !0,
    this.five.enabled = !0,
    this.six.enabled = !0,
    this.seven.enabled = !0,
    this.eight.enabled = !0,
    this.one1.enabled = !0,
    this.two2.enabled = !0,
    this.three3.enabled = !0,
    this.four4.enabled = !0,
    this.five5.enabled = !0,
    this.six6.enabled = !0,
    this.seven7.enabled = !0,
    this.eight8.enabled = !0,
    "false" === localStorage.getItem("sound") && (this.player.sound.slot(4).isPlaying || this.player.sound.slot(4).play()),
    !0 === this.greenLine.enabled && !0 === this.yellowLine.enabled && !0 === this.blueLine.enabled && !0 === this.redLine.enabled && (this.finish.enabled = !0,
    this.water.enabled = !1,
    this.waterFall1.enabled = !1,
    this.waterFall2.enabled = !1,
    this.blood.enabled = !0,
    this.bloodFall1.enabled = !0,
    this.bloodFall2.enabled = !0),
    !0 === this.greenLine.enabled && !0 === this.yellowLine.enabled && !0 === this.blueLine.enabled && !0 === this.redLine.enabled && "true" === localStorage.getItem("ach1") && "true" === localStorage.getItem("secs") && "true" === localStorage.getItem("ach3") && "true" === localStorage.getItem("ach4") && "true" === localStorage.getItem("ach5") && "true" === localStorage.getItem("ach6") && (this.finish.enabled = !1,
    this.finish2.enabled = !0),
    this.ui.enabled = !0,
    spodruns || (this.player.script.level2bubble.enabled = !0))
}
;
const TriggerRed = pc.createScript("triggerRed");
TriggerRed.attributes.add("ui", {
    type: "entity"
}),
TriggerRed.prototype.initialize = function() {
    this.red = this.app.root.findByName("Red"),
    this.red2 = this.app.root.findByName("Red2"),
    this.red3 = this.app.root.findByName("Red3"),
    this.red4 = this.app.root.findByName("Red4"),
    this.red5 = this.app.root.findByName("Red5"),
    this.red6 = this.app.root.findByName("Red6"),
    this.red7 = this.app.root.findByName("Red7"),
    this.red8 = this.app.root.findByName("Red8"),
    this.red9 = this.app.root.findByName("Red9"),
    this.red10 = this.app.root.findByName("Red10"),
    this.player = this.app.root.findByName("Player"),
    this.redLine = this.app.root.findByName("RedLine"),
    this.blueLine = this.app.root.findByName("BlueLine"),
    this.greenLine = this.app.root.findByName("GreenLine"),
    this.yellowLine = this.app.root.findByName("YellowLine"),
    this.water = this.app.root.findByName("Water"),
    this.waterFall1 = this.app.root.findByName("Waterfall1"),
    this.waterFall2 = this.app.root.findByName("Waterfall2"),
    this.blood = this.app.root.findByName("Blood"),
    this.bloodFall1 = this.app.root.findByName("Bloodfall1"),
    this.bloodFall2 = this.app.root.findByName("Bloodfall2"),
    this.finish = this.app.root.findByName("Finish"),
    this.finish2 = this.app.root.findByName("Finish2"),
    this.entity.collision.on("triggerenter", this.onTriggerEnter, this)
}
,
TriggerRed.prototype.onTriggerEnter = function(e) {
    "Player" == e.collision.entity.name && (this.redLine.enabled = !0,
    this.red.destroy(),
    this.red2.destroy(),
    this.red3.destroy(),
    this.red4.destroy(),
    this.red5.destroy(),
    this.red6.destroy(),
    this.red7.destroy(),
    this.red8.destroy(),
    this.red9.destroy(),
    this.red10.destroy(),
    "false" === localStorage.getItem("sound") && (this.player.sound.slot(4).isPlaying || this.player.sound.slot(4).play()),
    !0 === this.greenLine.enabled && !0 === this.yellowLine.enabled && !0 === this.blueLine.enabled && !0 === this.redLine.enabled && (this.finish.enabled = !0,
    this.water.enabled = !1,
    this.waterFall1.enabled = !1,
    this.waterFall2.enabled = !1,
    this.blood.enabled = !0,
    this.bloodFall1.enabled = !0,
    this.bloodFall2.enabled = !0),
    !0 === this.greenLine.enabled && !0 === this.yellowLine.enabled && !0 === this.blueLine.enabled && !0 === this.redLine.enabled && "true" === localStorage.getItem("ach1") && "true" === localStorage.getItem("secs") && "true" === localStorage.getItem("ach3") && "true" === localStorage.getItem("ach4") && "true" === localStorage.getItem("ach5") && "true" === localStorage.getItem("ach6") && (this.finish.enabled = !1,
    this.finish2.enabled = !0),
    this.ui.enabled = !0)
}
;
const PlayerRespawn3 = pc.createScript("playerRespawn3");
PlayerRespawn3.prototype.initialize = function() {
    this.velocity = new pc.Vec3,
    this.respawn = this.app.root.findByName("Respawn0"),
    this.camera = this.app.root.findByName("Camera"),
    this.spawn = this.respawn.getPosition().clone(),
    this.entity.collision.on("triggerenter", this.onTriggerEnter, this)
}
,
PlayerRespawn3.prototype.onTriggerEnter = function(e) {
    "Player" == e.collision.entity.name && (e.rigidbody.teleport(this.spawn),
    e.rigidbody.linearVelocity = this.velocity.set(0, 0, 0),
    e.rigidbody.angularVelocity = new pc.Vec3(0,0,0),
    e.sound.slot(2).isPlaying || e.sound.play(2),
    this.camera.script.playerCamera.reset2(),
    !0 === this.camera.script.orbitCamera.enabled && this.camera.script.orbitCamera.reset())
}
;
const PlayerRespawn4 = pc.createScript("playerRespawn4");
PlayerRespawn4.prototype.initialize = function() {
    this.velocity = new pc.Vec3,
    this.respawn = this.app.root.findByName("Respawn2"),
    this.camera = this.app.root.findByName("Camera"),
    this.spawn = this.respawn.getPosition().clone(),
    this.entity.collision.on("triggerenter", this.onTriggerEnter, this)
}
,
PlayerRespawn4.prototype.onTriggerEnter = function(e) {
    "Player" == e.collision.entity.name && (e.rigidbody.teleport(this.spawn),
    e.rigidbody.linearVelocity = this.velocity.set(0, 0, 0),
    e.rigidbody.angularVelocity = new pc.Vec3(0,0,0),
    e.sound.slot(2).isPlaying || e.sound.play(2),
    this.camera.script.playerCamera.reset3(),
    !0 === this.camera.script.orbitCamera.enabled && this.camera.script.orbitCamera.reset())
}
;
const PlayerController2 = pc.createScript("playerController2");
PlayerController2.attributes.add("cameraEntity", {
    type: "entity"
}),
PlayerController2.attributes.add("power", {
    type: "number",
    default: 2500
}),
PlayerController2.attributes.add("joystickId", {
    type: "string"
}),
PlayerController2.attributes.add("jumpButtonId", {
    type: "string"
}),
PlayerController2.prototype.initialize = function() {
    this.entity.rigidbody.group = pc.BODYGROUP_USER_1,
    this.map = this.app.root.findByName("Map");
    for (let t of this.map.children)
        "Wall" === t.name && (t.rigidbody.group = pc.BODYGROUP_USER_1);
    this._angle = 0,
    this._frameMovementRight = new pc.Vec3,
    this._frameMovementForward = new pc.Vec3,
    this._frameMovementTotal = new pc.Vec3,
    this.jumpRaycastStart = new pc.Vec3(0,0,0),
    this.jumpRaycastEnd = new pc.Vec3(0,0,0),
    this.jumpTimeLast = 0,
    this.jumpTimeInterval = 570,
    this.pause = this.app.root.findByName("Pause Menu"),
    "true" === localStorage.getItem("sound") ? this.entity.sound.enabled = !1 : "false" === localStorage.getItem("sound") && (this.entity.sound.enabled = !0),
    this.playerCollision = this.entity.findByName("player-collision")
}
,
PlayerController2.prototype.update = function() {
    const t = window.touchJoypad
      , i = t.sticks[this.joystickId];
    this._frameMovementRight.copy(this.cameraEntity.right),
    this._frameMovementForward.copy(this.cameraEntity.forward),
    this._frameMovementTotal.copy(pc.Vec3.ZERO),
    this._frameMovementRight.y = 0,
    this._frameMovementRight.normalize(),
    this._frameMovementRight.scale(i.x),
    this._frameMovementForward.y = 0,
    this._frameMovementForward.normalize(),
    this._frameMovementForward.scale(i.y),
    this._frameMovementTotal.add2(this._frameMovementRight, this._frameMovementForward),
    0 !== this._frameMovementTotal.x || 0 !== this._frameMovementTotal.z ? (this._frameMovementTotal.scale(this.power),
    this.entity.rigidbody.applyForce(this._frameMovementTotal),
    this.moving = !0) : this.moving = !1;
    const e = this.entity.rigidbody.linearVelocity;
    if (e.y < -1 ? this.isLanding = !0 : this.isLanding = !1,
    e.y > 1 ? this.isJumping = !0 : this.isJumping = !1,
    t.buttons.wasPressed(this.jumpButtonId)) {
        const t = performance.now() - this.jumpTimeLast > this.jumpTimeInterval && this.isGrounded();
        this.grounded = t,
        this.grounded && (this.jumpTimeLast = performance.now())
    } else
        this.grounded = !1;
    this.grounded && (this.entity.rigidbody.applyImpulse(0, 1050, 0),
    this.grounded = !1);
    let s = this.playerCollision.collision.halfExtents
      , o = this.playerCollision.getPosition()
      , a = this.entity.getPosition();
    this.jumpRaycastStart.copy(o),
    this.jumpRaycastEnd.copy(a),
    this.jumpRaycastStart.y -= 0,
    this.jumpRaycastEnd.y += .7;
    const n = this.app.systems.rigidbody.boxCast(s, this.jumpRaycastStart, this.jumpRaycastEnd);
    let r = !1;
    n && n.entity.rigidbody && n.entity !== this.entity && (r = !0);
    const y = Math.abs(this.entity.rigidbody.linearVelocity.x)
      , h = Math.abs(this.entity.rigidbody.linearVelocity.z)
      , l = Math.trunc(y)
      , d = Math.trunc(h);
    this.moving && !this.isLanding && (l > 1 || d > 1) && this.app.systems.rigidbody.boxCast(s, this.jumpRaycastStart, this.jumpRaycastEnd) && (this.entity.sound.slot(1).isPlaying || this.entity.sound.play(1)),
    t.buttons.wasPressed(this.jumpButtonId) && !this.isLanding && r && pc.BODYGROUP_USER_1 && (this.entity.sound.slot(1).isPlaying || this.entity.sound.play(1))
}
,
PlayerController2.prototype.postUpdate = function(t) {
    const i = Math.pow(1 - .99, t)
      , e = this.entity.rigidbody.linearVelocity;
    if (e.x *= i,
    e.z *= i,
    this.entity.rigidbody.linearVelocity = e,
    this.isJumping) {
        let t = 0;
        t -= 14 * this.entity.rigidbody.mass,
        this.entity.rigidbody.applyForce(0, t, 0)
    }
    if (this.isLanding) {
        let t = 0;
        t -= 7 * this.entity.rigidbody.mass,
        this.entity.rigidbody.applyForce(0, t, 0)
    }
}
,
PlayerController2.prototype.isGrounded = function() {
    let t = this.playerCollision.collision.halfExtents
      , i = this.playerCollision.getPosition()
      , e = this.entity.getPosition();
    this.jumpRaycastStart.copy(i),
    this.jumpRaycastEnd.copy(e),
    this.jumpRaycastStart.y -= 0,
    this.jumpRaycastEnd.y += .7;
    const s = this.app.systems.rigidbody.boxCast(t, this.jumpRaycastStart, this.jumpRaycastEnd);
    let o = !1;
    return s && s.entity.rigidbody && s.entity !== this.entity && (o = !0),
    o
}
;
var OrbitCamera = pc.createScript("orbitCamera");
OrbitCamera.attributes.add("distanceMax", {
    type: "number",
    default: 0,
    title: "Distance Max",
    description: "Setting this at 0 will give an infinite distance limit"
}),
OrbitCamera.attributes.add("distanceMin", {
    type: "number",
    default: 0,
    title: "Distance Min"
}),
OrbitCamera.attributes.add("pitchAngleMax", {
    type: "number",
    default: 90,
    title: "Pitch Angle Max (degrees)"
}),
OrbitCamera.attributes.add("pitchAngleMin", {
    type: "number",
    default: -90,
    title: "Pitch Angle Min (degrees)"
}),
OrbitCamera.attributes.add("inertiaFactor", {
    type: "number",
    default: 0,
    title: "Inertia Factor",
    description: "Higher value means that the camera will continue moving after the user has stopped dragging. 0 is fully responsive."
}),
Object.defineProperty(OrbitCamera.prototype, "distance", {
    get: function() {
        return this._targetDistance
    },
    set: function(t) {
        this._targetDistance = this._clampDistance(t)
    }
}),
Object.defineProperty(OrbitCamera.prototype, "pitch", {
    get: function() {
        return this._targetPitch
    },
    set: function(t) {
        this._targetPitch = this._clampPitchAngle(t)
    }
}),
Object.defineProperty(OrbitCamera.prototype, "yaw", {
    get: function() {
        return this._targetYaw
    },
    set: function(t) {
        this._targetYaw = t;
        var i = (this._targetYaw - this._yaw) % 360;
        this._targetYaw = i > 180 ? this._yaw - (360 - i) : i < -180 ? this._yaw + (360 + i) : this._yaw + i
    }
}),
Object.defineProperty(OrbitCamera.prototype, "pivotPoint", {
    get: function() {
        return this._pivotPoint
    },
    set: function(t) {
        this._pivotPoint.copy(t)
    }
}),
OrbitCamera.prototype.initialize = function() {
    this._pivotPoint = new pc.Vec3;
    var t = this.entity.getRotation();
    this._yaw = this._calcYaw(t),
    this._pitch = this._clampPitchAngle(this._calcPitch(t, this._yaw)),
    this.entity.setLocalEulerAngles(this._pitch, this._yaw, 0),
    this._distance = 0,
    this._targetYaw = this._yaw,
    this._targetPitch = this._pitch,
    this._targetDistance = this._distance,
    this.on("attr:distanceMin", (function(t, i) {
        this._targetDistance = this._clampDistance(this._distance)
    }
    )),
    this.on("attr:distanceMax", (function(t, i) {
        this._targetDistance = this._clampDistance(this._distance)
    }
    )),
    this.on("attr:pitchAngleMin", (function(t, i) {
        this._targetPitch = this._clampPitchAngle(this._pitch)
    }
    )),
    this.on("attr:pitchAngleMax", (function(t, i) {
        this._targetPitch = this._clampPitchAngle(this._pitch)
    }
    ))
}
,
OrbitCamera.prototype.update = function(t) {
    var i = 0 === this.inertiaFactor ? 1 : Math.min(t / this.inertiaFactor, 1);
    this._distance = pc.math.lerp(this._distance, this._targetDistance, i),
    this._yaw = pc.math.lerp(this._yaw, this._targetYaw, i),
    this._pitch = pc.math.lerp(this._pitch, this._targetPitch, i),
    this._updatePosition()
}
,
OrbitCamera.prototype._updatePosition = function() {
    this.entity.setLocalPosition(0, 0, 0),
    this.entity.setLocalEulerAngles(this._pitch, this._yaw, 0);
    var t = this.entity.getPosition();
    t.copy(this.entity.forward),
    t.scale(-this._distance),
    t.add(this.pivotPoint),
    this.entity.setPosition(t)
}
,
OrbitCamera.prototype._removeInertia = function() {
    this._yaw = this._targetYaw,
    this._pitch = this._targetPitch,
    this._distance = this._targetDistance
}
,
OrbitCamera.prototype._calcYaw = function(t) {
    var i = new pc.Vec3;
    return t.transformVector(pc.Vec3.FORWARD, i),
    Math.atan2(-i.x, -i.z) * pc.math.RAD_TO_DEG
}
,
OrbitCamera.prototype._clampDistance = function(t) {
    return this.distanceMax > 0 ? pc.math.clamp(t, this.distanceMin, this.distanceMax) : Math.max(t, this.distanceMin)
}
,
OrbitCamera.prototype._clampPitchAngle = function(t) {
    return pc.math.clamp(t, -this.pitchAngleMax, -this.pitchAngleMin)
}
,
OrbitCamera.quatWithoutYaw = new pc.Quat,
OrbitCamera.yawOffset = new pc.Quat,
OrbitCamera.prototype._calcPitch = function(t, i) {
    var e = OrbitCamera.quatWithoutYaw
      , a = OrbitCamera.yawOffset;
    a.setFromEulerAngles(0, -i, 0),
    e.mul2(a, t);
    var s = new pc.Vec3;
    return e.transformVector(pc.Vec3.FORWARD, s),
    Math.atan2(s.y, -s.z) * pc.math.RAD_TO_DEG
}
,
OrbitCamera.prototype.reset = function() {
    this._pivotPoint = new pc.Vec3;
    var t = this.entity.getRotation();
    this._yaw = this._calcYaw(t),
    this._pitch = this._clampPitchAngle(this._calcPitch(t, this._yaw)),
    this.entity.setLocalEulerAngles(this._pitch, this._yaw, 0),
    this._distance = 0,
    this._targetYaw = this._yaw,
    this._targetPitch = this._pitch,
    this._targetDistance = this._distance
}
;
var OrbitCameraFollowEntity = pc.createScript("orbitCameraFollowEntity");
OrbitCameraFollowEntity.attributes.add("followEntity", {
    type: "entity"
}),
OrbitCameraFollowEntity.prototype.initialize = function() {
    this.orbitCamera = this.entity.script.orbitCamera
}
,
OrbitCameraFollowEntity.prototype.postUpdate = function(t) {
    this.orbitCamera.pivotPoint = this.followEntity.getPosition()
}
;
var TouchButton = pc.createScript("touchButton");
TouchButton.attributes.add("identifier", {
    type: "string",
    default: "button0",
    title: "Identifier",
    description: "A unique name for the button to refer to it by in the API. Will give a warning in browser tools if the name is not unique."
}),
TouchButton.prototype.initialize = function() {
    window.touchJoypad && window.touchJoypad.buttonStates[this.identifier] ? console.warn("Touch button identifier already used, please use another for Entity: " + this.entity.name) : (this._setState(!1),
    this.on("state", (t => {
        this._setEvents(t ? "on" : "off")
    }
    )),
    this._setEvents("on"))
}
,
TouchButton.prototype._setEvents = function(t) {
    this._state = !1,
    this.app.touch && (this.entity.element[t]("touchstart", this._onTouchDown, this),
    this.entity.element[t]("touchend", this._onTouchUp, this),
    this.entity.element[t]("touchcancel", this._onTouchUp, this))
}
,
TouchButton.prototype._onTouchDown = function(t) {
    this._state || (this._onPointerDown(),
    t.stopPropagation())
}
,
TouchButton.prototype._onTouchUp = function(t) {
    this._state && (this._onPointerUp(),
    t.stopPropagation()),
    t.event.preventDefault()
}
,
TouchButton.prototype._onPointerDown = function() {
    this._setState(!0)
}
,
TouchButton.prototype._onPointerUp = function() {
    this._setState(!1)
}
,
TouchButton.prototype._setState = function(t) {
    window.touchJoypad && (window.touchJoypad.buttonStates[this.identifier] = t ? Date.now() : null),
    this._state = t
}
,
TouchButton.prototype.off2 = function() {
    this.entity.element.off("touchstart", this._onTouchDown, this),
    this.entity.element.off("touchend", this._onTouchUp, this)
}
;
var TouchJoystick = pc.createScript("touchJoystick");
TouchJoystick.attributes.add("identifier", {
    type: "string",
    default: "joystick0",
    title: "Idenitifier",
    description: "A unique name for the joystick to refer to it by in the API. Joysticks are also buttons so this will also be the name of button in the API. It will give a warning in browser tools if the name is not unique."
}),
TouchJoystick.attributes.add("type", {
    type: "string",
    default: "fixed",
    enum: [{
        "Fixed in place": "fixed"
    }, {
        "Move to first touch and fixed": "relative"
    }, {
        "Move to first touch and drags": "drag"
    }],
    title: "Type",
    description: "Set type of behavior for the joystick."
}),
TouchJoystick.attributes.add("baseEntity", {
    type: "entity",
    title: "Base Entity",
    description: "Image Element Entity that shows the base of the joystick."
}),
TouchJoystick.attributes.add("nubEntity", {
    type: "entity",
    title: "Nub Entity",
    description: "Image Element Entity that shows the nub (top) of the joystick."
}),
TouchJoystick.attributes.add("axisDeadZone", {
    type: "number",
    default: 10,
    title: "Axis Dead Zone",
    description: "The number of UI units from the position of the Base Entity where input is not registered."
}),
TouchJoystick.attributes.add("axisRange", {
    type: "number",
    default: 50,
    title: "Axis Range",
    description: "The number of UI units from the position of the Base Entity that the Nub Entity can move to and is the maximum range"
}),
TouchJoystick.attributes.add("hideOnRelease", {
    type: "boolean",
    default: !1,
    title: "Hide on Release",
    description: "Will only show the joystick when the user is using it and will hide it on touch end. This is commonly used if you don't want the joystick to block what's being shown on screen."
}),
TouchJoystick.attributes.add("positionOnRelease", {
    type: "string",
    default: "stay",
    enum: [{
        Stay: "stay"
    }, {
        Original: "original"
    }, {
        "Last start": "lastStart"
    }],
    title: "Position on Release",
    description: "Where to move the joystick on release and can help keep the screen tidy so that there are clear areas to show the game and arrange controls."
}),
TouchJoystick.prototype.initialize = function() {
    window.touchJoypad && window.touchJoypad.sticks[this.identifier] ? console.warn("Touch joystick identifier already used, please use another for Entity: " + this.entity.name) : (this._originalLocalPosition = this.baseEntity.getLocalPosition().clone(),
    this._lastPointerDownPosition = new pc.Vec3,
    this._setAxisValues(0, 0),
    this._inputDown = !1,
    this._pointerId = -1,
    this._setButtonState(!1),
    this.on("state", (t => {
        this._setEvents(t ? "on" : "off")
    }
    )),
    this.on("destroy", ( () => {
        window.touchJoypad && (window.touchJoypad.sticks[this.identifier] = void 0)
    }
    )),
    this._setEvents("on"))
}
,
TouchJoystick.prototype._setEvents = function(t) {
    this._setAxisValues(0, 0),
    this._pointerDown = !1,
    this._pointerId = -1,
    this.baseEntity.enabled = !this.hideOnRelease,
    this.app.touch && (this.entity.element[t]("touchstart", this._onTouchDown, this),
    this.entity.element[t]("touchmove", this._onTouchMove, this),
    this.entity.element[t]("touchend", this._onTouchUp, this),
    this.entity.element[t]("touchcancel", this._onTouchUp, this))
}
,
TouchJoystick.__uiPos = new pc.Vec2,
TouchJoystick.prototype.screenToUi = function(t) {
    const i = TouchJoystick.__uiPos
      , o = this.app.graphicsDevice.canvas.clientWidth
      , e = this.app.graphicsDevice.canvas.clientHeight;
    return i.x = t.x / o,
    i.y = t.y / e,
    i.mulScalar(2).subScalar(1),
    i.y *= -1,
    i
}
,
TouchJoystick.prototype._onTouchDown = function(t) {
    if (this._pointerDown)
        return;
    const i = this._pointerDown;
    t.id = t.touch.identifier,
    this._onPointerDown(t),
    !i && this._pointerDown && t.stopPropagation()
}
,
TouchJoystick.prototype._onTouchMove = function(t) {
    t.id = t.touch.identifier,
    this._onPointerMove(t),
    this._pointerDown && t.stopPropagation(),
    t.event.preventDefault()
}
,
TouchJoystick.prototype._onTouchUp = function(t) {
    this._pointerDown && (t.id = t.touch.identifier,
    this._onPointerUp(t),
    t.stopPropagation()),
    t.event.preventDefault()
}
,
TouchJoystick.prototype._onPointerDown = function(t) {
    const i = this.screenToUi(t);
    switch (this.type) {
    case "drag":
    case "relative":
        this.baseEntity.setPosition(i.x, i.y, 0),
        this.nubEntity.setLocalPosition(0, 0, 0),
        this._pointerDown = !0;
        break;
    case "fixed":
        this.nubEntity.setPosition(i.x, i.y, 0),
        this._updateAxisValuesFromNub(),
        this._pointerDown = !0
    }
    this._pointerDown && (this._pointerId = t.id ? t.id : 0,
    this._setButtonState(!0),
    this._lastPointerDownPosition.copy(this.baseEntity.getLocalPosition()),
    this.baseEntity.enabled = !0,
    this._onPointerMove(t))
}
,
TouchJoystick.__tempNubPos = new pc.Vec3,
TouchJoystick.__tempBasePos = new pc.Vec3,
TouchJoystick.prototype._onPointerMove = function(t) {
    if (this._pointerDown && this._pointerId == t.id) {
        const i = this.screenToUi(t)
          , o = this.axisRange * this.axisRange;
        this.nubEntity.setPosition(i.x, i.y, 0);
        const e = TouchJoystick.__tempNubPos;
        e.copy(this.nubEntity.getLocalPosition());
        if (e.lengthSq() >= o) {
            if ("drag" === this.type) {
                const t = e.length() - this.axisRange
                  , i = TouchJoystick.__tempBasePos;
                i.copy(e),
                i.normalize().mulScalar(t),
                i.add(this.baseEntity.getLocalPosition()),
                this.baseEntity.setLocalPosition(i)
            }
            e.normalize().mulScalar(this.axisRange),
            this.nubEntity.setLocalPosition(e)
        }
        this._updateAxisValuesFromNub()
    }
}
,
TouchJoystick.prototype._onPointerUp = function(t) {
    if (this._pointerDown && this._pointerId == t.id) {
        switch (this.nubEntity.setLocalPosition(0, 0, 0),
        this.hideOnRelease && (this.baseEntity.enabled = !1),
        this.positionOnRelease) {
        case "original":
            this.baseEntity.setLocalPosition(this._originalLocalPosition);
            break;
        case "lastStart":
            this.baseEntity.setLocalPosition(this._lastPointerDownPosition)
        }
        this._pointerId = -1,
        this._updateAxisValuesFromNub(),
        this._setButtonState(!1),
        this._pointerDown = !1
    }
}
,
TouchJoystick.prototype._updateAxisValuesFromNub = function() {
    const t = this.axisRange - this.axisDeadZone
      , i = this.nubEntity.getLocalPosition()
      , o = Math.sign(i.x)
      , e = Math.sign(i.y)
      , s = pc.math.clamp(Math.abs(i.x) - this.axisDeadZone, 0, t) * o
      , n = pc.math.clamp(Math.abs(i.y) - this.axisDeadZone, 0, t) * e;
    this._setAxisValues(s / t, n / t)
}
,
TouchJoystick.prototype._setAxisValues = function(t, i) {
    window.touchJoypad && (window.touchJoypad.sticks[this.identifier] = {
        x: t,
        y: i
    }),
    this.axisX = t,
    this.axisY = i
}
,
TouchJoystick.prototype._setButtonState = function(t) {
    window.touchJoypad && (window.touchJoypad.buttonStates[this.identifier] = t ? Date.now() : null),
    this._state = t
}
,
TouchJoystick.prototype.off = function() {
    this.entity.element.off("touchstart", this._onTouchDown, this),
    this.entity.element.off("touchmove", this._onTouchMove, this),
    this.entity.element.off("touchend", this._onTouchUp, this),
    this.entity.element.off("touchcancel", this._onTouchUp, this)
}
;
!function() {
    const t = {}
      , n = {}
      , o = {
        buttons: {
            isPressed: function(t) {
                return !!n[t]
            },
            wasPressed: function(o) {
                const e = n[o]
                  , s = t[o];
                return void 0 !== n[o] && (!s && e)
            },
            wasReleased: function(o) {
                const e = n[o]
                  , s = t[o];
                return void 0 !== n[o] && (s && !e)
            },
            wasTapped: function(n) {
                if (this.wasReleased(n)) {
                    return Date.now() - t[n] <= 200
                }
                return !1
            }
        },
        sticks: {}
    };
    o.buttonStates = n;
    pc.Application.getApplication().on("update", ( () => {
        for (const o of Object.keys(n)) {
            const e = n[o];
            t[o] = e
        }
    }
    )),
    window.touchJoypad = o
}();
var MenuUtils = pc.createScript("menuUtils");
MenuUtils.attributes.add("title", {
    type: "entity"
}),
MenuUtils.attributes.add("top", {
    type: "entity"
}),
MenuUtils.attributes.add("bottom", {
    type: "entity"
}),
MenuUtils.attributes.add("button2", {
    type: "entity"
}),
MenuUtils.attributes.add("button3", {
    type: "entity"
}),
MenuUtils.attributes.add("back", {
    type: "entity"
}),
MenuUtils.attributes.add("controls", {
    type: "entity"
}),
MenuUtils.attributes.add("achs", {
    type: "entity"
}),
MenuUtils.attributes.add("play", {
    type: "entity"
}),
MenuUtils.attributes.add("continuer", {
    type: "entity"
}),
MenuUtils.attributes.add("speedrun", {
    type: "entity"
}),
MenuUtils.attributes.add("flag", {
    type: "entity"
}),
MenuUtils.attributes.add("flagbground", {
    type: "entity"
}),
MenuUtils.attributes.add("ach1", {
    type: "entity"
}),
MenuUtils.attributes.add("ach2", {
    type: "entity"
}),
MenuUtils.attributes.add("ach3", {
    type: "entity"
}),
MenuUtils.attributes.add("ach4", {
    type: "entity"
}),
MenuUtils.attributes.add("ach5", {
    type: "entity"
}),
MenuUtils.attributes.add("ach6", {
    type: "entity"
}),
MenuUtils.attributes.add("settings", {
    type: "entity"
}),
MenuUtils.attributes.add("back1", {
    type: "entity"
}),
MenuUtils.attributes.add("back2", {
    type: "entity"
}),
MenuUtils.attributes.add("back3", {
    type: "entity"
}),
MenuUtils.attributes.add("back4", {
    type: "entity"
}),
MenuUtils.attributes.add("back5", {
    type: "entity"
}),
MenuUtils.attributes.add("reset1", {
    type: "entity"
}),
MenuUtils.attributes.add("reset2", {
    type: "entity"
}),
MenuUtils.attributes.add("yes", {
    type: "entity"
}),
MenuUtils.attributes.add("no", {
    type: "entity"
}),
MenuUtils.attributes.add("yesB", {
    type: "entity"
}),
MenuUtils.attributes.add("noB", {
    type: "entity"
}),
MenuUtils.attributes.add("record", {
    type: "entity"
}),
MenuUtils.attributes.add("timer", {
    type: "entity"
}),
MenuUtils.prototype.initialize = function() {
    isMobile && (this.title.element.width = 600,
    this.title.element.height = 150,
    this.top.element.fontSize = 47,
    this.bottom.element.fontSize = 47,
    this.achs.element.fontSize = 47,
    this.play.element.fontSize = 47,
    this.continuer.element.fontSize = 47,
    this.speedrun.element.fontSize = 47,
    this.button2.setLocalPosition(0, -36.311, 0),
    this.button3.setLocalPosition(0, -136.311, 0),
    this.flag.element.width = 57,
    this.flag.element.height = 40,
    this.flagbground.element.enabled = !1,
    this.controls.enabled = !1,
    this.settings.element.height = 90,
    this.settings.element.width = 90,
    this.back1.element.height = 90,
    this.back1.element.width = 90,
    this.back2.element.height = 90,
    this.back2.element.width = 90,
    this.back3.element.height = 90,
    this.back3.element.width = 90,
    this.back4.element.height = 90,
    this.back4.element.width = 90,
    this.back5.element.height = 90,
    this.back5.element.width = 90,
    this.ach1.element.fontSize = 42,
    this.ach2.element.fontSize = 42,
    this.ach3.element.fontSize = 42,
    this.ach4.element.fontSize = 42,
    this.ach5.element.fontSize = 42,
    this.ach6.element.fontSize = 42,
    this.reset1.element.fontSize = 45,
    this.reset2.element.fontSize = 45,
    this.yes.element.fontSize = 45,
    this.no.element.fontSize = 45,
    this.yesB.element.width = 90,
    this.yesB.element.height = 90,
    this.noB.element.width = 90,
    this.noB.element.height = 90,
    this.record.element.fontSize = 45,
    this.timer.element.fontSize = 45)
}
;
var UtilsDemon = pc.createScript("utilsDemon");
UtilsDemon.attributes.add("right", {
    type: "entity"
}),
UtilsDemon.attributes.add("pivot", {
    type: "entity"
}),
UtilsDemon.attributes.add("font", {
    type: "entity"
}),
UtilsDemon.attributes.add("font2", {
    type: "entity"
}),
UtilsDemon.attributes.add("button", {
    type: "entity"
}),
UtilsDemon.prototype.initialize = function() {
    this.camera = this.app.root.findByName("Camera"),
    this.player = this.app.root.findByName("Player"),
    isMobile && (this.pivot.enabled = !0,
    this.right.enabled = !0,
    this.right.script.touchJoystick.enabled = !0,
    this.player.script.playerController.enabled = !1,
    this.camera.script.orbitCameraFollowEntity.enabled = !0,
    this.camera.script.orbitCameraTouchJoypadInput.enabled = !0,
    this.camera.script.orbitCamera.enabled = !0,
    this.font.element.fontSize = 45,
    this.font2.element.fontSize = 45,
    this.button.element.fontSize = 45)
}
;
var BlockHeight = pc.createScript("blockHeight");
BlockHeight.attributes.add("block1", {
    type: "entity"
}),
BlockHeight.attributes.add("block2", {
    type: "entity"
}),
BlockHeight.attributes.add("block3", {
    type: "entity"
}),
BlockHeight.attributes.add("block4", {
    type: "entity"
}),
BlockHeight.attributes.add("block5", {
    type: "entity"
}),
BlockHeight.attributes.add("block6", {
    type: "entity"
}),
BlockHeight.prototype.initialize = function() {
    isMobile && (this.block1.setLocalPosition(0, 4.9, -2.382),
    this.block2.setLocalPosition(0, 4.9, -7.553),
    this.block3.setLocalPosition(0, 4.9, -12.56),
    this.block4.setLocalPosition(0, 4.9, -2.382),
    this.block5.setLocalPosition(0, 4.9, -7.553),
    this.block6.setLocalPosition(0, 4.9, -12.56))
}
;
var BlockHeight2 = pc.createScript("blockHeight2");
BlockHeight2.attributes.add("block1", {
    type: "entity"
}),
BlockHeight2.attributes.add("block2", {
    type: "entity"
}),
BlockHeight2.attributes.add("block3", {
    type: "entity"
}),
BlockHeight2.attributes.add("block4", {
    type: "entity"
}),
BlockHeight2.prototype.initialize = function() {
    isMobile && (this.block1.setLocalPosition(0, -1.964, -11.042),
    this.block2.setLocalPosition(0, -1.964, -20.656),
    this.block3.setLocalPosition(0, -1.964, -11.042),
    this.block4.setLocalPosition(0, -1.964, -20.656))
}
;
const Rotaterv = pc.createScript("rotaterv");
Rotaterv.prototype.update = function(t) {
    this.entity.rotateLocal(0, 0, 120 * t)
}
;
const Rotaterv2 = pc.createScript("rotaterv2");
Rotaterv2.prototype.update = function(t) {
    this.entity.rotateLocal(0, 0, -120 * t)
}
;
var Triggerjump = pc.createScript("triggerjump");
Triggerjump.prototype.initialize = function() {
    this.entity.collision.on("collisionstart", this.onTriggerEnter, this)
}
,
Triggerjump.prototype.onTriggerEnter = function(r) {
    r.other.rigidbody.applyImpulse(0, 2e3, 0),
    r.other.sound.play(5) || r.other.sound.play(5),
    r.other.sound.stop(1)
}
;
var Triggerjump2 = pc.createScript("triggerjump2");
Triggerjump2.prototype.initialize = function() {
    this.entity.collision.on("collisionstart", this.onTriggerEnter, this)
}
,
Triggerjump2.prototype.onTriggerEnter = function(r) {
    r.other.rigidbody.applyImpulse(0, 3e3, 0),
    r.other.sound.play(5) || r.other.sound.play(5),
    r.other.sound.stop(1)
}
;
const RotaterV3 = pc.createScript("rotaterV3");
RotaterV3.prototype.update = function(t) {
    this.entity.rotateLocal(0, 0, 120 * t)
}
;
var Slider = pc.createScript("slider");
Slider.attributes.add("min", {
    type: "number",
    default: 1
}),
Slider.attributes.add("max", {
    type: "number",
    default: 100
}),
Slider.attributes.add("step", {
    type: "number",
    default: 1
});
let yo = 60;
localStorage.getItem("fov") && (yo = localStorage.getItem("fov")),
Slider.prototype.initialize = function() {
    this.element = document.createElement("input"),
    this.element.type = "range",
    this.element.style.position = "absolute",
    this.element.style.fontFamily = this.fontFamily,
    this.element.style.border = "0px",
    this.element.style.margin = "0px",
    this.element.style.padding = "0px",
    this.element.style.background = "transparent",
    this.element.style.boxSizing = "border-box",
    this.element.style.outline = "none",
    document.body.appendChild(this.element),
    this.element.min = this.min,
    this.element.max = this.max,
    this.element.step = this.step,
    this.element.value.default = 60,
    this.updateStyle(),
    this.on("state", (function() {
        this.entity.enabled ? this.element.style.display = "block" : this.element.style.display = "none"
    }
    ), this),
    this.camera = this.app.root.findByName("Camera"),
    localStorage.getItem("fov", yo),
    this.element.value = yo,
    this.on("destroy", (function() {
        this.element.remove()
    }
    ))
}
,
Slider.prototype.updateStyle = function() {
    if (this.entity.element.screenCorners) {
        var e = this.entity.element.screenCorners;
        this.element.style.left = e[0].x + "px",
        this.element.style.bottom = e[0].y + "px",
        this.element.style.width = e[2].x - e[0].x + "px",
        this.element.style.height = e[2].y - e[0].y + "px"
    }
}
,
Slider.prototype.update = function(e) {
    this.updateStyle()
}
,
Slider.prototype.getValue = function() {
    if (this.element)
        return yo = this.element.value,
        this.camera.camera.fov = yo,
        localStorage.setItem("fov", yo),
        this.element.value
}
;
var Demo = pc.createScript("demo");
Demo.attributes.add("sliderElement", {
    type: "entity"
}),
Demo.attributes.add("sliderValue", {
    type: "entity"
}),
Demo.attributes.add("sliderElement2", {
    type: "entity"
}),
Demo.attributes.add("sliderValue2", {
    type: "entity"
}),
Demo.prototype.update = function() {
    isMobile || (this.sliderValue.element.text = this.sliderElement.script.slider.getValue(),
    this.sliderValue2.element.text = this.sliderElement2.script.slider2.getValue())
}
;
var Slider2 = pc.createScript("slider2");
Slider2.attributes.add("min", {
    type: "number",
    default: .01
}),
Slider2.attributes.add("max", {
    type: "number",
    default: .5
}),
Slider2.attributes.add("step", {
    type: "number",
    default: 1
});
let bro = .09;
localStorage.getItem("sens") && (bro = localStorage.getItem("sens")),
Slider2.prototype.initialize = function() {
    this.camera = this.app.root.findByName("Camera"),
    this.element = document.createElement("input"),
    this.element.type = "range",
    this.element.style.position = "absolute",
    this.element.style.fontFamily = this.fontFamily,
    this.element.style.border = "0px",
    this.element.style.margin = "0px",
    this.element.style.padding = "0px",
    this.element.style.background = "transparent",
    this.element.style.boxSizing = "border-box",
    this.element.style.outline = "none",
    document.body.appendChild(this.element),
    this.element.min = this.min,
    this.element.max = this.max,
    this.element.step = this.step,
    this.element.value.default = .09,
    this.updateStyle(),
    this.on("state", (function() {
        this.entity.enabled ? this.element.style.display = "block" : this.element.style.display = "none"
    }
    ), this),
    localStorage.getItem("sens", bro),
    this.element.value = bro,
    this.on("destroy", (function() {
        this.element.remove()
    }
    ))
}
,
Slider2.prototype.updateStyle = function() {
    if (this.entity.element.screenCorners) {
        var e = this.entity.element.screenCorners;
        this.element.style.left = e[0].x + "px",
        this.element.style.bottom = e[0].y + "px",
        this.element.style.width = e[2].x - e[0].x + "px",
        this.element.style.height = e[2].y - e[0].y + "px"
    }
}
,
Slider2.prototype.update = function(e) {
    this.updateStyle()
}
,
Slider2.prototype.getValue = function() {
    if (this.element)
        return bro = this.element.value,
        localStorage.setItem("sens", bro),
        this.element.value
}
;
var Settings = pc.createScript("settings");
Settings.attributes.add("backButton", {
    type: "entity"
}),
Settings.attributes.add("continueButton", {
    type: "entity"
}),
Settings.attributes.add("mainMenuButton", {
    type: "entity"
}),
Settings.attributes.add("fovSlider", {
    type: "entity"
}),
Settings.attributes.add("fovText", {
    type: "entity"
}),
Settings.attributes.add("sensSlider", {
    type: "entity"
}),
Settings.attributes.add("sensText", {
    type: "entity"
}),
Settings.attributes.add("sensitivity", {
    type: "entity"
}),
Settings.attributes.add("fov", {
    type: "entity"
}),
Settings.attributes.add("sound", {
    type: "entity"
}),
Settings.attributes.add("crosshair", {
    type: "entity"
}),
Settings.attributes.add("enabledButton", {
    type: "entity"
}),
Settings.attributes.add("disabledButton", {
    type: "entity"
}),
Settings.attributes.add("white", {
    type: "entity"
}),
Settings.attributes.add("red", {
    type: "entity"
}),
Settings.attributes.add("blue", {
    type: "entity"
}),
Settings.attributes.add("green", {
    type: "entity"
}),
Settings.attributes.add("yellow", {
    type: "entity"
}),
Settings.attributes.add("purple", {
    type: "entity"
});
let settings = !1;
Settings.prototype.initialize = function() {
    this.player = this.app.root.findByName("Player"),
    this.pause = this.app.root.findByName("Pause Menu"),
    this.entity.button.on("click", this.onClick, this),
    this.backButton.button.on("click", this.onClickBack, this),
    this.white.button.on("click", this.onWhite, this),
    this.red.button.on("click", this.onRed, this),
    this.blue.button.on("click", this.onBlue, this),
    this.green.button.on("click", this.onGreen, this),
    this.yellow.button.on("click", this.onYellow, this),
    this.purple.button.on("click", this.onPurple, this)
}
,
Settings.prototype.onWhite = function() {
    this.player.script.playerCrosshair.crosshairWhite(),
    localStorage.removeItem("red"),
    localStorage.removeItem("blue"),
    localStorage.removeItem("green"),
    localStorage.removeItem("yellow"),
    localStorage.removeItem("purple")
}
,
Settings.prototype.onRed = function() {
    this.player.script.playerCrosshair.crosshairRed(),
    localStorage.removeItem("white"),
    localStorage.removeItem("blue"),
    localStorage.removeItem("green"),
    localStorage.removeItem("yellow"),
    localStorage.removeItem("purple")
}
,
Settings.prototype.onBlue = function() {
    this.player.script.playerCrosshair.crosshairBlue(),
    localStorage.removeItem("white"),
    localStorage.removeItem("red"),
    localStorage.removeItem("green"),
    localStorage.removeItem("yellow"),
    localStorage.removeItem("purple")
}
,
Settings.prototype.onGreen = function() {
    this.player.script.playerCrosshair.crosshairGreen(),
    localStorage.removeItem("white"),
    localStorage.removeItem("red"),
    localStorage.removeItem("blue"),
    localStorage.removeItem("yellow"),
    localStorage.removeItem("purple")
}
,
Settings.prototype.onYellow = function() {
    this.player.script.playerCrosshair.crosshairYellow(),
    localStorage.removeItem("white"),
    localStorage.removeItem("red"),
    localStorage.removeItem("blue"),
    localStorage.removeItem("green"),
    localStorage.removeItem("purple")
}
,
Settings.prototype.onPurple = function() {
    this.player.script.playerCrosshair.crosshairPurple(),
    localStorage.removeItem("white"),
    localStorage.removeItem("red"),
    localStorage.removeItem("blue"),
    localStorage.removeItem("green"),
    localStorage.removeItem("yellow")
}
,
Settings.prototype.onClick = function() {
    isMobile || (this.fovSlider.enabled = !0,
    this.fovText.enabled = !0,
    this.sensSlider.enabled = !0,
    this.sensText.enabled = !0,
    this.sensitivity.enabled = !0,
    this.fov.enabled = !0),
    "true" === localStorage.getItem("sound") ? this.pause.script.soundButton.onEnable() : "false" !== localStorage.getItem("sound") && null !== localStorage.getItem("sound") || this.pause.script.soundButton.onDisable(),
    this.white.enabled = !0,
    this.red.enabled = !0,
    this.blue.enabled = !0,
    this.green.enabled = !0,
    this.yellow.enabled = !0,
    this.purple.enabled = !0,
    this.sound.enabled = !0,
    this.crosshair.enabled = !0,
    settings = !0,
    this.backButton.enabled = !0
}
,
Settings.prototype.onClickBack = function() {
    this.white.enabled = !1,
    this.red.enabled = !1,
    this.blue.enabled = !1,
    this.green.enabled = !1,
    this.yellow.enabled = !1,
    this.purple.enabled = !1,
    this.enabledButton.enabled = !1,
    this.disabledButton.enabled = !1,
    isMobile || (this.sensitivity.enabled = !1,
    this.fov.enabled = !1,
    this.fovSlider.enabled = !1,
    this.fovText.enabled = !1,
    this.sensSlider.enabled = !1,
    this.sensText.enabled = !1),
    this.sound.enabled = !1,
    this.crosshair.enabled = !1,
    settings = !1,
    this.backButton.enabled = !1
}
;
var SettingsMain = pc.createScript("settingsMain");
SettingsMain.attributes.add("backButton", {
    type: "entity"
}),
SettingsMain.attributes.add("fovSlider", {
    type: "entity"
}),
SettingsMain.attributes.add("fovText", {
    type: "entity"
}),
SettingsMain.attributes.add("sensSlider", {
    type: "entity"
}),
SettingsMain.attributes.add("sensText", {
    type: "entity"
}),
SettingsMain.attributes.add("sensitivity", {
    type: "entity"
}),
SettingsMain.attributes.add("fov", {
    type: "entity"
}),
SettingsMain.attributes.add("sound", {
    type: "entity"
}),
SettingsMain.attributes.add("crosshair", {
    type: "entity"
}),
SettingsMain.attributes.add("enabledButton", {
    type: "entity"
}),
SettingsMain.attributes.add("disabledButton", {
    type: "entity"
}),
SettingsMain.attributes.add("enabledButtonText", {
    type: "entity"
}),
SettingsMain.attributes.add("disabledButtonText", {
    type: "entity"
}),
SettingsMain.attributes.add("defaults", {
    type: "entity"
}),
SettingsMain.attributes.add("resetProg", {
    type: "entity"
}),
SettingsMain.attributes.add("resetText", {
    type: "entity"
}),
SettingsMain.attributes.add("white", {
    type: "entity"
}),
SettingsMain.attributes.add("red", {
    type: "entity"
}),
SettingsMain.attributes.add("blue", {
    type: "entity"
}),
SettingsMain.attributes.add("green", {
    type: "entity"
}),
SettingsMain.attributes.add("yellow", {
    type: "entity"
}),
SettingsMain.attributes.add("purple", {
    type: "entity"
}),
SettingsMain.attributes.add("final", {
    type: "entity"
}),
SettingsMain.attributes.add("whiteText", {
    type: "entity"
}),
SettingsMain.attributes.add("redText", {
    type: "entity"
}),
SettingsMain.attributes.add("blueText", {
    type: "entity"
}),
SettingsMain.attributes.add("greenText", {
    type: "entity"
}),
SettingsMain.attributes.add("yellowText", {
    type: "entity"
}),
SettingsMain.attributes.add("purpleText", {
    type: "entity"
}),
SettingsMain.prototype.initialize = function() {
    this.settings = this.app.root.findByName("Settings"),
    this.backButton.enabled = !0,
    isMobile || (this.fovSlider.enabled = !0,
    this.fovText.enabled = !0,
    this.sensSlider.enabled = !0,
    this.sensText.enabled = !0,
    this.sensitivity.enabled = !0,
    this.fov.enabled = !0,
    this.defaults.enabled = !0),
    isMobile && (this.sound.setLocalPosition(0, 172.837, 0),
    this.sound.element.fontSize = 45,
    this.enabledButton.setLocalPosition(0, 110.837, 0),
    this.enabledButton.element.height = 50,
    this.enabledButton.element.width = 50,
    this.enabledButtonText.element.height = 42,
    this.enabledButtonText.element.width = 42,
    this.disabledButton.setLocalPosition(0, 110.837, 0),
    this.disabledButton.element.height = 50,
    this.disabledButton.element.width = 50,
    this.disabledButtonText.element.height = 42,
    this.disabledButtonText.element.width = 42,
    this.crosshair.setLocalPosition(0, 20.837, 0),
    this.crosshair.element.fontSize = 45,
    this.white.setLocalPosition(-300, -50.837, 0),
    this.white.element.height = 50,
    this.white.element.width = 50,
    this.whiteText.element.height = 42,
    this.whiteText.element.width = 42,
    this.red.setLocalPosition(-200, -50.837, 0),
    this.red.element.height = 50,
    this.red.element.width = 50,
    this.redText.element.height = 42,
    this.redText.element.width = 42,
    this.blue.setLocalPosition(-100, -50.837, 0),
    this.blue.element.height = 50,
    this.blue.element.width = 50,
    this.blueText.element.height = 42,
    this.blueText.element.width = 42,
    this.green.setLocalPosition(0, -50.837, 0),
    this.green.element.height = 50,
    this.green.element.width = 50,
    this.greenText.element.height = 42,
    this.greenText.element.width = 42,
    this.yellow.setLocalPosition(100, -50.837, 0),
    this.yellow.element.height = 50,
    this.yellow.element.width = 50,
    this.yellowText.element.height = 42,
    this.yellowText.element.width = 42,
    this.purple.setLocalPosition(200, -50.837, 0),
    this.purple.element.height = 50,
    this.purple.element.width = 50,
    this.purpleText.element.height = 42,
    this.purpleText.element.width = 42,
    this.final.setLocalPosition(300, -50.837, 0),
    this.final.element.height = 150,
    this.final.element.width = 150,
    this.resetProg.setLocalPosition(0, -170, 0),
    this.resetProg.element.height = 100,
    this.resetProg.element.width = 200,
    this.resetText.element.fontSize = 43),
    this.sound.enabled = !0,
    this.crosshair.enabled = !0,
    this.resetProg.enabled = !0,
    this.enabledButton.enabled = !0,
    this.disabledButton.enabled = !0,
    this.white.enabled = !0,
    this.red.enabled = !0,
    this.blue.enabled = !0,
    this.green.enabled = !0,
    this.yellow.enabled = !0,
    this.purple.enabled = !0,
    "true" === localStorage.getItem("sound") ? this.settings.script.soundButton.onEnable() : "false" !== localStorage.getItem("sound") && null !== localStorage.getItem("sound") || this.settings.script.soundButton.onDisable(),
    this.white.button.on("click", this.onWhite, this),
    this.red.button.on("click", this.onRed, this),
    this.blue.button.on("click", this.onBlue, this),
    this.green.button.on("click", this.onGreen, this),
    this.yellow.button.on("click", this.onYellow, this),
    this.purple.button.on("click", this.onPurple, this)
}
,
SettingsMain.prototype.onWhite = function() {
    this.entity.script.crosshair2.crosshairWhite(),
    localStorage.removeItem("red"),
    localStorage.removeItem("blue"),
    localStorage.removeItem("green"),
    localStorage.removeItem("yellow"),
    localStorage.removeItem("purple")
}
,
SettingsMain.prototype.onRed = function() {
    this.entity.script.crosshair2.crosshairRed(),
    localStorage.removeItem("white"),
    localStorage.removeItem("blue"),
    localStorage.removeItem("green"),
    localStorage.removeItem("yellow"),
    localStorage.removeItem("purple")
}
,
SettingsMain.prototype.onBlue = function() {
    this.entity.script.crosshair2.crosshairBlue(),
    localStorage.removeItem("white"),
    localStorage.removeItem("red"),
    localStorage.removeItem("green"),
    localStorage.removeItem("yellow"),
    localStorage.removeItem("purple")
}
,
SettingsMain.prototype.onGreen = function() {
    this.entity.script.crosshair2.crosshairGreen(),
    localStorage.removeItem("white"),
    localStorage.removeItem("red"),
    localStorage.removeItem("blue"),
    localStorage.removeItem("yellow"),
    localStorage.removeItem("purple")
}
,
SettingsMain.prototype.onYellow = function() {
    this.entity.script.crosshair2.crosshairYellow(),
    localStorage.removeItem("white"),
    localStorage.removeItem("red"),
    localStorage.removeItem("blue"),
    localStorage.removeItem("green"),
    localStorage.removeItem("purple")
}
,
SettingsMain.prototype.onPurple = function() {
    this.entity.script.crosshair2.crosshairPurple(),
    localStorage.removeItem("white"),
    localStorage.removeItem("red"),
    localStorage.removeItem("blue"),
    localStorage.removeItem("green"),
    localStorage.removeItem("yellow")
}
;
const Crosshair2 = pc.createScript("crosshair2");
Crosshair2.prototype.initialize = function() {
    this.crosshair = this.app.root.findByName("Crosshair"),
    this.topReticle = this.app.root.findByName("Top"),
    this.leftReticle = this.app.root.findByName("Left"),
    this.rightReticle = this.app.root.findByName("Right"),
    this.bottomReticle = this.app.root.findByName("Bottom"),
    localStorage.getItem("white") && (localStorage.removeItem("red"),
    localStorage.removeItem("blue"),
    localStorage.removeItem("green"),
    localStorage.removeItem("yellow"),
    localStorage.removeItem("purple"),
    this.topReticle.element.color = white,
    this.leftReticle.element.color = white,
    this.rightReticle.element.color = white,
    this.bottomReticle.element.color = white),
    localStorage.getItem("red") && (localStorage.removeItem("white"),
    localStorage.removeItem("blue"),
    localStorage.removeItem("green"),
    localStorage.removeItem("yellow"),
    localStorage.removeItem("purple"),
    this.topReticle.element.color = red,
    this.leftReticle.element.color = red,
    this.rightReticle.element.color = red,
    this.bottomReticle.element.color = red),
    localStorage.getItem("blue") && (localStorage.removeItem("white"),
    localStorage.removeItem("red"),
    localStorage.removeItem("green"),
    localStorage.removeItem("yellow"),
    localStorage.removeItem("purple"),
    this.topReticle.element.color = blue,
    this.leftReticle.element.color = blue,
    this.rightReticle.element.color = blue,
    this.bottomReticle.element.color = blue),
    localStorage.getItem("green") && (localStorage.removeItem("white"),
    localStorage.removeItem("red"),
    localStorage.removeItem("blue"),
    localStorage.removeItem("yellow"),
    localStorage.removeItem("purple"),
    this.topReticle.element.color = green,
    this.leftReticle.element.color = green,
    this.rightReticle.element.color = green,
    this.bottomReticle.element.color = green),
    localStorage.getItem("yellow") && (localStorage.removeItem("white"),
    localStorage.removeItem("red"),
    localStorage.removeItem("blue"),
    localStorage.removeItem("green"),
    localStorage.removeItem("purple"),
    this.topReticle.element.color = yellow,
    this.leftReticle.element.color = yellow,
    this.rightReticle.element.color = yellow,
    this.bottomReticle.element.color = yellow),
    localStorage.getItem("purple") && (localStorage.removeItem("white"),
    localStorage.removeItem("red"),
    localStorage.removeItem("blue"),
    localStorage.removeItem("green"),
    localStorage.removeItem("yellow"),
    this.topReticle.element.color = purple,
    this.leftReticle.element.color = purple,
    this.rightReticle.element.color = purple,
    this.bottomReticle.element.color = purple)
}
,
Crosshair2.prototype.crosshairWhite = function() {
    localStorage.setItem("white", white),
    this.topReticle.element.color = white,
    this.leftReticle.element.color = white,
    this.rightReticle.element.color = white,
    this.bottomReticle.element.color = white
}
,
Crosshair2.prototype.crosshairRed = function() {
    localStorage.setItem("red", red),
    this.topReticle.element.color = red,
    this.leftReticle.element.color = red,
    this.rightReticle.element.color = red,
    this.bottomReticle.element.color = red
}
,
Crosshair2.prototype.crosshairBlue = function() {
    localStorage.setItem("blue", blue),
    this.topReticle.element.color = blue,
    this.leftReticle.element.color = blue,
    this.rightReticle.element.color = blue,
    this.bottomReticle.element.color = blue
}
,
Crosshair2.prototype.crosshairGreen = function() {
    localStorage.setItem("green", green),
    this.topReticle.element.color = green,
    this.leftReticle.element.color = green,
    this.rightReticle.element.color = green,
    this.bottomReticle.element.color = green
}
,
Crosshair2.prototype.crosshairYellow = function() {
    localStorage.setItem("yellow", yellow),
    this.topReticle.element.color = yellow,
    this.leftReticle.element.color = yellow,
    this.rightReticle.element.color = yellow,
    this.bottomReticle.element.color = yellow
}
,
Crosshair2.prototype.crosshairPurple = function() {
    localStorage.setItem("purple", purple),
    this.topReticle.element.color = purple,
    this.leftReticle.element.color = purple,
    this.rightReticle.element.color = purple,
    this.bottomReticle.element.color = purple
}
;
var Controls = pc.createScript("controls");
Controls.attributes.add("backButton", {
    type: "entity"
}),
Controls.prototype.initialize = function() {
    this.backButton.enabled = !0,
    this.backButton.button.on("click", this.onClickBack, this)
}
,
Controls.prototype.onClickBack = function() {}
;
var OrbitCameraTouchJoypadInput = pc.createScript("orbitCameraTouchJoypadInput");
OrbitCameraTouchJoypadInput.attributes.add("joystickId", {
    type: "string"
}),
OrbitCameraTouchJoypadInput.attributes.add("orbitSensitivity", {
    type: "number",
    default: .3,
    title: "Orbit Sensitivity",
    description: "How fast the camera moves around the orbit. Higher is faster"
}),
OrbitCameraTouchJoypadInput.prototype.initialize = function() {
    this.orbitCamera = this.entity.script.orbitCamera
}
,
OrbitCameraTouchJoypadInput.prototype.update = function(t) {
    const i = window.touchJoypad.sticks[this.joystickId];
    this.orbitCamera.pitch += i.y * this.orbitSensitivity * t,
    this.orbitCamera.yaw -= i.x * this.orbitSensitivity * t
}
;
var Ramp = pc.createScript("ramp");
Ramp.prototype.initialize = function() {
    this.entity.collision.on("collisionstart", this.onTriggerEnter, this)
}
,
Ramp.prototype.onTriggerEnter = function(i) {
    i.other.rigidbody.applyImpulse(0, 0, 2e3)
}
;
var RotateSecret = pc.createScript("rotateSecret");
RotateSecret.prototype.update = function(t) {
    this.entity.rotateLocal(0, 30 * t, 0)
}
;
var Time = pc.createScript("time");
Time.attributes.add("timeText", {
    type: "entity"
});
let timerID, isCounting = !1, time = 0, timeStr = 0;
Time.prototype.initialize = function() {
    this.startStopwatch()
}
,
Time.prototype.startStopwatch = function() {
    timerID = setInterval(this.countUp, 10),
    isCounting = !0
}
,
Time.prototype.stopStopwatch = function() {
    clearInterval(timerID),
    isCounting = !1
}
,
Time.prototype.resetStopwatch = function() {
    time = 0,
    this.timeText.element.text = "00:00:00"
}
,
Time.prototype.countUp = function() {
    time++;
    let t = Math.floor(time / 100 / 60)
      , e = Math.floor(time / 100);
    e >= 60 && (e %= 60);
    let i = Math.floor(time % 100);
    timeStr = `${t > 9 ? t : "0" + t}:${e > 9 ? e : "0" + e}:${i > 9 ? i : "0" + i}`
}
,
Time.prototype.update = function() {
    this.timeText.element.text = timeStr
}
;
var TaterSlow = pc.createScript("taterSlow");
TaterSlow.prototype.update = function(t) {
    let e = 37;
    isMobile && (e = 36),
    this.entity.rotateLocal(0, e * t, 0)
}
;
var Hamsii = pc.createScript("hamsii");
Hamsii.attributes.add("achone", {
    type: "entity"
}),
Hamsii.attributes.add("achoneB", {
    type: "entity"
}),
Hamsii.attributes.add("achtwo", {
    type: "entity"
}),
Hamsii.attributes.add("achtwoB", {
    type: "entity"
}),
Hamsii.attributes.add("achthree", {
    type: "entity"
}),
Hamsii.attributes.add("achthreeB", {
    type: "entity"
}),
Hamsii.attributes.add("achfour", {
    type: "entity"
}),
Hamsii.attributes.add("achfourB", {
    type: "entity"
}),
Hamsii.attributes.add("achfive", {
    type: "entity"
}),
Hamsii.attributes.add("achfiveB", {
    type: "entity"
}),
Hamsii.attributes.add("achsix", {
    type: "entity"
}),
Hamsii.attributes.add("achsixB", {
    type: "entity"
});
let secs = !1;
Hamsii.prototype.initialize = function() {
    "true" === localStorage.getItem("ach1") ? (this.achone.enabled = !0,
    this.achoneB.enabled = !1) : (this.achone.enabled = !1,
    this.achoneB.enabled = !0),
    "true" === localStorage.getItem("sec1") && "true" === localStorage.getItem("sec2") && "true" === localStorage.getItem("sec3") && "true" === localStorage.getItem("sec4") && "true" === localStorage.getItem("sec5") && (secs = !0,
    localStorage.setItem("secs", secs)),
    "true" === localStorage.getItem("secs") ? (this.achtwo.enabled = !0,
    this.achtwoB.enabled = !1) : (this.achtwo.enabled = !1,
    this.achtwoB.enabled = !0),
    "true" === localStorage.getItem("ach3") ? (this.achthree.enabled = !0,
    this.achthreeB.enabled = !1) : (this.achthree.enabled = !1,
    this.achthreeB.enabled = !0),
    "true" === localStorage.getItem("ach4") ? (this.achfour.enabled = !0,
    this.achfourB.enabled = !1) : (this.achfour.enabled = !1,
    this.achfourB.enabled = !0),
    "true" === localStorage.getItem("ach5") ? (this.achfive.enabled = !0,
    this.achfiveB.enabled = !1) : (this.achfive.enabled = !1,
    this.achfiveB.enabled = !0),
    "true" === localStorage.getItem("ach6") ? (this.achsix.enabled = !0,
    this.achsixB.enabled = !1) : (this.achsix.enabled = !1,
    this.achsixB.enabled = !0)
}
;
var Progr = pc.createScript("progr");
Progr.prototype.initialize = function() {
    this.entity.button.once("click", this.onClick, this)
}
,
Progr.prototype.onClick = function() {
    localStorage.clear(location.reload())
}
;
var Defaults = pc.createScript("defaults");
Defaults.prototype.initialize = function() {
    this.slider = this.app.root.findByName("Slider"),
    this.slider2 = this.app.root.findByName("Slider2"),
    this.settings = this.app.root.findByName("Settings"),
    this.entity.button.on("click", this.onClick, this)
}
,
Defaults.prototype.onClick = function() {
    this.slider.script.slider.element.value = 60,
    this.slider2.script.slider2.element.value = .09,
    this.settings.script.crosshair2.crosshairWhite(),
    this.settings.script.soundButton.onDisable()
}
;
var SoundButton = pc.createScript("soundButton");
SoundButton.attributes.add("enableButton", {
    type: "entity"
}),
SoundButton.attributes.add("disableButton", {
    type: "entity"
}),
SoundButton.attributes.add("player", {
    type: "entity"
});
let sound = !0;
SoundButton.prototype.initialize = function() {
    this.enableButton.button.on("click", this.onEnable, this),
    this.disableButton.button.on("click", this.onDisable, this)
}
,
SoundButton.prototype.onEnable = function() {
    this.enableButton.enabled = !1,
    this.disableButton.enabled = !0,
    sound = !0,
    this.player.sound.enabled = !1,
    localStorage.setItem("sound", sound)
}
,
SoundButton.prototype.onDisable = function() {
    this.enableButton.enabled = !0,
    this.disableButton.enabled = !1,
    sound = !1,
    this.player.sound.enabled = !0,
    localStorage.setItem("sound", sound)
}
;
var Tiles2 = pc.createScript("tiles2");
Tiles2.attributes.add("box1", {
    type: "entity"
}),
Tiles2.attributes.add("box2", {
    type: "entity"
}),
Tiles2.attributes.add("box3", {
    type: "entity"
}),
Tiles2.attributes.add("box4", {
    type: "entity"
}),
Tiles2.attributes.add("box5", {
    type: "entity"
}),
Tiles2.attributes.add("box6", {
    type: "entity"
}),
Tiles2.attributes.add("box7", {
    type: "entity"
}),
Tiles2.attributes.add("box8", {
    type: "entity"
}),
Tiles2.attributes.add("box9", {
    type: "entity"
}),
Tiles2.attributes.add("box10", {
    type: "entity"
}),
Tiles2.attributes.add("box11", {
    type: "entity"
}),
Tiles2.attributes.add("box12", {
    type: "entity"
}),
Tiles2.attributes.add("box13", {
    type: "entity"
}),
Tiles2.attributes.add("box14", {
    type: "entity"
}),
Tiles2.attributes.add("box15", {
    type: "entity"
}),
Tiles2.attributes.add("box16", {
    type: "entity"
}),
Tiles2.attributes.add("box17", {
    type: "entity"
}),
Tiles2.attributes.add("box18", {
    type: "entity"
}),
Tiles2.attributes.add("box19", {
    type: "entity"
}),
Tiles2.attributes.add("box20", {
    type: "entity"
}),
Tiles2.attributes.add("box21", {
    type: "entity"
}),
Tiles2.attributes.add("box22", {
    type: "entity"
}),
Tiles2.attributes.add("box23", {
    type: "entity"
}),
Tiles2.attributes.add("box24", {
    type: "entity"
}),
Tiles2.attributes.add("box25", {
    type: "entity"
}),
Tiles2.attributes.add("box26", {
    type: "entity"
}),
Tiles2.attributes.add("box27", {
    type: "entity"
}),
Tiles2.attributes.add("box28", {
    type: "entity"
}),
Tiles2.attributes.add("boxr", {
    type: "entity"
}),
Tiles2.attributes.add("boxb", {
    type: "entity"
}),
Tiles2.attributes.add("boxg", {
    type: "entity"
}),
Tiles2.attributes.add("boxy", {
    type: "entity"
}),
Tiles2.prototype.initialize = function() {
    this.timer = 0
}
,
Tiles2.prototype.update = function(t) {
    this.timer += t,
    this.timer > 1.5 && (this.box1.enabled = !1,
    this.box6.enabled = !1,
    this.box11.enabled = !1,
    this.box16.enabled = !1,
    this.box17.enabled = !1,
    this.box24.enabled = !1,
    this.box25.enabled = !1,
    this.boxr.enabled = !1),
    this.timer > 3 && (this.box2.enabled = !1,
    this.box5.enabled = !1,
    this.box10.enabled = !1,
    this.box15.enabled = !1,
    this.box20.enabled = !1,
    this.box23.enabled = !1,
    this.box26.enabled = !1,
    this.boxb.enabled = !1,
    this.box1.enabled = !0,
    this.box6.enabled = !0,
    this.box11.enabled = !0,
    this.box16.enabled = !0,
    this.box17.enabled = !0,
    this.box24.enabled = !0,
    this.box25.enabled = !0,
    this.boxr.enabled = !0),
    this.timer > 4.5 && (this.box3.enabled = !1,
    this.box8.enabled = !1,
    this.box12.enabled = !1,
    this.box13.enabled = !1,
    this.box18.enabled = !1,
    this.box21.enabled = !1,
    this.box27.enabled = !1,
    this.boxg.enabled = !1,
    this.box2.enabled = !0,
    this.box5.enabled = !0,
    this.box10.enabled = !0,
    this.box15.enabled = !0,
    this.box20.enabled = !0,
    this.box23.enabled = !0,
    this.box26.enabled = !0,
    this.boxb.enabled = !0),
    this.timer > 6 && (this.box4.enabled = !1,
    this.box7.enabled = !1,
    this.box9.enabled = !1,
    this.box14.enabled = !1,
    this.box19.enabled = !1,
    this.box22.enabled = !1,
    this.box28.enabled = !1,
    this.boxy.enabled = !1,
    this.box3.enabled = !0,
    this.box8.enabled = !0,
    this.box12.enabled = !0,
    this.box13.enabled = !0,
    this.box18.enabled = !0,
    this.box21.enabled = !0,
    this.box27.enabled = !0,
    this.boxg.enabled = !0),
    this.timer > 7.5 && (this.timer = 0,
    this.box4.enabled = !0,
    this.box7.enabled = !0,
    this.box9.enabled = !0,
    this.box14.enabled = !0,
    this.box19.enabled = !0,
    this.box22.enabled = !0,
    this.box28.enabled = !0,
    this.boxy.enabled = !0)
}
;
var Tiles3 = pc.createScript("tiles3");
Tiles3.attributes.add("box1", {
    type: "entity"
}),
Tiles3.attributes.add("box2", {
    type: "entity"
}),
Tiles3.attributes.add("box3", {
    type: "entity"
}),
Tiles3.attributes.add("box4", {
    type: "entity"
}),
Tiles3.attributes.add("box5", {
    type: "entity"
}),
Tiles3.attributes.add("box6", {
    type: "entity"
}),
Tiles3.prototype.initialize = function() {
    this.timer = 0
}
,
Tiles3.prototype.update = function(t) {
    this.timer += t,
    this.timer > 1.5 && (this.box1.enabled = !0,
    this.box2.enabled = !0,
    this.box3.enabled = !0,
    this.box4.enabled = !1,
    this.box5.enabled = !1,
    this.box6.enabled = !1),
    this.timer > 3 && (this.timer = 0,
    this.box4.enabled = !0,
    this.box5.enabled = !0,
    this.box6.enabled = !0,
    this.box1.enabled = !1,
    this.box2.enabled = !1,
    this.box3.enabled = !1)
}
;
var TriggerPurple = pc.createScript("triggerPurple");
TriggerPurple.attributes.add("blue", {
    type: "entity"
}),
TriggerPurple.attributes.add("blueBox", {
    type: "entity"
}),
TriggerPurple.attributes.add("blue3", {
    type: "entity"
}),
TriggerPurple.attributes.add("box1", {
    type: "entity"
}),
TriggerPurple.attributes.add("box2", {
    type: "entity"
}),
TriggerPurple.attributes.add("box3", {
    type: "entity"
}),
TriggerPurple.attributes.add("box4", {
    type: "entity"
}),
TriggerPurple.attributes.add("box5", {
    type: "entity"
}),
TriggerPurple.attributes.add("box6", {
    type: "entity"
}),
TriggerPurple.attributes.add("box7", {
    type: "entity"
}),
TriggerPurple.attributes.add("box8", {
    type: "entity"
}),
TriggerPurple.attributes.add("box9", {
    type: "entity"
}),
TriggerPurple.attributes.add("box10", {
    type: "entity"
}),
TriggerPurple.attributes.add("box11", {
    type: "entity"
}),
TriggerPurple.attributes.add("box12", {
    type: "entity"
}),
TriggerPurple.attributes.add("box13", {
    type: "entity"
}),
TriggerPurple.attributes.add("box14", {
    type: "entity"
}),
TriggerPurple.attributes.add("box15", {
    type: "entity"
}),
TriggerPurple.attributes.add("box16", {
    type: "entity"
}),
TriggerPurple.attributes.add("box17", {
    type: "entity"
}),
TriggerPurple.attributes.add("box18", {
    type: "entity"
}),
TriggerPurple.attributes.add("box19", {
    type: "entity"
}),
TriggerPurple.attributes.add("box20", {
    type: "entity"
}),
TriggerPurple.attributes.add("box21", {
    type: "entity"
}),
TriggerPurple.attributes.add("box22", {
    type: "entity"
}),
TriggerPurple.attributes.add("box23", {
    type: "entity"
}),
TriggerPurple.attributes.add("box24", {
    type: "entity"
}),
TriggerPurple.attributes.add("box25", {
    type: "entity"
}),
TriggerPurple.attributes.add("box26", {
    type: "entity"
}),
TriggerPurple.attributes.add("box27", {
    type: "entity"
}),
TriggerPurple.attributes.add("box28", {
    type: "entity"
}),
TriggerPurple.attributes.add("box29", {
    type: "entity"
}),
TriggerPurple.attributes.add("box30", {
    type: "entity"
}),
TriggerPurple.attributes.add("box31", {
    type: "entity"
}),
TriggerPurple.attributes.add("box32", {
    type: "entity"
}),
TriggerPurple.attributes.add("clock", {
    type: "entity"
}),
TriggerPurple.prototype.initialize = function() {
    this.player = this.app.root.findByName("Player"),
    this.timer = 21,
    this.activated = !1,
    this.box1.enabled = !1,
    this.box2.enabled = !1,
    this.box3.enabled = !1,
    this.box4.enabled = !1,
    this.box5.enabled = !1,
    this.box6.enabled = !1,
    this.box7.enabled = !1,
    this.box8.enabled = !1,
    this.box9.enabled = !1,
    this.box10.enabled = !1,
    this.box11.enabled = !1,
    this.box12.enabled = !1,
    this.box13.enabled = !1,
    this.box14.enabled = !1,
    this.box15.enabled = !1,
    this.box16.enabled = !1,
    this.box17.enabled = !1,
    this.box18.enabled = !1,
    this.box19.enabled = !1,
    this.box20.enabled = !1,
    this.box21.enabled = !1,
    this.box22.enabled = !1,
    this.box23.enabled = !1,
    this.box24.enabled = !1,
    this.box25.enabled = !1,
    this.box26.enabled = !1,
    this.box27.enabled = !1,
    this.box28.enabled = !1,
    this.box29.enabled = !1,
    this.box30.enabled = !1,
    this.box31.enabled = !1,
    this.box32.enabled = !1,
    this.blue.collision.on("triggerenter", this.onTriggerEnter, this)
}
,
TriggerPurple.prototype.onTriggerEnter = function(e) {
    "Player" == e.collision.entity.name && ("false" === localStorage.getItem("sound") && (this.player.sound.slot(6).isPlaying || this.player.sound.slot(6).play()),
    this.blue.enabled = !1,
    this.blueBox.enabled = !1,
    this.blue3.enabled = !1,
    this.activated = !0,
    this.box1.enabled = !0,
    this.box2.enabled = !0,
    this.box3.enabled = !0,
    this.box4.enabled = !0,
    this.box5.enabled = !0,
    this.box6.enabled = !0,
    this.box7.enabled = !0,
    this.box8.enabled = !0,
    this.box9.enabled = !0,
    this.box10.enabled = !0,
    this.box11.enabled = !0,
    this.box12.enabled = !0,
    this.box13.enabled = !0,
    this.box14.enabled = !0,
    this.box15.enabled = !0,
    this.box16.enabled = !0,
    this.box17.enabled = !0,
    this.box18.enabled = !0,
    this.box19.enabled = !0,
    this.box20.enabled = !0,
    this.box21.enabled = !0,
    this.box22.enabled = !0,
    this.box23.enabled = !0,
    this.box24.enabled = !0,
    this.box25.enabled = !0,
    this.box26.enabled = !0,
    this.box27.enabled = !0,
    this.box28.enabled = !0,
    this.box29.enabled = !0,
    this.box30.enabled = !0,
    this.box31.enabled = !0,
    this.box32.enabled = !0)
}
,
TriggerPurple.prototype.update = function(e) {
    this.activated && (this.timer -= e,
    this.clock.element.enabled = !0,
    this.clock.element.text = this.timer.toFixed(0),
    this.timer <= 0 && (this.box1.enabled = !1,
    this.box2.enabled = !1,
    this.box3.enabled = !1,
    this.box4.enabled = !1,
    this.box5.enabled = !1,
    this.box6.enabled = !1,
    this.box7.enabled = !1,
    this.box8.enabled = !1,
    this.box9.enabled = !1,
    this.box10.enabled = !1,
    this.box11.enabled = !1,
    this.box12.enabled = !1,
    this.box13.enabled = !1,
    this.box14.enabled = !1,
    this.box15.enabled = !1,
    this.box16.enabled = !1,
    this.box17.enabled = !1,
    this.box18.enabled = !1,
    this.box19.enabled = !1,
    this.box20.enabled = !1,
    this.box21.enabled = !1,
    this.box22.enabled = !1,
    this.box23.enabled = !1,
    this.box24.enabled = !1,
    this.box25.enabled = !1,
    this.box26.enabled = !1,
    this.box27.enabled = !1,
    this.box28.enabled = !1,
    this.box29.enabled = !1,
    this.box30.enabled = !1,
    this.box31.enabled = !1,
    this.box32.enabled = !1,
    this.blue.enabled = !0,
    this.blueBox.enabled = !0,
    this.blue3.enabled = !0,
    this.activated = !1,
    this.timer = 21,
    this.clock.element.enabled = !1))
}
;
var TilesFinal = pc.createScript("tilesFinal");
TilesFinal.attributes.add("box1", {
    type: "entity"
}),
TilesFinal.attributes.add("box2", {
    type: "entity"
}),
TilesFinal.attributes.add("box3", {
    type: "entity"
}),
TilesFinal.attributes.add("box4", {
    type: "entity"
}),
TilesFinal.attributes.add("box5", {
    type: "entity"
}),
TilesFinal.attributes.add("box6", {
    type: "entity"
}),
TilesFinal.attributes.add("box7", {
    type: "entity"
}),
TilesFinal.attributes.add("box8", {
    type: "entity"
}),
TilesFinal.attributes.add("box9", {
    type: "entity"
}),
TilesFinal.attributes.add("box10", {
    type: "entity"
}),
TilesFinal.attributes.add("box11", {
    type: "entity"
}),
TilesFinal.attributes.add("box12", {
    type: "entity"
}),
TilesFinal.attributes.add("box111", {
    type: "entity"
}),
TilesFinal.attributes.add("box222", {
    type: "entity"
}),
TilesFinal.attributes.add("box333", {
    type: "entity"
}),
TilesFinal.attributes.add("box444", {
    type: "entity"
}),
TilesFinal.attributes.add("box555", {
    type: "entity"
}),
TilesFinal.attributes.add("box666", {
    type: "entity"
}),
TilesFinal.attributes.add("box777", {
    type: "entity"
}),
TilesFinal.attributes.add("box888", {
    type: "entity"
}),
TilesFinal.attributes.add("box999", {
    type: "entity"
}),
TilesFinal.attributes.add("box1000", {
    type: "entity"
}),
TilesFinal.attributes.add("box1100", {
    type: "entity"
}),
TilesFinal.attributes.add("box1200", {
    type: "entity"
}),
TilesFinal.prototype.initialize = function() {
    this.timer1 = 0,
    this.timer2 = 0,
    this.timer3 = 0,
    this.timer4 = 0,
    this.timer5 = 0,
    this.timer6 = 0,
    this.timer7 = 0,
    this.timer8 = 0,
    this.timer9 = 0,
    this.timer10 = 0,
    this.timer11 = 0,
    this.timer12 = 0,
    this.box1.collision.on("collisionstart", this.onTriggerEnter1, this),
    this.box2.collision.on("collisionstart", this.onTriggerEnter2, this),
    this.box3.collision.on("collisionstart", this.onTriggerEnter3, this),
    this.box4.collision.on("collisionstart", this.onTriggerEnter4, this),
    this.box5.collision.on("collisionstart", this.onTriggerEnter5, this),
    this.box6.collision.on("collisionstart", this.onTriggerEnter6, this),
    this.box7.collision.on("collisionstart", this.onTriggerEnter7, this),
    this.box8.collision.on("collisionstart", this.onTriggerEnter8, this),
    this.box9.collision.on("collisionstart", this.onTriggerEnter9, this),
    this.box10.collision.on("collisionstart", this.onTriggerEnter10, this),
    this.box11.collision.on("collisionstart", this.onTriggerEnter11, this),
    this.box12.collision.on("collisionstart", this.onTriggerEnter12, this)
}
,
TilesFinal.prototype.onTriggerEnter1 = function() {
    this.active1 = !0
}
,
TilesFinal.prototype.onTriggerEnter2 = function() {
    this.active2 = !0
}
,
TilesFinal.prototype.onTriggerEnter3 = function() {
    this.active3 = !0
}
,
TilesFinal.prototype.onTriggerEnter4 = function() {
    this.active4 = !0
}
,
TilesFinal.prototype.onTriggerEnter5 = function() {
    this.active5 = !0
}
,
TilesFinal.prototype.onTriggerEnter6 = function() {
    this.active6 = !0
}
,
TilesFinal.prototype.onTriggerEnter7 = function() {
    this.active7 = !0
}
,
TilesFinal.prototype.onTriggerEnter8 = function() {
    this.active8 = !0
}
,
TilesFinal.prototype.onTriggerEnter9 = function() {
    this.active9 = !0
}
,
TilesFinal.prototype.onTriggerEnter10 = function() {
    this.active10 = !0
}
,
TilesFinal.prototype.onTriggerEnter11 = function() {
    this.active11 = !0
}
,
TilesFinal.prototype.onTriggerEnter12 = function() {
    this.active12 = !0
}
,
TilesFinal.prototype.update = function(t) {
    this.active1 && (this.timer1 += t,
    this.timer1 > .2 && (this.box1.enabled = !1,
    this.box111.enabled = !1),
    this.timer1 > 2.5 && (this.timer1 = 0,
    this.active1 = !1,
    this.box1.enabled = !0,
    this.box111.enabled = !0)),
    this.active2 && (this.timer2 += t,
    this.timer2 > .2 && (this.box2.enabled = !1,
    this.box222.enabled = !1),
    this.timer2 > 2.5 && (this.timer2 = 0,
    this.active2 = !1,
    this.box2.enabled = !0,
    this.box222.enabled = !0)),
    this.active3 && (this.timer3 += t,
    this.timer3 > .2 && (this.box3.enabled = !1,
    this.box333.enabled = !1),
    this.timer3 > 2.5 && (this.timer3 = 0,
    this.active3 = !1,
    this.box3.enabled = !0,
    this.box333.enabled = !0)),
    this.active4 && (this.timer4 += t,
    this.timer4 > .2 && (this.box4.enabled = !1,
    this.box444.enabled = !1),
    this.timer4 > 2.5 && (this.timer4 = 0,
    this.active4 = !1,
    this.box4.enabled = !0,
    this.box444.enabled = !0)),
    this.active5 && (this.timer5 += t,
    this.timer5 > .2 && (this.box5.enabled = !1,
    this.box555.enabled = !1),
    this.timer5 > 2.5 && (this.timer5 = 0,
    this.active5 = !1,
    this.box5.enabled = !0,
    this.box555.enabled = !0)),
    this.active6 && (this.timer6 += t,
    this.timer6 > .5 && (this.box6.enabled = !1,
    this.box666.enabled = !1),
    this.timer6 > 2.5 && (this.timer6 = 0,
    this.active6 = !1,
    this.box6.enabled = !0,
    this.box666.enabled = !0)),
    this.active7 && (this.timer7 += t,
    this.timer7 > .2 && (this.box7.enabled = !1,
    this.box777.enabled = !1),
    this.timer7 > 2.5 && (this.timer7 = 0,
    this.active7 = !1,
    this.box7.enabled = !0,
    this.box777.enabled = !0)),
    this.active8 && (this.timer8 += t,
    this.timer8 > .2 && (this.box8.enabled = !1,
    this.box888.enabled = !1),
    this.timer8 > 2.5 && (this.timer8 = 0,
    this.active8 = !1,
    this.box8.enabled = !0,
    this.box888.enabled = !0)),
    this.active9 && (this.timer9 += t,
    this.timer9 > .2 && (this.box9.enabled = !1,
    this.box999.enabled = !1),
    this.timer9 > 2.5 && (this.timer9 = 0,
    this.active9 = !1,
    this.box9.enabled = !0,
    this.box999.enabled = !0)),
    this.active10 && (this.timer10 += t,
    this.timer10 > .2 && (this.box10.enabled = !1,
    this.box1000.enabled = !1),
    this.timer10 > 2.5 && (this.timer10 = 0,
    this.active10 = !1,
    this.box10.enabled = !0,
    this.box1000.enabled = !0)),
    this.active11 && (this.timer11 += t,
    this.timer11 > .2 && (this.box11.enabled = !1,
    this.box1100.enabled = !1),
    this.timer11 > 2.5 && (this.timer11 = 0,
    this.active11 = !1,
    this.box11.enabled = !0,
    this.box1100.enabled = !0)),
    this.active12 && (this.timer12 += t,
    this.timer12 > .2 && (this.box12.enabled = !1,
    this.box1200.enabled = !1),
    this.timer12 > 2.5 && (this.timer12 = 0,
    this.active12 = !1,
    this.box12.enabled = !0,
    this.box1200.enabled = !0))
}
;
const TeleRespawn = pc.createScript("teleRespawn");
TeleRespawn.prototype.initialize = function() {
    this.velocity = new pc.Vec3,
    this.respawn = this.app.root.findByName("Respawn"),
    this.camera = this.app.root.findByName("Camera"),
    this.spawn = this.respawn.getPosition().clone(),
    this.entity.collision.on("triggerenter", this.onTriggerEnter, this)
}
,
TeleRespawn.prototype.onTriggerEnter = function(e) {
    "Player" == e.collision.entity.name && (e.rigidbody.teleport(this.spawn),
    e.rigidbody.linearVelocity = this.velocity.set(0, 0, 0),
    e.rigidbody.angularVelocity = new pc.Vec3(0,0,0),
    this.camera.script.playerCamera.reset(),
    !0 === this.camera.script.orbitCamera.enabled && this.camera.script.orbitCamera.reset())
}
;
const InOut = pc.createScript("inOut");
InOut.attributes.add("wall1", {
    type: "entity"
}),
InOut.attributes.add("wall2", {
    type: "entity"
}),
InOut.attributes.add("wall3", {
    type: "entity"
}),
InOut.attributes.add("wall4", {
    type: "entity"
}),
InOut.attributes.add("wall5", {
    type: "entity"
}),
InOut.attributes.add("wall6", {
    type: "entity"
}),
InOut.attributes.add("wall7", {
    type: "entity"
}),
InOut.attributes.add("wall8", {
    type: "entity"
}),
InOut.prototype.initialize = function() {
    this.entity.collision.on("triggerenter", this.onTriggerEnter, this)
}
,
InOut.prototype.onTriggerEnter = function(t) {
    "Player" == t.collision.entity.name && (this.wall1.enabled = !1,
    this.wall2.enabled = !1,
    this.wall3.enabled = !1,
    this.wall4.enabled = !1,
    this.wall5.enabled = !0,
    this.wall6.enabled = !0,
    this.wall7.enabled = !0,
    this.wall8.enabled = !0,
    this.entity.destroy())
}
;
const Opacity2 = pc.createScript("opacity2");
Opacity2.prototype.initialize = function() {
    var t = this.entity.render.meshInstances[0].material;
    t.opacity = .2,
    t.blendType = pc.BLEND_NORMAL,
    t.update()
}
;
var TilesSecret = pc.createScript("tilesSecret");
TilesSecret.attributes.add("box1", {
    type: "entity"
}),
TilesSecret.attributes.add("box2", {
    type: "entity"
}),
TilesSecret.attributes.add("box3", {
    type: "entity"
}),
TilesSecret.attributes.add("box4", {
    type: "entity"
}),
TilesSecret.attributes.add("box5", {
    type: "entity"
}),
TilesSecret.attributes.add("box6", {
    type: "entity"
}),
TilesSecret.attributes.add("box7", {
    type: "entity"
}),
TilesSecret.attributes.add("box8", {
    type: "entity"
}),
TilesSecret.attributes.add("box9", {
    type: "entity"
}),
TilesSecret.attributes.add("box10", {
    type: "entity"
}),
TilesSecret.attributes.add("box11", {
    type: "entity"
}),
TilesSecret.attributes.add("box12", {
    type: "entity"
}),
TilesSecret.attributes.add("box13", {
    type: "entity"
}),
TilesSecret.attributes.add("box14", {
    type: "entity"
}),
TilesSecret.attributes.add("box15", {
    type: "entity"
}),
TilesSecret.attributes.add("box16", {
    type: "entity"
}),
TilesSecret.attributes.add("box17", {
    type: "entity"
}),
TilesSecret.attributes.add("box111", {
    type: "entity"
}),
TilesSecret.attributes.add("box222", {
    type: "entity"
}),
TilesSecret.attributes.add("box333", {
    type: "entity"
}),
TilesSecret.attributes.add("box444", {
    type: "entity"
}),
TilesSecret.attributes.add("box555", {
    type: "entity"
}),
TilesSecret.attributes.add("box666", {
    type: "entity"
}),
TilesSecret.attributes.add("box777", {
    type: "entity"
}),
TilesSecret.attributes.add("box888", {
    type: "entity"
}),
TilesSecret.attributes.add("box999", {
    type: "entity"
}),
TilesSecret.attributes.add("box1000", {
    type: "entity"
}),
TilesSecret.attributes.add("box1100", {
    type: "entity"
}),
TilesSecret.attributes.add("box1200", {
    type: "entity"
}),
TilesSecret.attributes.add("box1300", {
    type: "entity"
}),
TilesSecret.attributes.add("box1400", {
    type: "entity"
}),
TilesSecret.attributes.add("box1500", {
    type: "entity"
}),
TilesSecret.attributes.add("box1600", {
    type: "entity"
}),
TilesSecret.attributes.add("box1700", {
    type: "entity"
}),
TilesSecret.prototype.initialize = function() {
    this.timer1 = 0,
    this.timer2 = 0,
    this.timer3 = 0,
    this.timer4 = 0,
    this.timer5 = 0,
    this.timer6 = 0,
    this.timer7 = 0,
    this.timer8 = 0,
    this.timer9 = 0,
    this.timer10 = 0,
    this.timer11 = 0,
    this.timer12 = 0,
    this.timer13 = 0,
    this.timer14 = 0,
    this.timer15 = 0,
    this.timer16 = 0,
    this.timer17 = 0,
    this.box1.collision.on("collisionstart", this.onTriggerEnter1, this),
    this.box2.collision.on("collisionstart", this.onTriggerEnter2, this),
    this.box3.collision.on("collisionstart", this.onTriggerEnter3, this),
    this.box4.collision.on("collisionstart", this.onTriggerEnter4, this),
    this.box5.collision.on("collisionstart", this.onTriggerEnter5, this),
    this.box6.collision.on("collisionstart", this.onTriggerEnter6, this),
    this.box7.collision.on("collisionstart", this.onTriggerEnter7, this),
    this.box8.collision.on("collisionstart", this.onTriggerEnter8, this),
    this.box9.collision.on("collisionstart", this.onTriggerEnter9, this),
    this.box10.collision.on("collisionstart", this.onTriggerEnter10, this),
    this.box11.collision.on("collisionstart", this.onTriggerEnter11, this),
    this.box12.collision.on("collisionstart", this.onTriggerEnter12, this),
    this.box13.collision.on("collisionstart", this.onTriggerEnter13, this),
    this.box14.collision.on("collisionstart", this.onTriggerEnter14, this),
    this.box15.collision.on("collisionstart", this.onTriggerEnter15, this),
    this.box16.collision.on("collisionstart", this.onTriggerEnter16, this),
    this.box17.collision.on("collisionstart", this.onTriggerEnter17, this)
}
,
TilesSecret.prototype.onTriggerEnter1 = function() {
    this.active1 = !0
}
,
TilesSecret.prototype.onTriggerEnter2 = function() {
    this.active2 = !0
}
,
TilesSecret.prototype.onTriggerEnter3 = function() {
    this.active3 = !0
}
,
TilesSecret.prototype.onTriggerEnter4 = function() {
    this.active4 = !0
}
,
TilesSecret.prototype.onTriggerEnter5 = function() {
    this.active5 = !0
}
,
TilesSecret.prototype.onTriggerEnter6 = function() {
    this.active6 = !0
}
,
TilesSecret.prototype.onTriggerEnter7 = function() {
    this.active7 = !0
}
,
TilesSecret.prototype.onTriggerEnter8 = function() {
    this.active8 = !0
}
,
TilesSecret.prototype.onTriggerEnter9 = function() {
    this.active9 = !0
}
,
TilesSecret.prototype.onTriggerEnter10 = function() {
    this.active10 = !0
}
,
TilesSecret.prototype.onTriggerEnter11 = function() {
    this.active11 = !0
}
,
TilesSecret.prototype.onTriggerEnter12 = function() {
    this.active12 = !0
}
,
TilesSecret.prototype.onTriggerEnter13 = function() {
    this.active13 = !0
}
,
TilesSecret.prototype.onTriggerEnter14 = function() {
    this.active14 = !0
}
,
TilesSecret.prototype.onTriggerEnter15 = function() {
    this.active15 = !0
}
,
TilesSecret.prototype.onTriggerEnter16 = function() {
    this.active16 = !0
}
,
TilesSecret.prototype.onTriggerEnter17 = function() {
    this.active17 = !0
}
,
TilesSecret.prototype.update = function(t) {
    this.active1 && (this.timer1 += t,
    this.timer1 > .2 && (this.box1.enabled = !1,
    this.box111.enabled = !1),
    this.timer1 > 2.5 && (this.timer1 = 0,
    this.active1 = !1,
    this.box1.enabled = !0,
    this.box111.enabled = !0)),
    this.active2 && (this.timer2 += t,
    this.timer2 > .2 && (this.box2.enabled = !1,
    this.box222.enabled = !1),
    this.timer2 > 2.5 && (this.timer2 = 0,
    this.active2 = !1,
    this.box2.enabled = !0,
    this.box222.enabled = !0)),
    this.active3 && (this.timer3 += t,
    this.timer3 > .2 && (this.box3.enabled = !1,
    this.box333.enabled = !1),
    this.timer3 > 2.5 && (this.timer3 = 0,
    this.active3 = !1,
    this.box3.enabled = !0,
    this.box333.enabled = !0)),
    this.active4 && (this.timer4 += t,
    this.timer4 > .5 && (this.box4.enabled = !1,
    this.box444.enabled = !1),
    this.timer4 > 2.5 && (this.timer4 = 0,
    this.active4 = !1,
    this.box4.enabled = !0,
    this.box444.enabled = !0)),
    this.active5 && (this.timer5 += t,
    this.timer5 > .5 && (this.box5.enabled = !1,
    this.box555.enabled = !1),
    this.timer5 > 2.5 && (this.timer5 = 0,
    this.active5 = !1,
    this.box5.enabled = !0,
    this.box555.enabled = !0)),
    this.active6 && (this.timer6 += t,
    this.timer6 > .5 && (this.box6.enabled = !1,
    this.box666.enabled = !1),
    this.timer6 > 2.5 && (this.timer6 = 0,
    this.active6 = !1,
    this.box6.enabled = !0,
    this.box666.enabled = !0)),
    this.active7 && (this.timer7 += t,
    this.timer7 > .5 && (this.box7.enabled = !1,
    this.box777.enabled = !1),
    this.timer7 > 2.5 && (this.timer7 = 0,
    this.active7 = !1,
    this.box7.enabled = !0,
    this.box777.enabled = !0)),
    this.active8 && (this.timer8 += t,
    this.timer8 > .5 && (this.box8.enabled = !1,
    this.box888.enabled = !1),
    this.timer8 > 2.5 && (this.timer8 = 0,
    this.active8 = !1,
    this.box8.enabled = !0,
    this.box888.enabled = !0)),
    this.active9 && (this.timer9 += t,
    this.timer9 > .5 && (this.box9.enabled = !1,
    this.box999.enabled = !1),
    this.timer9 > 2.5 && (this.timer9 = 0,
    this.active9 = !1,
    this.box9.enabled = !0,
    this.box999.enabled = !0)),
    this.active10 && (this.timer10 += t,
    this.timer10 > .5 && (this.box10.enabled = !1,
    this.box1000.enabled = !1),
    this.timer10 > 2.5 && (this.timer10 = 0,
    this.active10 = !1,
    this.box10.enabled = !0,
    this.box1000.enabled = !0)),
    this.active11 && (this.timer11 += t,
    this.timer11 > .5 && (this.box11.enabled = !1,
    this.box1100.enabled = !1),
    this.timer11 > 2.5 && (this.timer11 = 0,
    this.active11 = !1,
    this.box11.enabled = !0,
    this.box1100.enabled = !0)),
    this.active12 && (this.timer12 += t,
    this.timer12 > .5 && (this.box12.enabled = !1,
    this.box1200.enabled = !1),
    this.timer12 > 2.5 && (this.timer12 = 0,
    this.active12 = !1,
    this.box12.enabled = !0,
    this.box1200.enabled = !0)),
    this.active13 && (this.timer13 += t,
    this.timer13 > .7 && (this.box13.enabled = !1,
    this.box1300.enabled = !1),
    this.timer13 > 2.5 && (this.timer13 = 0,
    this.active13 = !1,
    this.box13.enabled = !0,
    this.box1300.enabled = !0)),
    this.active14 && (this.timer14 += t,
    this.timer14 > .2 && (this.box14.enabled = !1,
    this.box1400.enabled = !1),
    this.timer14 > 2.5 && (this.timer14 = 0,
    this.active14 = !1,
    this.box14.enabled = !0,
    this.box1400.enabled = !0)),
    this.active15 && (this.timer15 += t,
    this.timer15 > .2 && (this.box15.enabled = !1,
    this.box1500.enabled = !1),
    this.timer15 > 2.5 && (this.timer15 = 0,
    this.active15 = !1,
    this.box15.enabled = !0,
    this.box1500.enabled = !0)),
    this.active16 && (this.timer16 += t,
    this.timer16 > .7 && (this.box16.enabled = !1,
    this.box1600.enabled = !1),
    this.timer16 > 2.5 && (this.timer16 = 0,
    this.active16 = !1,
    this.box16.enabled = !0,
    this.box1600.enabled = !0)),
    this.active17 && (this.timer17 += t,
    this.timer17 > 1 && (this.box17.enabled = !1,
    this.box1700.enabled = !1),
    this.timer17 > 2.5 && (this.timer17 = 0,
    this.active17 = !1,
    this.box17.enabled = !0,
    this.box1700.enabled = !0))
}
;
var TriggerPurpleSecret = pc.createScript("triggerPurpleSecret");
TriggerPurpleSecret.attributes.add("blue", {
    type: "entity"
}),
TriggerPurpleSecret.attributes.add("blueBox", {
    type: "entity"
}),
TriggerPurpleSecret.attributes.add("blue3", {
    type: "entity"
}),
TriggerPurpleSecret.attributes.add("box1", {
    type: "entity"
}),
TriggerPurpleSecret.attributes.add("box2", {
    type: "entity"
}),
TriggerPurpleSecret.attributes.add("box3", {
    type: "entity"
}),
TriggerPurpleSecret.attributes.add("box4", {
    type: "entity"
}),
TriggerPurpleSecret.attributes.add("box5", {
    type: "entity"
}),
TriggerPurpleSecret.attributes.add("box6", {
    type: "entity"
}),
TriggerPurpleSecret.attributes.add("box7", {
    type: "entity"
}),
TriggerPurpleSecret.attributes.add("box8", {
    type: "entity"
}),
TriggerPurpleSecret.attributes.add("box9", {
    type: "entity"
}),
TriggerPurpleSecret.attributes.add("box10", {
    type: "entity"
}),
TriggerPurpleSecret.attributes.add("box11", {
    type: "entity"
}),
TriggerPurpleSecret.attributes.add("box12", {
    type: "entity"
}),
TriggerPurpleSecret.attributes.add("box13", {
    type: "entity"
}),
TriggerPurpleSecret.attributes.add("box14", {
    type: "entity"
}),
TriggerPurpleSecret.attributes.add("box15", {
    type: "entity"
}),
TriggerPurpleSecret.attributes.add("box16", {
    type: "entity"
}),
TriggerPurpleSecret.attributes.add("box17", {
    type: "entity"
}),
TriggerPurpleSecret.attributes.add("box111", {
    type: "entity"
}),
TriggerPurpleSecret.attributes.add("box222", {
    type: "entity"
}),
TriggerPurpleSecret.attributes.add("box333", {
    type: "entity"
}),
TriggerPurpleSecret.attributes.add("box444", {
    type: "entity"
}),
TriggerPurpleSecret.attributes.add("box555", {
    type: "entity"
}),
TriggerPurpleSecret.attributes.add("box666", {
    type: "entity"
}),
TriggerPurpleSecret.attributes.add("box777", {
    type: "entity"
}),
TriggerPurpleSecret.attributes.add("box888", {
    type: "entity"
}),
TriggerPurpleSecret.attributes.add("box999", {
    type: "entity"
}),
TriggerPurpleSecret.attributes.add("box1000", {
    type: "entity"
}),
TriggerPurpleSecret.attributes.add("box1100", {
    type: "entity"
}),
TriggerPurpleSecret.attributes.add("box1200", {
    type: "entity"
}),
TriggerPurpleSecret.attributes.add("box1300", {
    type: "entity"
}),
TriggerPurpleSecret.attributes.add("box1400", {
    type: "entity"
}),
TriggerPurpleSecret.attributes.add("box1500", {
    type: "entity"
}),
TriggerPurpleSecret.attributes.add("box1600", {
    type: "entity"
}),
TriggerPurpleSecret.attributes.add("box1700", {
    type: "entity"
}),
TriggerPurpleSecret.attributes.add("clock", {
    type: "entity"
}),
TriggerPurpleSecret.prototype.initialize = function() {
    this.player = this.app.root.findByName("Player"),
    isMobile ? this.timer = 23 : this.timer = 21,
    this.activated = !1,
    this.box1.enabled = !1,
    this.box2.enabled = !1,
    this.box3.enabled = !1,
    this.box4.enabled = !1,
    this.box5.enabled = !1,
    this.box6.enabled = !1,
    this.box7.enabled = !1,
    this.box8.enabled = !1,
    this.box9.enabled = !1,
    this.box10.enabled = !1,
    this.box11.enabled = !1,
    this.box12.enabled = !1,
    this.box13.enabled = !1,
    this.box14.enabled = !1,
    this.box15.enabled = !1,
    this.box16.enabled = !1,
    this.box17.enabled = !1,
    this.box111.enabled = !1,
    this.box222.enabled = !1,
    this.box333.enabled = !1,
    this.box444.enabled = !1,
    this.box555.enabled = !1,
    this.box666.enabled = !1,
    this.box777.enabled = !1,
    this.box888.enabled = !1,
    this.box999.enabled = !1,
    this.box1000.enabled = !1,
    this.box1100.enabled = !1,
    this.box1200.enabled = !1,
    this.box1300.enabled = !1,
    this.box1400.enabled = !1,
    this.box1500.enabled = !1,
    this.box1600.enabled = !1,
    this.box1700.enabled = !1,
    this.blue.collision.on("triggerenter", this.onTriggerEnter, this)
}
,
TriggerPurpleSecret.prototype.onTriggerEnter = function(e) {
    "Player" == e.collision.entity.name && ("false" === localStorage.getItem("sound") && (this.player.sound.slot(6).isPlaying || this.player.sound.slot(6).play()),
    this.blue.enabled = !1,
    this.blueBox.enabled = !1,
    this.blue3.enabled = !1,
    this.activated = !0,
    this.box1.enabled = !0,
    this.box2.enabled = !0,
    this.box3.enabled = !0,
    this.box4.enabled = !0,
    this.box5.enabled = !0,
    this.box6.enabled = !0,
    this.box7.enabled = !0,
    this.box8.enabled = !0,
    this.box9.enabled = !0,
    this.box10.enabled = !0,
    this.box11.enabled = !0,
    this.box12.enabled = !0,
    this.box13.enabled = !0,
    this.box14.enabled = !0,
    this.box15.enabled = !0,
    this.box16.enabled = !0,
    this.box17.enabled = !0,
    this.box111.enabled = !0,
    this.box222.enabled = !0,
    this.box333.enabled = !0,
    this.box444.enabled = !0,
    this.box555.enabled = !0,
    this.box666.enabled = !0,
    this.box777.enabled = !0,
    this.box888.enabled = !0,
    this.box999.enabled = !0,
    this.box1000.enabled = !0,
    this.box1100.enabled = !0,
    this.box1200.enabled = !0,
    this.box1300.enabled = !0,
    this.box1400.enabled = !0,
    this.box1500.enabled = !0,
    this.box1600.enabled = !0,
    this.box1700.enabled = !0)
}
,
TriggerPurpleSecret.prototype.update = function(e) {
    this.activated && (this.timer -= e,
    this.clock.element.enabled = !0,
    isMobile ? isMobile && (this.clock.element.text = this.timer.toFixed(0),
    this.timer <= 0 && (this.box1.enabled = !1,
    this.box2.enabled = !1,
    this.box3.enabled = !1,
    this.box4.enabled = !1,
    this.box5.enabled = !1,
    this.box6.enabled = !1,
    this.box7.enabled = !1,
    this.box8.enabled = !1,
    this.box9.enabled = !1,
    this.box10.enabled = !1,
    this.box11.enabled = !1,
    this.box12.enabled = !1,
    this.box13.enabled = !1,
    this.box14.enabled = !1,
    this.box15.enabled = !1,
    this.box16.enabled = !1,
    this.box17.enabled = !1,
    this.box111.enabled = !1,
    this.box222.enabled = !1,
    this.box333.enabled = !1,
    this.box444.enabled = !1,
    this.box555.enabled = !1,
    this.box666.enabled = !1,
    this.box777.enabled = !1,
    this.box888.enabled = !1,
    this.box999.enabled = !1,
    this.box1000.enabled = !1,
    this.box1100.enabled = !1,
    this.box1200.enabled = !1,
    this.box1300.enabled = !1,
    this.box1400.enabled = !1,
    this.box1500.enabled = !1,
    this.box1600.enabled = !1,
    this.box1700.enabled = !1,
    this.blue.enabled = !0,
    this.blueBox.enabled = !0,
    this.blue3.enabled = !0,
    this.activated = !1,
    this.timer = 23,
    this.clock.element.enabled = !1)) : (this.clock.element.text = this.timer.toFixed(0),
    this.timer <= 0 && (this.box1.enabled = !1,
    this.box2.enabled = !1,
    this.box3.enabled = !1,
    this.box4.enabled = !1,
    this.box5.enabled = !1,
    this.box6.enabled = !1,
    this.box7.enabled = !1,
    this.box8.enabled = !1,
    this.box9.enabled = !1,
    this.box10.enabled = !1,
    this.box11.enabled = !1,
    this.box12.enabled = !1,
    this.box13.enabled = !1,
    this.box14.enabled = !1,
    this.box15.enabled = !1,
    this.box16.enabled = !1,
    this.box17.enabled = !1,
    this.box111.enabled = !1,
    this.box222.enabled = !1,
    this.box333.enabled = !1,
    this.box444.enabled = !1,
    this.box555.enabled = !1,
    this.box666.enabled = !1,
    this.box777.enabled = !1,
    this.box888.enabled = !1,
    this.box999.enabled = !1,
    this.box1000.enabled = !1,
    this.box1100.enabled = !1,
    this.box1200.enabled = !1,
    this.box1300.enabled = !1,
    this.box1400.enabled = !1,
    this.box1500.enabled = !1,
    this.box1600.enabled = !1,
    this.box1700.enabled = !1,
    this.blue.enabled = !0,
    this.blueBox.enabled = !0,
    this.blue3.enabled = !0,
    this.activated = !1,
    this.timer = 21,
    this.clock.element.enabled = !1)))
}
;
var TriggerSecret = pc.createScript("triggerSecret");
TriggerSecret.attributes.add("cyan1", {
    type: "entity"
}),
TriggerSecret.attributes.add("cyan2", {
    type: "entity"
}),
TriggerSecret.attributes.add("cyan3", {
    type: "entity"
}),
TriggerSecret.attributes.add("cyan4", {
    type: "entity"
}),
TriggerSecret.attributes.add("cyan5", {
    type: "entity"
}),
TriggerSecret.attributes.add("cyan6", {
    type: "entity"
}),
TriggerSecret.attributes.add("cyan7", {
    type: "entity"
}),
TriggerSecret.attributes.add("cyan8", {
    type: "entity"
}),
TriggerSecret.attributes.add("cyan9", {
    type: "entity"
}),
TriggerSecret.attributes.add("cyan10", {
    type: "entity"
}),
TriggerSecret.attributes.add("cyan11", {
    type: "entity"
}),
TriggerSecret.attributes.add("cyan12", {
    type: "entity"
}),
TriggerSecret.attributes.add("cyan13", {
    type: "entity"
}),
TriggerSecret.attributes.add("cyan14", {
    type: "entity"
}),
TriggerSecret.attributes.add("cyan15", {
    type: "entity"
}),
TriggerSecret.attributes.add("cyan16", {
    type: "entity"
}),
TriggerSecret.attributes.add("cyan17", {
    type: "entity"
}),
TriggerSecret.attributes.add("cyan18", {
    type: "entity"
}),
TriggerSecret.attributes.add("cyan19", {
    type: "entity"
}),
TriggerSecret.attributes.add("cyan20", {
    type: "entity"
}),
TriggerSecret.attributes.add("cyan21", {
    type: "entity"
}),
TriggerSecret.attributes.add("cyan22", {
    type: "entity"
}),
TriggerSecret.attributes.add("cyan23", {
    type: "entity"
}),
TriggerSecret.attributes.add("cyan24", {
    type: "entity"
}),
TriggerSecret.attributes.add("cyan25", {
    type: "entity"
}),
TriggerSecret.attributes.add("cyan26", {
    type: "entity"
}),
TriggerSecret.attributes.add("cyan27", {
    type: "entity"
}),
TriggerSecret.attributes.add("cyan28", {
    type: "entity"
}),
TriggerSecret.attributes.add("cyan29", {
    type: "entity"
}),
TriggerSecret.attributes.add("cyan30", {
    type: "entity"
}),
TriggerSecret.attributes.add("box1", {
    type: "entity"
}),
TriggerSecret.attributes.add("box2", {
    type: "entity"
}),
TriggerSecret.attributes.add("box3", {
    type: "entity"
}),
TriggerSecret.attributes.add("box4", {
    type: "entity"
}),
TriggerSecret.attributes.add("box1a", {
    type: "entity"
}),
TriggerSecret.attributes.add("box2a", {
    type: "entity"
}),
TriggerSecret.attributes.add("box5", {
    type: "entity"
}),
TriggerSecret.attributes.add("box6", {
    type: "entity"
}),
TriggerSecret.attributes.add("box7", {
    type: "entity"
}),
TriggerSecret.attributes.add("box8", {
    type: "entity"
}),
TriggerSecret.attributes.add("box1b", {
    type: "entity"
}),
TriggerSecret.attributes.add("box2b", {
    type: "entity"
}),
TriggerSecret.attributes.add("box9", {
    type: "entity"
}),
TriggerSecret.attributes.add("box10", {
    type: "entity"
}),
TriggerSecret.attributes.add("box11", {
    type: "entity"
}),
TriggerSecret.attributes.add("box12", {
    type: "entity"
}),
TriggerSecret.attributes.add("box1c", {
    type: "entity"
}),
TriggerSecret.attributes.add("box2c", {
    type: "entity"
}),
TriggerSecret.prototype.initialize = function() {
    this.player = this.app.root.findByName("Player"),
    this.cyan1.collision.on("triggerenter", this.onTriggerEnter, this),
    this.cyan11.collision.on("triggerenter", this.onTriggerEnter2, this),
    this.cyan21.collision.on("triggerenter", this.onTriggerEnter3, this)
}
,
TriggerSecret.prototype.onTriggerEnter = function() {
    this.box1.enabled = !0,
    this.box2.enabled = !0,
    this.box3.enabled = !0,
    this.box4.enabled = !0,
    this.box1a.destroy(),
    this.box2a.destroy(),
    this.cyan1.destroy(),
    this.cyan2.destroy(),
    this.cyan3.destroy(),
    this.cyan4.destroy(),
    this.cyan5.destroy(),
    this.cyan6.destroy(),
    this.cyan7.destroy(),
    this.cyan8.destroy(),
    this.cyan9.destroy(),
    this.cyan10.destroy(),
    "false" === localStorage.getItem("sound") && (this.player.sound.slot(4).isPlaying || this.player.sound.slot(4).play())
}
,
TriggerSecret.prototype.onTriggerEnter2 = function() {
    this.box5.enabled = !0,
    this.box6.enabled = !0,
    this.box7.enabled = !0,
    this.box8.enabled = !0,
    this.box1b.destroy(),
    this.box2b.destroy(),
    this.cyan11.destroy(),
    this.cyan12.destroy(),
    this.cyan13.destroy(),
    this.cyan14.destroy(),
    this.cyan15.destroy(),
    this.cyan16.destroy(),
    this.cyan17.destroy(),
    this.cyan18.destroy(),
    this.cyan19.destroy(),
    this.cyan20.destroy(),
    "false" === localStorage.getItem("sound") && (this.player.sound.slot(4).isPlaying || this.player.sound.slot(4).play())
}
,
TriggerSecret.prototype.onTriggerEnter3 = function() {
    this.box9.enabled = !0,
    this.box10.enabled = !0,
    this.box11.enabled = !0,
    this.box12.enabled = !0,
    this.box1c.destroy(),
    this.box2c.destroy(),
    this.cyan21.destroy(),
    this.cyan22.destroy(),
    this.cyan23.destroy(),
    this.cyan24.destroy(),
    this.cyan25.destroy(),
    this.cyan26.destroy(),
    this.cyan27.destroy(),
    this.cyan28.destroy(),
    this.cyan29.destroy(),
    this.cyan30.destroy(),
    "false" === localStorage.getItem("sound") && (this.player.sound.slot(4).isPlaying || this.player.sound.slot(4).play())
}
;
var SecretGet1 = pc.createScript("secretGet1");
SecretGet1.attributes.add("secretBox", {
    type: "entity"
}),
SecretGet1.attributes.add("particle", {
    type: "entity"
}),
SecretGet1.attributes.add("ui", {
    type: "entity"
});
let sec1 = !1
  , sec2 = !1
  , sec3 = !1
  , sec4 = !1
  , sec5 = !1;
SecretGet1.prototype.initialize = function() {
    this.player = this.app.root.findByName("Player"),
    this.entity.collision.on("triggerenter", this.onTriggerEnter, this)
}
,
SecretGet1.prototype.onTriggerEnter = function(e) {
    "Player" == e.collision.entity.name && (this.secretBox.destroy(),
    this.particle.destroy(),
    this.entity.destroy(),
    sec1 = !0,
    localStorage.setItem("sec1", sec1),
    "false" === localStorage.getItem("sound") && (this.player.sound.slot(4).isPlaying || this.player.sound.slot(4).play()),
    this.ui.enabled = !0)
}
;
var SecretGet2 = pc.createScript("secretGet2");
SecretGet2.attributes.add("secretBox", {
    type: "entity"
}),
SecretGet2.attributes.add("particle", {
    type: "entity"
}),
SecretGet2.attributes.add("ui", {
    type: "entity"
}),
SecretGet2.prototype.initialize = function() {
    this.player = this.app.root.findByName("Player"),
    this.entity.collision.on("triggerenter", this.onTriggerEnter, this)
}
,
SecretGet2.prototype.onTriggerEnter = function(t) {
    "Player" == t.collision.entity.name && (this.secretBox.destroy(),
    this.particle.destroy(),
    this.entity.destroy(),
    sec2 = !0,
    localStorage.setItem("sec2", sec2),
    "false" === localStorage.getItem("sound") && (this.player.sound.slot(4).isPlaying || this.player.sound.slot(4).play()),
    this.ui.enabled = !0)
}
;
var SecretGet3 = pc.createScript("secretGet3");
SecretGet3.attributes.add("secretBox", {
    type: "entity"
}),
SecretGet3.attributes.add("particle", {
    type: "entity"
}),
SecretGet3.attributes.add("ui", {
    type: "entity"
}),
SecretGet3.prototype.initialize = function() {
    this.player = this.app.root.findByName("Player"),
    this.entity.collision.on("triggerenter", this.onTriggerEnter, this)
}
,
SecretGet3.prototype.onTriggerEnter = function(t) {
    "Player" == t.collision.entity.name && (this.secretBox.destroy(),
    this.particle.destroy(),
    this.entity.destroy(),
    sec3 = !0,
    localStorage.setItem("sec3", sec3),
    "false" === localStorage.getItem("sound") && (this.player.sound.slot(4).isPlaying || this.player.sound.slot(4).play()),
    this.ui.enabled = !0)
}
;
var SecretGet4 = pc.createScript("secretGet4");
SecretGet4.attributes.add("secretBox", {
    type: "entity"
}),
SecretGet4.attributes.add("particle", {
    type: "entity"
}),
SecretGet4.attributes.add("ui", {
    type: "entity"
}),
SecretGet4.prototype.initialize = function() {
    this.player = this.app.root.findByName("Player"),
    this.entity.collision.on("triggerenter", this.onTriggerEnter, this)
}
,
SecretGet4.prototype.onTriggerEnter = function(t) {
    "Player" == t.collision.entity.name && (this.secretBox.destroy(),
    this.particle.destroy(),
    this.entity.destroy(),
    sec4 = !0,
    localStorage.setItem("sec4", sec4),
    "false" === localStorage.getItem("sound") && (this.player.sound.slot(4).isPlaying || this.player.sound.slot(4).play()),
    this.ui.enabled = !0)
}
;
var SecretGet5 = pc.createScript("secretGet5");
SecretGet5.attributes.add("secretBox", {
    type: "entity"
}),
SecretGet5.attributes.add("particle", {
    type: "entity"
}),
SecretGet5.attributes.add("ui", {
    type: "entity"
}),
SecretGet5.prototype.initialize = function() {
    this.player = this.app.root.findByName("Player"),
    this.entity.collision.on("triggerenter", this.onTriggerEnter, this)
}
,
SecretGet5.prototype.onTriggerEnter = function(t) {
    "Player" == t.collision.entity.name && (this.secretBox.destroy(),
    this.particle.destroy(),
    this.entity.destroy(),
    sec5 = !0,
    localStorage.setItem("sec5", sec5),
    "false" === localStorage.getItem("sound") && (this.player.sound.slot(4).isPlaying || this.player.sound.slot(4).play()),
    this.ui.enabled = !0)
}
;
var ChangeSceneBonus = pc.createScript("changeSceneBonus");
ChangeSceneBonus.attributes.add("sceneName", {
    type: "string"
}),
ChangeSceneBonus.attributes.add("Level", {
    type: "string"
});
let level48 = !1
  , ach6 = !1;
ChangeSceneBonus.prototype.initialize = function() {
    this.entity.collision.on("triggerenter", this.onTriggerEnter, this),
    this.player = this.app.root.findByName("Player"),
    this.camera = this.app.root.findByName("Camera")
}
,
ChangeSceneBonus.prototype.onTriggerEnter = function(e) {
    "Player" == e.collision.entity.name && ("Level48" === this.Level && (level48 = !0,
    ach6 = !0,
    localStorage.setItem("ach6", ach6)),
    pause = !0,
    this.app.mouse.disablePointerLock(),
    this.player.sound.slot(3).isPlaying || this.player.sound.play(3),
    this.player.script.playerController.enabled = !1,
    this.camera.script.playerCamera.camOff(),
    this.player.collision.enabled = !1,
    this.player.script.pauseMenu.enabled = !1,
    isMobile && (this.camera.script.orbitCamera.enabled = !1,
    this.player.script.playerController2.enabled = !1),
    setTimeout(( () => {
        loadScene(this.sceneName, {
            hierarchy: !0,
            settings: !0
        })
    }
    ), 1e3))
}
;
var ChangeSceneGhost = pc.createScript("changeSceneGhost");
ChangeSceneGhost.attributes.add("sceneName", {
    type: "string"
}),
ChangeSceneGhost.attributes.add("Level", {
    type: "string"
});
let level47 = !1
  , ach5 = !1;
ChangeSceneGhost.prototype.initialize = function() {
    this.entity.collision.on("triggerenter", this.onTriggerEnter, this),
    this.player = this.app.root.findByName("Player"),
    this.camera = this.app.root.findByName("Camera")
}
,
ChangeSceneGhost.prototype.onTriggerEnter = function(e) {
    "Player" == e.collision.entity.name && ("Level47" === this.Level && (level47 = !0,
    ach5 = !0,
    localStorage.setItem("ach5", ach5)),
    pause = !0,
    this.app.mouse.disablePointerLock(),
    this.player.sound.slot(3).isPlaying || this.player.sound.play(3),
    this.player.script.playerController.enabled = !1,
    this.camera.script.playerCamera.camOff(),
    this.player.collision.enabled = !1,
    this.player.script.pauseMenu.enabled = !1,
    isMobile && (this.camera.script.orbitCamera.enabled = !1,
    this.player.script.playerController2.enabled = !1),
    setTimeout(( () => {
        loadScene(this.sceneName, {
            hierarchy: !0,
            settings: !0
        })
    }
    ), 1e3))
}
;
var ChangeSceneSecret = pc.createScript("changeSceneSecret");
ChangeSceneSecret.attributes.add("sceneName", {
    type: "string"
}),
ChangeSceneSecret.attributes.add("Level", {
    type: "string"
});
let level46 = !1
  , ach4 = !1;
ChangeSceneSecret.prototype.initialize = function() {
    this.entity.collision.on("triggerenter", this.onTriggerEnter, this),
    this.player = this.app.root.findByName("Player"),
    this.camera = this.app.root.findByName("Camera")
}
,
ChangeSceneSecret.prototype.onTriggerEnter = function(e) {
    "Player" == e.collision.entity.name && ("Level46" === this.Level && (level46 = !0,
    ach4 = !0,
    localStorage.setItem("ach4", ach4)),
    pause = !0,
    this.app.mouse.disablePointerLock(),
    this.player.sound.slot(3).isPlaying || this.player.sound.play(3),
    this.player.script.playerController.enabled = !1,
    this.camera.script.playerCamera.camOff(),
    this.player.collision.enabled = !1,
    this.player.script.pauseMenu.enabled = !1,
    isMobile && (this.camera.script.orbitCamera.enabled = !1,
    this.player.script.playerController2.enabled = !1),
    setTimeout(( () => {
        loadScene(this.sceneName, {
            hierarchy: !0,
            settings: !0
        })
    }
    ), 1e3))
}
;
var Woooooo = pc.createScript("woooooo");
Woooooo.attributes.add("particle", {
    type: "entity"
}),
Woooooo.attributes.add("ui", {
    type: "entity"
});
let gost = !1;
Woooooo.prototype.initialize = function() {
    this.player = this.app.root.findByName("Player"),
    this.entity.collision.on("triggerenter", this.onTriggerEnter, this)
}
,
Woooooo.prototype.onTriggerEnter = function(o) {
    "Player" == o.collision.entity.name && (this.entity.destroy(),
    this.particle.destroy(),
    gost = !0,
    localStorage.setItem("gost", gost),
    "false" === localStorage.getItem("sound") && (this.player.sound.slot(4).isPlaying || this.player.sound.slot(4).play()),
    this.ui.enabled = !0)
}
;
var Trigger44 = pc.createScript("trigger44");
Trigger44.attributes.add("blue", {
    type: "entity"
}),
Trigger44.attributes.add("blueBox", {
    type: "entity"
}),
Trigger44.attributes.add("blue3", {
    type: "entity"
}),
Trigger44.attributes.add("box1", {
    type: "entity"
}),
Trigger44.attributes.add("clock", {
    type: "entity"
}),
Trigger44.prototype.initialize = function() {
    this.player = this.app.root.findByName("Player"),
    this.pause = this.app.root.findByName("Pause Menu"),
    this.timer = 15,
    this.actif = !1,
    this.blue.collision.on("triggerenter", this.onTriggerEnter, this)
}
,
Trigger44.prototype.onTriggerEnter = function() {
    this.blue.enabled = !1,
    this.blueBox.enabled = !1,
    this.blue3.enabled = !1,
    this.box1.enabled = !1,
    "false" === localStorage.getItem("sound") && (this.player.sound.slot(6).isPlaying || this.player.sound.slot(6).play()),
    this.actif = !0
}
,
Trigger44.prototype.update = function(t) {
    this.actif && (this.timer -= t,
    this.clock.element.enabled = !0,
    this.clock.element.text = this.timer.toFixed(0),
    this.timer <= 0 && (this.blue.enabled = !0,
    this.blueBox.enabled = !0,
    this.blue3.enabled = !0,
    this.box1.enabled = !0,
    this.timer = 15,
    this.clock.element.enabled = !1,
    this.actif = !1))
}
;
var SpeedrunPlay = pc.createScript("speedrunPlay");
let spodruns = !1;
SpeedrunPlay.attributes.add("sceneName", {
    type: "string"
}),
SpeedrunPlay.prototype.initialize = function() {
    this.time = this.app.root.findByName("Time"),
    this.entity.button.once("click", this.onClick, this)
}
,
SpeedrunPlay.prototype.onClick = function() {
    pause = !1,
    this.app.mouse.enablePointerLock(),
    spodruns = !0,
    this.time.script.time.resetStopwatch(),
    loadScene(this.sceneName, {
        hierarchy: !0,
        settings: !0
    })
}
;
var Spood = pc.createScript("spood");
Spood.attributes.add("spod", {
    type: "entity"
}),
Spood.prototype.initialize = function() {
    let o = localStorage.getItem("1run");
    null === o ? (o = "00:00:00",
    this.spod.element.color = pc.Color.WHITE) : (o = localStorage.getItem("1run"),
    this.spod.element.color = pc.Color.GREEN),
    this.spod.element.text = o
}
;
var ClickFlag = pc.createScript("clickFlag");
let en = !1
  , es = !1
  , fr = !1
  , tr = !1
  , vt = !1
  , ph = !1
  , th = !1
  , ind = !1
  , ch = !1
  , jp = !1
  , kor = !1
  , sa = !1;
ClickFlag.attributes.add("en", {
    type: "entity"
}),
ClickFlag.attributes.add("es", {
    type: "entity"
}),
ClickFlag.attributes.add("fr", {
    type: "entity"
}),
ClickFlag.attributes.add("tr", {
    type: "entity"
}),
ClickFlag.attributes.add("vt", {
    type: "entity"
}),
ClickFlag.attributes.add("ph", {
    type: "entity"
}),
ClickFlag.attributes.add("th", {
    type: "entity"
}),
ClickFlag.attributes.add("id", {
    type: "entity"
}),
ClickFlag.attributes.add("ch", {
    type: "entity"
}),
ClickFlag.attributes.add("jp", {
    type: "entity"
}),
ClickFlag.attributes.add("kor", {
    type: "entity"
}),
ClickFlag.attributes.add("sa", {
    type: "entity"
}),
ClickFlag.attributes.add("flag", {
    type: "entity"
}),
ClickFlag.prototype.initialize = function() {
    this.en.button.on("click", this.onClick1, this),
    this.es.button.on("click", this.onClick2, this),
    this.tr.button.on("click", this.onClick3, this),
    this.jp.button.on("click", this.onClick4, this),
    this.vt.button.on("click", this.onClick5, this),
    this.id.button.on("click", this.onClick6, this),
    this.ph.button.on("click", this.onClick7, this),
    this.th.button.on("click", this.onClick8, this),
    this.kor.button.on("click", this.onClick9, this),
    this.ch.button.on("click", this.onClick10, this),
    this.sa.button.on("click", this.onClick11, this),
    this.fr.button.on("click", this.onClick12, this),
    null === localStorage.getItem("en") && null === localStorage.getItem("es") && null === localStorage.getItem("fr") && null === localStorage.getItem("tr") && null === localStorage.getItem("vt") && null === localStorage.getItem("ph") && null === localStorage.getItem("th") && null === localStorage.getItem("ind") && null === localStorage.getItem("ch") && null === localStorage.getItem("jp") && null === localStorage.getItem("kor") && null === localStorage.getItem("sa") && this.onClick0(),
    "true" === localStorage.getItem("en") && this.onClick1(),
    "true" === localStorage.getItem("es") && this.onClick2(),
    "true" === localStorage.getItem("tr") && this.onClick3(),
    "true" === localStorage.getItem("jp") && this.onClick4(),
    "true" === localStorage.getItem("vt") && this.onClick5(),
    "true" === localStorage.getItem("ind") && this.onClick6(),
    "true" === localStorage.getItem("ph") && this.onClick7(),
    "true" === localStorage.getItem("th") && this.onClick8(),
    "true" === localStorage.getItem("kor") && this.onClick9(),
    "true" === localStorage.getItem("ch") && this.onClick10(),
    "true" === localStorage.getItem("sa") && this.onClick11(),
    "true" === localStorage.getItem("fr") && this.onClick12()
}
,
ClickFlag.prototype.onClick0 = function() {
    pc.Application.getApplication().i18n.locale = "en-US",
    this.flag.script.flagChange.offClick(),
    localStorage.removeItem("en"),
    localStorage.removeItem("es"),
    localStorage.removeItem("fr"),
    localStorage.removeItem("tr"),
    localStorage.removeItem("vt"),
    localStorage.removeItem("ph"),
    localStorage.removeItem("th"),
    localStorage.removeItem("ind"),
    localStorage.removeItem("ch"),
    localStorage.removeItem("jp"),
    localStorage.removeItem("kor"),
    localStorage.removeItem("sa")
}
,
ClickFlag.prototype.onClick1 = function() {
    pc.Application.getApplication().i18n.locale = "en-US",
    this.flag.script.flagChange.offClick(),
    this.flag.element.texture = this.en.element.texture,
    en = !0,
    localStorage.setItem("en", en),
    localStorage.removeItem("es"),
    localStorage.removeItem("fr"),
    localStorage.removeItem("tr"),
    localStorage.removeItem("vt"),
    localStorage.removeItem("ph"),
    localStorage.removeItem("th"),
    localStorage.removeItem("ind"),
    localStorage.removeItem("ch"),
    localStorage.removeItem("jp"),
    localStorage.removeItem("kor"),
    localStorage.removeItem("sa")
}
,
ClickFlag.prototype.onClick2 = function() {
    pc.Application.getApplication().i18n.locale = "es-ES",
    this.flag.script.flagChange.offClick(),
    this.flag.element.texture = this.es.element.texture,
    es = !0,
    localStorage.setItem("es", es),
    localStorage.removeItem("en"),
    localStorage.removeItem("fr"),
    localStorage.removeItem("tr"),
    localStorage.removeItem("vt"),
    localStorage.removeItem("ph"),
    localStorage.removeItem("th"),
    localStorage.removeItem("ind"),
    localStorage.removeItem("ch"),
    localStorage.removeItem("jp"),
    localStorage.removeItem("kor"),
    localStorage.removeItem("sa")
}
,
ClickFlag.prototype.onClick3 = function() {
    pc.Application.getApplication().i18n.locale = "tr-TR",
    this.flag.script.flagChange.offClick(),
    this.flag.element.texture = this.tr.element.texture,
    tr = !0,
    localStorage.setItem("tr", tr),
    localStorage.removeItem("es"),
    localStorage.removeItem("fr"),
    localStorage.removeItem("en"),
    localStorage.removeItem("vt"),
    localStorage.removeItem("ph"),
    localStorage.removeItem("th"),
    localStorage.removeItem("ind"),
    localStorage.removeItem("ch"),
    localStorage.removeItem("jp"),
    localStorage.removeItem("kor"),
    localStorage.removeItem("sa")
}
,
ClickFlag.prototype.onClick4 = function() {
    pc.Application.getApplication().i18n.locale = "jp-JP",
    this.flag.script.flagChange.offClick(),
    this.flag.element.texture = this.jp.element.texture,
    jp = !0,
    localStorage.setItem("jp", jp),
    localStorage.removeItem("es"),
    localStorage.removeItem("fr"),
    localStorage.removeItem("tr"),
    localStorage.removeItem("vt"),
    localStorage.removeItem("ph"),
    localStorage.removeItem("th"),
    localStorage.removeItem("ind"),
    localStorage.removeItem("ch"),
    localStorage.removeItem("en"),
    localStorage.removeItem("kor"),
    localStorage.removeItem("sa")
}
,
ClickFlag.prototype.onClick5 = function() {
    pc.Application.getApplication().i18n.locale = "vt-VT",
    this.flag.script.flagChange.offClick(),
    this.flag.element.texture = this.vt.element.texture,
    vt = !0,
    localStorage.setItem("vt", vt),
    localStorage.removeItem("es"),
    localStorage.removeItem("fr"),
    localStorage.removeItem("tr"),
    localStorage.removeItem("en"),
    localStorage.removeItem("ph"),
    localStorage.removeItem("th"),
    localStorage.removeItem("ind"),
    localStorage.removeItem("ch"),
    localStorage.removeItem("jp"),
    localStorage.removeItem("kor"),
    localStorage.removeItem("sa")
}
,
ClickFlag.prototype.onClick6 = function() {
    pc.Application.getApplication().i18n.locale = "id-ID",
    this.flag.script.flagChange.offClick(),
    this.flag.element.texture = this.id.element.texture,
    ind = !0,
    localStorage.setItem("ind", ind),
    localStorage.removeItem("es"),
    localStorage.removeItem("fr"),
    localStorage.removeItem("tr"),
    localStorage.removeItem("vt"),
    localStorage.removeItem("ph"),
    localStorage.removeItem("th"),
    localStorage.removeItem("en"),
    localStorage.removeItem("ch"),
    localStorage.removeItem("jp"),
    localStorage.removeItem("kor"),
    localStorage.removeItem("sa")
}
,
ClickFlag.prototype.onClick7 = function() {
    pc.Application.getApplication().i18n.locale = "ph-PH",
    this.flag.script.flagChange.offClick(),
    this.flag.element.texture = this.ph.element.texture,
    ph = !0,
    localStorage.setItem("ph", ph),
    localStorage.removeItem("es"),
    localStorage.removeItem("fr"),
    localStorage.removeItem("tr"),
    localStorage.removeItem("vt"),
    localStorage.removeItem("en"),
    localStorage.removeItem("th"),
    localStorage.removeItem("ind"),
    localStorage.removeItem("ch"),
    localStorage.removeItem("jp"),
    localStorage.removeItem("kor"),
    localStorage.removeItem("sa")
}
,
ClickFlag.prototype.onClick8 = function() {
    pc.Application.getApplication().i18n.locale = "th-TH",
    this.flag.script.flagChange.offClick(),
    this.flag.element.texture = this.th.element.texture,
    th = !0,
    localStorage.setItem("th", th),
    localStorage.removeItem("es"),
    localStorage.removeItem("fr"),
    localStorage.removeItem("tr"),
    localStorage.removeItem("vt"),
    localStorage.removeItem("ph"),
    localStorage.removeItem("en"),
    localStorage.removeItem("ind"),
    localStorage.removeItem("ch"),
    localStorage.removeItem("jp"),
    localStorage.removeItem("kor"),
    localStorage.removeItem("sa")
}
,
ClickFlag.prototype.onClick9 = function() {
    pc.Application.getApplication().i18n.locale = "kor-KOR",
    this.flag.script.flagChange.offClick(),
    this.flag.element.texture = this.kor.element.texture,
    kor = !0,
    localStorage.setItem("kor", kor),
    localStorage.removeItem("es"),
    localStorage.removeItem("fr"),
    localStorage.removeItem("tr"),
    localStorage.removeItem("vt"),
    localStorage.removeItem("ph"),
    localStorage.removeItem("th"),
    localStorage.removeItem("ind"),
    localStorage.removeItem("ch"),
    localStorage.removeItem("jp"),
    localStorage.removeItem("en"),
    localStorage.removeItem("sa")
}
,
ClickFlag.prototype.onClick10 = function() {
    pc.Application.getApplication().i18n.locale = "ch-CH",
    this.flag.script.flagChange.offClick(),
    this.flag.element.texture = this.ch.element.texture,
    ch = !0,
    localStorage.setItem("ch", ch),
    localStorage.removeItem("es"),
    localStorage.removeItem("fr"),
    localStorage.removeItem("tr"),
    localStorage.removeItem("vt"),
    localStorage.removeItem("ph"),
    localStorage.removeItem("th"),
    localStorage.removeItem("ind"),
    localStorage.removeItem("en"),
    localStorage.removeItem("jp"),
    localStorage.removeItem("kor"),
    localStorage.removeItem("sa")
}
,
ClickFlag.prototype.onClick11 = function() {
    pc.Application.getApplication().i18n.locale = "sa-SA",
    this.flag.script.flagChange.offClick(),
    this.flag.element.texture = this.sa.element.texture,
    sa = !0,
    localStorage.setItem("sa", sa),
    localStorage.removeItem("es"),
    localStorage.removeItem("fr"),
    localStorage.removeItem("tr"),
    localStorage.removeItem("vt"),
    localStorage.removeItem("ph"),
    localStorage.removeItem("th"),
    localStorage.removeItem("ind"),
    localStorage.removeItem("ch"),
    localStorage.removeItem("jp"),
    localStorage.removeItem("kor"),
    localStorage.removeItem("en")
}
,
ClickFlag.prototype.onClick12 = function() {
    pc.Application.getApplication().i18n.locale = "fr-FR",
    this.flag.script.flagChange.offClick(),
    this.flag.element.texture = this.fr.element.texture,
    fr = !0,
    localStorage.setItem("fr", fr),
    localStorage.removeItem("es"),
    localStorage.removeItem("en"),
    localStorage.removeItem("tr"),
    localStorage.removeItem("vt"),
    localStorage.removeItem("ph"),
    localStorage.removeItem("th"),
    localStorage.removeItem("ind"),
    localStorage.removeItem("ch"),
    localStorage.removeItem("jp"),
    localStorage.removeItem("kor"),
    localStorage.removeItem("sa")
}
;
!function(r, e) {
    "use strict";
    "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? module.exports = e() : r.arabicConverter = e()
}(this, (function() {
    "use strict";
    var r = [[1569, 65152, 0, 0, 0], [1570, 65153, 0, 0, 65154], [1571, 65155, 0, 0, 65156], [1572, 65157, 0, 0, 65158], [1573, 65159, 0, 0, 65160], [1574, 65161, 65163, 65164, 65162], [1575, 65165, 0, 0, 65166], [1576, 65167, 65169, 65170, 65168], [1577, 65171, 0, 0, 65172], [1578, 65173, 65175, 65176, 65174], [1579, 65177, 65179, 65180, 65178], [1580, 65181, 65183, 65184, 65182], [1581, 65185, 65187, 65188, 65186], [1582, 65189, 65191, 65192, 65190], [1583, 65193, 0, 0, 65194], [1584, 65195, 0, 0, 65196], [1585, 65197, 0, 0, 65198], [1586, 65199, 0, 0, 65200], [1587, 65201, 65203, 65204, 65202], [1588, 65205, 65207, 65208, 65206], [1589, 65209, 65211, 65212, 65210], [1590, 65213, 65215, 65216, 65214], [1591, 65217, 65219, 65220, 65218], [1592, 65221, 65223, 65224, 65222], [1593, 65225, 65227, 65228, 65226], [1594, 65229, 65231, 65232, 65230], [1600, 1600, 0, 0, 0], [1601, 65233, 65235, 65236, 65234], [1602, 65237, 65239, 65240, 65238], [1603, 65241, 65243, 65244, 65242], [1604, 65245, 65247, 65248, 65246], [1605, 65249, 65251, 65252, 65250], [1606, 65253, 65255, 65256, 65254], [1607, 65257, 65259, 65260, 65258], [1608, 65261, 0, 0, 65262], [1609, 65263, 0, 0, 65264], [1610, 65265, 65267, 65268, 65266]]
      , e = [[[1604, 1570], 65269, 0, 0, 65270], [[1604, 1571], 65271, 0, 0, 65272], [[1604, 1573], 65273, 0, 0, 65274], [[1604, 1575], 65275, 0, 0, 65276]]
      , t = [1552, 1554, 1555, 1556, 1557, 1611, 1612, 1613, 1614, 1615, 1616, 1617, 1618, 1619, 1620, 1621, 1622, 1623, 1624, 1648, 1750, 1751, 1752, 1753, 1754, 1755, 1756, 1759, 1760, 1761, 1762, 1763, 1764, 1767, 1768, 1770, 1771, 1772, 1773];
    function characterMapContains(e) {
        for (var t = 0; t < 37; t++)
            if (r[t][0] === e)
                return !0;
        return !1
    }
    function getCharRep(e) {
        for (var t = 0; t < 37; t++)
            if (r[t][0] === e)
                return r[t];
        return [0, 0, 0, 0]
    }
    function getCombCharRep(r, t) {
        for (var n = 0; n < 4; n++)
            if (e[n][0][0] === r && e[n][0][1] === t)
                return e[n];
        return [[0, 0], 0, 0, 0]
    }
    function isTransparent(r) {
        for (var e = 0; e < 39; e++)
            if (t[e] === r)
                return !0;
        return !1
    }
    return {
        convertArabic: function convertArabic(r) {
            if (!r)
                return "";
            for (var e, t, n = r.length, a = [], o = 0, i = 0; i < n; i++) {
                var c = r.charCodeAt(i);
                if (characterMapContains(c)) {
                    for (var f = 0, u = 0, C = i - 1, h = i + 1; C >= 0 && isTransparent(r.charCodeAt(C)); C--)
                        ;
                    for ((C < 0 || !characterMapContains(f = r.charCodeAt(C)) || 0 === (e = getCharRep(f))[2] && 0 === e[3]) && (f = 0); h < n && isTransparent(r.charCodeAt(h)); h++)
                        ;
                    if ((h >= n || !characterMapContains(u = r.charCodeAt(h)) || 0 === (e = getCharRep(u))[3] && 0 === (e = getCharRep(u))[4] && 1600 !== u) && (u = 0),
                    1604 === c && 0 !== u && (1570 === u || 1571 === u || 1573 === u || 1575 === u)) {
                        t = getCombCharRep(c, u),
                        a[o++] = 0 !== f ? t[4] : t[1],
                        i++;
                        continue
                    }
                    if (e = getCharRep(c),
                    0 !== f && 0 !== u && 0 !== e[3]) {
                        a[o++] = e[3];
                        continue
                    }
                    if (0 !== f && 0 !== e[4]) {
                        a[o++] = e[4];
                        continue
                    }
                    if (0 !== u && 0 !== e[2]) {
                        a[o++] = e[2];
                        continue
                    }
                    a[o++] = e[1]
                } else
                    a[o++] = c
            }
            a[o] = 0;
            for (var s = "", p = 0; p < o; p++)
                void 0 !== a[p] && (s += String.fromCharCode(a[p]));
            return s
        },
        convertArabicBack: function convertArabicBack(t) {
            if (!t)
                return "";
            for (var n, a, o = "", i = 0; i < t.length; i++)
                if (n = null,
                (a = t.charCodeAt(i)) >= 65136 && a <= 65279) {
                    for (var c = 0; c < 37; c++)
                        r[c][4] !== a && r[c][2] !== a && r[c][1] !== a && r[c][3] !== a || (n = r[c][0]);
                    if (!n)
                        for (var f = 0; f < 4; f++)
                            e[f][1] !== a && e[f][4] !== a || (n = a);
                    o += n ? String.fromCharCode(n) : ""
                } else
                    o += t[i];
            return o
        }
    }
}
));
var RtlElement = pc.createScript("rtlElement");
RtlElement.prototype.initialize = function() {
    this.entity.element && (this.entity.element.rtlReorder = !0,
    this.entity.element.unicodeConverter = !0)
}
;
!function(au, su) {
    "object" == typeof exports && "object" == typeof module ? module.exports = su() : "function" == typeof define && define.amd ? define("UnicodeBidirectional", [], su) : "object" == typeof exports ? exports.UnicodeBidirectional = su() : au.UnicodeBidirectional = su()
}("undefined" != typeof self ? self : this, (function() {
    return function(au) {
        function e(fu) {
            if (su[fu])
                return su[fu].exports;
            var cu = su[fu] = {
                i: fu,
                l: !1,
                exports: {}
            };
            return au[fu].call(cu.exports, cu, cu.exports, e),
            cu.l = !0,
            cu.exports
        }
        var su = {};
        return e.m = au,
        e.c = su,
        e.d = function(au, su, fu) {
            e.o(au, su) || Object.defineProperty(au, su, {
                configurable: !1,
                enumerable: !0,
                get: fu
            })
        }
        ,
        e.n = function(au) {
            var su = au && au.__esModule ? function() {
                return au.default
            }
            : function() {
                return au
            }
            ;
            return e.d(su, "a", su),
            su
        }
        ,
        e.o = function(au, su) {
            return Object.prototype.hasOwnProperty.call(au, su)
        }
        ,
        e.p = "",
        e(e.s = 17)
    }([function(au, su, fu) {
        "use strict";
        Object.defineProperty(su, "__esModule", {
            value: !0
        }),
        su.isNonFormatting = su.isX9ControlCharacter = su.isStrong = su.isPDI = su.isIsolateInitiator = su.isR = su.isNI = su.isET = su.MAX_DEPTH = su.RIGHT_CURLY = su.LEFT_CURLY = su.RIGHT_SQUARE = su.LEFT_SQUARE = su.RIGHT_PAR = su.LEFT_PAR = su.WS1 = su.BN1 = su.EN1 = su.AN1 = su.ON1 = su.R1 = su.L1 = su.S1 = su.B1 = su.G = su.F = su.E = su.D = su.C = su.B = su.A = su.RLO = su.RLM = su.RLI = su.RLE = su.PDI = su.PDF = su.LRO = su.LRM = su.LRI = su.LRE = su.FSI = su.ALM = void 0;
        var cu = function(au) {
            return au && au.__esModule ? au : {
                default: au
            }
        }(fu(2));
        su.ALM = 1564,
        su.FSI = 8296,
        su.LRE = 8234,
        su.LRI = 8294,
        su.LRM = 8206,
        su.LRO = 8237,
        su.PDF = 8236,
        su.PDI = 8297,
        su.RLE = 8235,
        su.RLI = 8295,
        su.RLM = 8207,
        su.RLO = 8238,
        su.A = 65,
        su.B = 66,
        su.C = 67,
        su.D = 68,
        su.E = 69,
        su.F = 70,
        su.G = 71,
        su.B1 = 8233,
        su.S1 = 9,
        su.L1 = 109,
        su.R1 = 1488,
        su.ON1 = 34,
        su.AN1 = 1633,
        su.EN1 = 50,
        su.BN1 = 0,
        su.WS1 = 32,
        su.LEFT_PAR = 40,
        su.RIGHT_PAR = 41,
        su.LEFT_SQUARE = 91,
        su.RIGHT_SQUARE = 93,
        su.LEFT_CURLY = 123,
        su.RIGHT_CURLY = 125,
        su.MAX_DEPTH = 125,
        su.isET = function(au) {
            return "ET" === au
        }
        ,
        su.isNI = function(au) {
            return (0,
            cu.default)(["B", "S", "WS", "ON", "FSI", "LRI", "RLI", "PDI"], au)
        }
        ,
        su.isR = function(au) {
            return (0,
            cu.default)(["R", "AN", "EN"], au)
        }
        ,
        su.isIsolateInitiator = function(au) {
            return (0,
            cu.default)(["LRI", "RLI", "FSI"], au)
        }
        ,
        su.isPDI = function(au) {
            return 8297 === au
        }
        ,
        su.isStrong = function(au) {
            return (0,
            cu.default)(["L", "R", "AL"], au)
        }
        ,
        su.isX9ControlCharacter = function(au) {
            return (0,
            cu.default)(["RLE", "LRE", "RLO", "LRO", "PDF", "BN"], au)
        }
        ,
        su.isNonFormatting = function(au) {
            return (0,
            cu.default)(["B", "BN", "RLE", "LRE", "RLO", "LRO", "PDF", "RLI", "LRI", "FSI", "PDI"], au)
        }
    }
    , function(au, su, fu) {
        au.exports = function() {
            "use strict";
            function t(au, su) {
                su && (au.prototype = Object.create(su.prototype)),
                au.prototype.constructor = au
            }
            function e(au) {
                return i(au) ? au : I(au)
            }
            function u(au) {
                return o(au) ? au : x(au)
            }
            function r(au) {
                return a(au) ? au : L(au)
            }
            function n(au) {
                return i(au) && !s(au) ? au : M(au)
            }
            function i(au) {
                return !(!au || !au[su])
            }
            function o(au) {
                return !(!au || !au[fu])
            }
            function a(au) {
                return !(!au || !au[cu])
            }
            function s(au) {
                return o(au) || a(au)
            }
            function f(au) {
                return !(!au || !au[Du])
            }
            function c(au) {
                return au.value = !1,
                au
            }
            function D(au) {
                au && (au.value = !0)
            }
            function l() {}
            function h(au, su) {
                su = su || 0;
                for (var fu = Math.max(0, au.length - su), cu = new Array(fu), Du = 0; Du < fu; Du++)
                    cu[Du] = au[Du + su];
                return cu
            }
            function p(au) {
                return void 0 === au.size && (au.size = au.__iterate(_)),
                au.size
            }
            function d(au, su) {
                if ("number" != typeof su) {
                    var fu = su >>> 0;
                    if ("" + fu !== su || 4294967295 === fu)
                        return NaN;
                    su = fu
                }
                return su < 0 ? p(au) + su : su
            }
            function _() {
                return !0
            }
            function v(au, su, fu) {
                return (0 === au || void 0 !== fu && au <= -fu) && (void 0 === su || void 0 !== fu && su >= fu)
            }
            function F(au, su) {
                return C(au, su, 0)
            }
            function E(au, su) {
                return C(au, su, su)
            }
            function C(au, su, fu) {
                return void 0 === au ? fu : au < 0 ? Math.max(0, su + au) : void 0 === su ? au : Math.min(su, au)
            }
            function A(au) {
                this.next = au
            }
            function y(au, su, fu, cu) {
                var Du = 0 === au ? su : 1 === au ? fu : [su, fu];
                return cu ? cu.value = Du : cu = {
                    value: Du,
                    done: !1
                },
                cu
            }
            function B() {
                return {
                    value: void 0,
                    done: !0
                }
            }
            function g(au) {
                return !!w(au)
            }
            function m(au) {
                return au && "function" == typeof au.next
            }
            function S(au) {
                var su = w(au);
                return su && su.call(au)
            }
            function w(au) {
                var su = au && (Au && au[Au] || au[yu]);
                if ("function" == typeof su)
                    return su
            }
            function b(au) {
                return au && "number" == typeof au.length
            }
            function I(au) {
                return null == au ? P() : i(au) ? au.toSeq() : N(au)
            }
            function x(au) {
                return null == au ? P().toKeyedSeq() : i(au) ? o(au) ? au.toSeq() : au.fromEntrySeq() : T(au)
            }
            function L(au) {
                return null == au ? P() : i(au) ? o(au) ? au.entrySeq() : au.toIndexedSeq() : q(au)
            }
            function M(au) {
                return (null == au ? P() : i(au) ? o(au) ? au.entrySeq() : au : q(au)).toSetSeq()
            }
            function z(au) {
                this._array = au,
                this.size = au.length
            }
            function O(au) {
                var su = Object.keys(au);
                this._object = au,
                this._keys = su,
                this.size = su.length
            }
            function R(au) {
                this._iterable = au,
                this.size = au.length || au.size
            }
            function k(au) {
                this._iterator = au,
                this._iteratorCache = []
            }
            function j(au) {
                return !(!au || !au[wu])
            }
            function P() {
                return gu || (gu = new z([]))
            }
            function T(au) {
                var su = Array.isArray(au) ? new z(au).fromEntrySeq() : m(au) ? new k(au).fromEntrySeq() : g(au) ? new R(au).fromEntrySeq() : "object" == typeof au ? new O(au) : void 0;
                if (!su)
                    throw new TypeError("Expected Array or iterable object of [k, v] entries, or keyed object: " + au);
                return su
            }
            function q(au) {
                var su = U(au);
                if (!su)
                    throw new TypeError("Expected Array or iterable object of values: " + au);
                return su
            }
            function N(au) {
                var su = U(au) || "object" == typeof au && new O(au);
                if (!su)
                    throw new TypeError("Expected Array or iterable object of values, or keyed object: " + au);
                return su
            }
            function U(au) {
                return b(au) ? new z(au) : m(au) ? new k(au) : g(au) ? new R(au) : void 0
            }
            function W(au, su, fu, cu) {
                var Du = au._cache;
                if (Du) {
                    for (var lu = Du.length - 1, hu = 0; hu <= lu; hu++) {
                        var pu = Du[fu ? lu - hu : hu];
                        if (!1 === su(pu[1], cu ? pu[0] : hu, au))
                            return hu + 1
                    }
                    return hu
                }
                return au.__iterateUncached(su, fu)
            }
            function K(au, su, fu, cu) {
                var Du = au._cache;
                if (Du) {
                    var lu = Du.length - 1
                      , hu = 0;
                    return new A((function() {
                        var au = Du[fu ? lu - hu : hu];
                        return hu++ > lu ? B() : y(su, cu ? au[0] : hu - 1, au[1])
                    }
                    ))
                }
                return au.__iteratorUncached(su, fu)
            }
            function J(au, su) {
                return su ? H(su, au, "", {
                    "": au
                }) : X(au)
            }
            function H(au, su, fu, cu) {
                return Array.isArray(su) ? au.call(cu, fu, L(su).map((function(fu, cu) {
                    return H(au, fu, cu, su)
                }
                ))) : G(su) ? au.call(cu, fu, x(su).map((function(fu, cu) {
                    return H(au, fu, cu, su)
                }
                ))) : su
            }
            function X(au) {
                return Array.isArray(au) ? L(au).map(X).toList() : G(au) ? x(au).map(X).toMap() : au
            }
            function G(au) {
                return au && (au.constructor === Object || void 0 === au.constructor)
            }
            function V(au, su) {
                if (au === su || au != au && su != su)
                    return !0;
                if (!au || !su)
                    return !1;
                if ("function" == typeof au.valueOf && "function" == typeof su.valueOf) {
                    if ((au = au.valueOf()) === (su = su.valueOf()) || au != au && su != su)
                        return !0;
                    if (!au || !su)
                        return !1
                }
                return !("function" != typeof au.equals || "function" != typeof su.equals || !au.equals(su))
            }
            function Y(au, su) {
                if (au === su)
                    return !0;
                if (!i(su) || void 0 !== au.size && void 0 !== su.size && au.size !== su.size || void 0 !== au.__hash && void 0 !== su.__hash && au.__hash !== su.__hash || o(au) !== o(su) || a(au) !== a(su) || f(au) !== f(su))
                    return !1;
                if (0 === au.size && 0 === su.size)
                    return !0;
                var fu = !s(au);
                if (f(au)) {
                    var cu = au.entries();
                    return su.every((function(au, su) {
                        var Du = cu.next().value;
                        return Du && V(Du[1], au) && (fu || V(Du[0], su))
                    }
                    )) && cu.next().done
                }
                var Du = !1;
                if (void 0 === au.size)
                    if (void 0 === su.size)
                        "function" == typeof au.cacheResult && au.cacheResult();
                    else {
                        Du = !0;
                        var lu = au;
                        au = su,
                        su = lu
                    }
                var hu = !0
                  , pu = su.__iterate((function(su, cu) {
                    if (fu ? !au.has(su) : Du ? !V(su, au.get(cu, du)) : !V(au.get(cu, du), su))
                        return hu = !1,
                        !1
                }
                ));
                return hu && au.size === pu
            }
            function Q(au, su) {
                if (!(this instanceof Q))
                    return new Q(au,su);
                if (this._value = au,
                this.size = void 0 === su ? 1 / 0 : Math.max(0, su),
                0 === this.size) {
                    if (mu)
                        return mu;
                    mu = this
                }
            }
            function $(au, su) {
                if (!au)
                    throw new Error(su)
            }
            function Z(au, su, fu) {
                if (!(this instanceof Z))
                    return new Z(au,su,fu);
                if ($(0 !== fu, "Cannot step a Range by 0"),
                au = au || 0,
                void 0 === su && (su = 1 / 0),
                fu = void 0 === fu ? 1 : Math.abs(fu),
                su < au && (fu = -fu),
                this._start = au,
                this._end = su,
                this._step = fu,
                this.size = Math.max(0, Math.ceil((su - au) / fu - 1) + 1),
                0 === this.size) {
                    if (Su)
                        return Su;
                    Su = this
                }
            }
            function tt() {
                throw TypeError("Abstract")
            }
            function et() {}
            function ut() {}
            function rt() {}
            function nt(au) {
                return au >>> 1 & 1073741824 | 3221225471 & au
            }
            function it(au) {
                if (!1 === au || null == au)
                    return 0;
                if ("function" == typeof au.valueOf && (!1 === (au = au.valueOf()) || null == au))
                    return 0;
                if (!0 === au)
                    return 1;
                var su = typeof au;
                if ("number" === su) {
                    if (au != au || au === 1 / 0)
                        return 0;
                    var fu = 0 | au;
                    for (fu !== au && (fu ^= 4294967295 * au); au > 4294967295; )
                        fu ^= au /= 4294967295;
                    return nt(fu)
                }
                if ("string" === su)
                    return au.length > Ru ? ot(au) : at(au);
                if ("function" == typeof au.hashCode)
                    return au.hashCode();
                if ("object" === su)
                    return st(au);
                if ("function" == typeof au.toString)
                    return at(au.toString());
                throw new Error("Value type " + su + " cannot be hashed.")
            }
            function ot(au) {
                var su = Tu[au];
                return void 0 === su && (su = at(au),
                ku === ju && (ku = 0,
                Tu = {}),
                ku++,
                Tu[au] = su),
                su
            }
            function at(au) {
                for (var su = 0, fu = 0; fu < au.length; fu++)
                    su = 31 * su + au.charCodeAt(fu) | 0;
                return nt(su)
            }
            function st(au) {
                var su;
                if (Mu && void 0 !== (su = bu.get(au)))
                    return su;
                if (void 0 !== (su = au[Ou]))
                    return su;
                if (!Lu) {
                    if (void 0 !== (su = au.propertyIsEnumerable && au.propertyIsEnumerable[Ou]))
                        return su;
                    if (void 0 !== (su = ft(au)))
                        return su
                }
                if (su = ++zu,
                1073741824 & zu && (zu = 0),
                Mu)
                    bu.set(au, su);
                else {
                    if (void 0 !== xu && !1 === xu(au))
                        throw new Error("Non-extensible objects are not allowed as keys.");
                    if (Lu)
                        Object.defineProperty(au, Ou, {
                            enumerable: !1,
                            configurable: !1,
                            writable: !1,
                            value: su
                        });
                    else if (void 0 !== au.propertyIsEnumerable && au.propertyIsEnumerable === au.constructor.prototype.propertyIsEnumerable)
                        au.propertyIsEnumerable = function() {
                            return this.constructor.prototype.propertyIsEnumerable.apply(this, arguments)
                        }
                        ,
                        au.propertyIsEnumerable[Ou] = su;
                    else {
                        if (void 0 === au.nodeType)
                            throw new Error("Unable to set a non-enumerable property on object.");
                        au[Ou] = su
                    }
                }
                return su
            }
            function ft(au) {
                if (au && au.nodeType > 0)
                    switch (au.nodeType) {
                    case 1:
                        return au.uniqueID;
                    case 9:
                        return au.documentElement && au.documentElement.uniqueID
                    }
            }
            function ct(au) {
                $(au !== 1 / 0, "Cannot perform this action with an infinite size.")
            }
            function Dt(au) {
                return null == au ? yt() : lt(au) && !f(au) ? au : yt().withMutations((function(su) {
                    var fu = u(au);
                    ct(fu.size),
                    fu.forEach((function(au, fu) {
                        return su.set(fu, au)
                    }
                    ))
                }
                ))
            }
            function lt(au) {
                return !(!au || !au[Pu])
            }
            function ht(au, su) {
                this.ownerID = au,
                this.entries = su
            }
            function pt(au, su, fu) {
                this.ownerID = au,
                this.bitmap = su,
                this.nodes = fu
            }
            function dt(au, su, fu) {
                this.ownerID = au,
                this.count = su,
                this.nodes = fu
            }
            function _t(au, su, fu) {
                this.ownerID = au,
                this.keyHash = su,
                this.entries = fu
            }
            function vt(au, su, fu) {
                this.ownerID = au,
                this.keyHash = su,
                this.entry = fu
            }
            function Ft(au, su, fu) {
                this._type = su,
                this._reverse = fu,
                this._stack = au._root && Ct(au._root)
            }
            function Et(au, su) {
                return y(au, su[0], su[1])
            }
            function Ct(au, su) {
                return {
                    node: au,
                    index: 0,
                    __prev: su
                }
            }
            function At(au, su, fu, cu) {
                var Du = Object.create(qu);
                return Du.size = au,
                Du._root = su,
                Du.__ownerID = fu,
                Du.__hash = cu,
                Du.__altered = !1,
                Du
            }
            function yt() {
                return Nu || (Nu = At(0))
            }
            function Bt(au, su, fu) {
                var cu, Du;
                if (au._root) {
                    var lu = c(_u)
                      , hu = c(vu);
                    if (cu = gt(au._root, au.__ownerID, 0, void 0, su, fu, lu, hu),
                    !hu.value)
                        return au;
                    Du = au.size + (lu.value ? fu === du ? -1 : 1 : 0)
                } else {
                    if (fu === du)
                        return au;
                    Du = 1,
                    cu = new ht(au.__ownerID,[[su, fu]])
                }
                return au.__ownerID ? (au.size = Du,
                au._root = cu,
                au.__hash = void 0,
                au.__altered = !0,
                au) : cu ? At(Du, cu) : yt()
            }
            function gt(au, su, fu, cu, Du, lu, hu, pu) {
                return au ? au.update(su, fu, cu, Du, lu, hu, pu) : lu === du ? au : (D(pu),
                D(hu),
                new vt(su,cu,[Du, lu]))
            }
            function mt(au) {
                return au.constructor === vt || au.constructor === _t
            }
            function St(au, su, fu, cu, Du) {
                if (au.keyHash === cu)
                    return new _t(su,cu,[au.entry, Du]);
                var hu, du = (0 === fu ? au.keyHash : au.keyHash >>> fu) & pu, _u = (0 === fu ? cu : cu >>> fu) & pu;
                return new pt(su,1 << du | 1 << _u,du === _u ? [St(au, su, fu + lu, cu, Du)] : (hu = new vt(su,cu,Du),
                du < _u ? [au, hu] : [hu, au]))
            }
            function wt(au, su, fu, cu) {
                au || (au = new l);
                for (var Du = new vt(au,it(fu),[fu, cu]), lu = 0; lu < su.length; lu++) {
                    var hu = su[lu];
                    Du = Du.update(au, 0, void 0, hu[0], hu[1])
                }
                return Du
            }
            function bt(au, su, fu, cu) {
                for (var Du = 0, lu = 0, hu = new Array(fu), pu = 0, du = 1, _u = su.length; pu < _u; pu++,
                du <<= 1) {
                    var vu = su[pu];
                    void 0 !== vu && pu !== cu && (Du |= du,
                    hu[lu++] = vu)
                }
                return new pt(au,Du,hu)
            }
            function It(au, su, fu, cu, Du) {
                for (var lu = 0, pu = new Array(hu), du = 0; 0 !== fu; du++,
                fu >>>= 1)
                    pu[du] = 1 & fu ? su[lu++] : void 0;
                return pu[cu] = Du,
                new dt(au,lu + 1,pu)
            }
            function xt(au, su, fu) {
                for (var cu = [], Du = 0; Du < fu.length; Du++) {
                    var lu = fu[Du]
                      , hu = u(lu);
                    i(lu) || (hu = hu.map((function(au) {
                        return J(au)
                    }
                    ))),
                    cu.push(hu)
                }
                return zt(au, su, cu)
            }
            function Lt(au, su, fu) {
                return au && au.mergeDeep && i(su) ? au.mergeDeep(su) : V(au, su) ? au : su
            }
            function Mt(au) {
                return function(su, fu, cu) {
                    if (su && su.mergeDeepWith && i(fu))
                        return su.mergeDeepWith(au, fu);
                    var Du = au(su, fu, cu);
                    return V(su, Du) ? su : Du
                }
            }
            function zt(au, su, fu) {
                return fu = fu.filter((function(au) {
                    return 0 !== au.size
                }
                )),
                0 === fu.length ? au : 0 !== au.size || au.__ownerID || 1 !== fu.length ? au.withMutations((function(au) {
                    for (var cu = su ? function(fu, cu) {
                        au.update(cu, du, (function(au) {
                            return au === du ? fu : su(au, fu, cu)
                        }
                        ))
                    }
                    : function(su, fu) {
                        au.set(fu, su)
                    }
                    , Du = 0; Du < fu.length; Du++)
                        fu[Du].forEach(cu)
                }
                )) : au.constructor(fu[0])
            }
            function Ot(au, su, fu, cu) {
                var Du = au === du
                  , lu = su.next();
                if (lu.done) {
                    var hu = Du ? fu : au
                      , pu = cu(hu);
                    return pu === hu ? au : pu
                }
                $(Du || au && au.set, "invalid keyPath");
                var _u = lu.value
                  , vu = Du ? du : au.get(_u, du)
                  , Fu = Ot(vu, su, fu, cu);
                return Fu === vu ? au : Fu === du ? au.remove(_u) : (Du ? yt() : au).set(_u, Fu)
            }
            function Rt(au) {
                return au = (au = (858993459 & (au -= au >> 1 & 1431655765)) + (au >> 2 & 858993459)) + (au >> 4) & 252645135,
                127 & (au += au >> 8) + (au >> 16)
            }
            function kt(au, su, fu, cu) {
                var Du = cu ? au : h(au);
                return Du[su] = fu,
                Du
            }
            function jt(au, su, fu, cu) {
                var Du = au.length + 1;
                if (cu && su + 1 === Du)
                    return au[su] = fu,
                    au;
                for (var lu = new Array(Du), hu = 0, pu = 0; pu < Du; pu++)
                    pu === su ? (lu[pu] = fu,
                    hu = -1) : lu[pu] = au[pu + hu];
                return lu
            }
            function Pt(au, su, fu) {
                var cu = au.length - 1;
                if (fu && su === cu)
                    return au.pop(),
                    au;
                for (var Du = new Array(cu), lu = 0, hu = 0; hu < cu; hu++)
                    hu === su && (lu = 1),
                    Du[hu] = au[hu + lu];
                return Du
            }
            function Tt(au) {
                var su = Kt();
                if (null == au)
                    return su;
                if (qt(au))
                    return au;
                var fu = r(au)
                  , cu = fu.size;
                return 0 === cu ? su : (ct(cu),
                cu > 0 && cu < hu ? Wt(0, cu, lu, null, new Nt(fu.toArray())) : su.withMutations((function(au) {
                    au.setSize(cu),
                    fu.forEach((function(su, fu) {
                        return au.set(fu, su)
                    }
                    ))
                }
                )))
            }
            function qt(au) {
                return !(!au || !au[Ku])
            }
            function Nt(au, su) {
                this.array = au,
                this.ownerID = su
            }
            function Ut(au, su) {
                function u(au, su, fu) {
                    return 0 === su ? r(au, fu) : n(au, su, fu)
                }
                function r(au, lu) {
                    var du = lu === Du ? pu && pu.array : au && au.array
                      , _u = lu > fu ? 0 : fu - lu
                      , vu = cu - lu;
                    return vu > hu && (vu = hu),
                    function() {
                        if (_u === vu)
                            return Qu;
                        var au = su ? --vu : _u++;
                        return du && du[au]
                    }
                }
                function n(au, Du, pu) {
                    var du, _u = au && au.array, vu = pu > fu ? 0 : fu - pu >> Du, Fu = 1 + (cu - pu >> Du);
                    return Fu > hu && (Fu = hu),
                    function() {
                        for (; ; ) {
                            if (du) {
                                var au = du();
                                if (au !== Qu)
                                    return au;
                                du = null
                            }
                            if (vu === Fu)
                                return Qu;
                            var fu = su ? --Fu : vu++;
                            du = u(_u && _u[fu], Du - lu, pu + (fu << Du))
                        }
                    }
                }
                var fu = au._origin
                  , cu = au._capacity
                  , Du = Qt(cu)
                  , pu = au._tail;
                return u(au._root, au._level, 0)
            }
            function Wt(au, su, fu, cu, Du, lu, hu) {
                var pu = Object.create(Vu);
                return pu.size = su - au,
                pu._origin = au,
                pu._capacity = su,
                pu._level = fu,
                pu._root = cu,
                pu._tail = Du,
                pu.__ownerID = lu,
                pu.__hash = hu,
                pu.__altered = !1,
                pu
            }
            function Kt() {
                return Ju || (Ju = Wt(0, 0, lu))
            }
            function Jt(au, su, fu) {
                if ((su = d(au, su)) !== su)
                    return au;
                if (su >= au.size || su < 0)
                    return au.withMutations((function(au) {
                        su < 0 ? Vt(au, su).set(0, fu) : Vt(au, 0, su + 1).set(su, fu)
                    }
                    ));
                su += au._origin;
                var cu = au._tail
                  , Du = au._root
                  , lu = c(vu);
                return su >= Qt(au._capacity) ? cu = Ht(cu, au.__ownerID, 0, su, fu, lu) : Du = Ht(Du, au.__ownerID, au._level, su, fu, lu),
                lu.value ? au.__ownerID ? (au._root = Du,
                au._tail = cu,
                au.__hash = void 0,
                au.__altered = !0,
                au) : Wt(au._origin, au._capacity, au._level, Du, cu) : au
            }
            function Ht(au, su, fu, cu, Du, hu) {
                var du, _u = cu >>> fu & pu, vu = au && _u < au.array.length;
                if (!vu && void 0 === Du)
                    return au;
                if (fu > 0) {
                    var Fu = au && au.array[_u]
                      , Eu = Ht(Fu, su, fu - lu, cu, Du, hu);
                    return Eu === Fu ? au : ((du = Xt(au, su)).array[_u] = Eu,
                    du)
                }
                return vu && au.array[_u] === Du ? au : (D(hu),
                du = Xt(au, su),
                void 0 === Du && _u === du.array.length - 1 ? du.array.pop() : du.array[_u] = Du,
                du)
            }
            function Xt(au, su) {
                return su && au && su === au.ownerID ? au : new Nt(au ? au.array.slice() : [],su)
            }
            function Gt(au, su) {
                if (su >= Qt(au._capacity))
                    return au._tail;
                if (su < 1 << au._level + lu) {
                    for (var fu = au._root, cu = au._level; fu && cu > 0; )
                        fu = fu.array[su >>> cu & pu],
                        cu -= lu;
                    return fu
                }
            }
            function Vt(au, su, fu) {
                void 0 !== su && (su |= 0),
                void 0 !== fu && (fu |= 0);
                var cu = au.__ownerID || new l
                  , Du = au._origin
                  , hu = au._capacity
                  , du = Du + su
                  , _u = void 0 === fu ? hu : fu < 0 ? hu + fu : Du + fu;
                if (du === Du && _u === hu)
                    return au;
                if (du >= _u)
                    return au.clear();
                for (var vu = au._level, Fu = au._root, Eu = 0; du + Eu < 0; )
                    Fu = new Nt(Fu && Fu.array.length ? [void 0, Fu] : [],cu),
                    Eu += 1 << (vu += lu);
                Eu && (du += Eu,
                Du += Eu,
                _u += Eu,
                hu += Eu);
                for (var Cu = Qt(hu), Au = Qt(_u); Au >= 1 << vu + lu; )
                    Fu = new Nt(Fu && Fu.array.length ? [Fu] : [],cu),
                    vu += lu;
                var yu = au._tail
                  , Bu = Au < Cu ? Gt(au, _u - 1) : Au > Cu ? new Nt([],cu) : yu;
                if (yu && Au > Cu && du < hu && yu.array.length) {
                    for (var gu = Fu = Xt(Fu, cu), mu = vu; mu > lu; mu -= lu) {
                        var Su = Cu >>> mu & pu;
                        gu = gu.array[Su] = Xt(gu.array[Su], cu)
                    }
                    gu.array[Cu >>> lu & pu] = yu
                }
                if (_u < hu && (Bu = Bu && Bu.removeAfter(cu, 0, _u)),
                du >= Au)
                    du -= Au,
                    _u -= Au,
                    vu = lu,
                    Fu = null,
                    Bu = Bu && Bu.removeBefore(cu, 0, du);
                else if (du > Du || Au < Cu) {
                    for (Eu = 0; Fu; ) {
                        var wu = du >>> vu & pu;
                        if (wu !== Au >>> vu & pu)
                            break;
                        wu && (Eu += (1 << vu) * wu),
                        vu -= lu,
                        Fu = Fu.array[wu]
                    }
                    Fu && du > Du && (Fu = Fu.removeBefore(cu, vu, du - Eu)),
                    Fu && Au < Cu && (Fu = Fu.removeAfter(cu, vu, Au - Eu)),
                    Eu && (du -= Eu,
                    _u -= Eu)
                }
                return au.__ownerID ? (au.size = _u - du,
                au._origin = du,
                au._capacity = _u,
                au._level = vu,
                au._root = Fu,
                au._tail = Bu,
                au.__hash = void 0,
                au.__altered = !0,
                au) : Wt(du, _u, vu, Fu, Bu)
            }
            function Yt(au, su, fu) {
                for (var cu = [], Du = 0, lu = 0; lu < fu.length; lu++) {
                    var hu = fu[lu]
                      , pu = r(hu);
                    pu.size > Du && (Du = pu.size),
                    i(hu) || (pu = pu.map((function(au) {
                        return J(au)
                    }
                    ))),
                    cu.push(pu)
                }
                return Du > au.size && (au = au.setSize(Du)),
                zt(au, su, cu)
            }
            function Qt(au) {
                return au < hu ? 0 : au - 1 >>> lu << lu
            }
            function $t(au) {
                return null == au ? ee() : Zt(au) ? au : ee().withMutations((function(su) {
                    var fu = u(au);
                    ct(fu.size),
                    fu.forEach((function(au, fu) {
                        return su.set(fu, au)
                    }
                    ))
                }
                ))
            }
            function Zt(au) {
                return lt(au) && f(au)
            }
            function te(au, su, fu, cu) {
                var Du = Object.create($t.prototype);
                return Du.size = au ? au.size : 0,
                Du._map = au,
                Du._list = su,
                Du.__ownerID = fu,
                Du.__hash = cu,
                Du
            }
            function ee() {
                return $u || ($u = te(yt(), Kt()))
            }
            function ue(au, su, fu) {
                var cu, Du, lu = au._map, pu = au._list, _u = lu.get(su), vu = void 0 !== _u;
                if (fu === du) {
                    if (!vu)
                        return au;
                    pu.size >= hu && pu.size >= 2 * lu.size ? (Du = pu.filter((function(au, su) {
                        return void 0 !== au && _u !== su
                    }
                    )),
                    cu = Du.toKeyedSeq().map((function(au) {
                        return au[0]
                    }
                    )).flip().toMap(),
                    au.__ownerID && (cu.__ownerID = Du.__ownerID = au.__ownerID)) : (cu = lu.remove(su),
                    Du = _u === pu.size - 1 ? pu.pop() : pu.set(_u, void 0))
                } else if (vu) {
                    if (fu === pu.get(_u)[1])
                        return au;
                    cu = lu,
                    Du = pu.set(_u, [su, fu])
                } else
                    cu = lu.set(su, pu.size),
                    Du = pu.set(pu.size, [su, fu]);
                return au.__ownerID ? (au.size = cu.size,
                au._map = cu,
                au._list = Du,
                au.__hash = void 0,
                au) : te(cu, Du)
            }
            function re(au, su) {
                this._iter = au,
                this._useKeys = su,
                this.size = au.size
            }
            function ne(au) {
                this._iter = au,
                this.size = au.size
            }
            function ie(au) {
                this._iter = au,
                this.size = au.size
            }
            function oe(au) {
                this._iter = au,
                this.size = au.size
            }
            function ae(au) {
                var su = be(au);
                return su._iter = au,
                su.size = au.size,
                su.flip = function() {
                    return au
                }
                ,
                su.reverse = function() {
                    var su = au.reverse.apply(this);
                    return su.flip = function() {
                        return au.reverse()
                    }
                    ,
                    su
                }
                ,
                su.has = function(su) {
                    return au.includes(su)
                }
                ,
                su.includes = function(su) {
                    return au.has(su)
                }
                ,
                su.cacheResult = Ie,
                su.__iterateUncached = function(su, fu) {
                    var cu = this;
                    return au.__iterate((function(au, fu) {
                        return !1 !== su(fu, au, cu)
                    }
                    ), fu)
                }
                ,
                su.__iteratorUncached = function(su, fu) {
                    if (su === Cu) {
                        var cu = au.__iterator(su, fu);
                        return new A((function() {
                            var au = cu.next();
                            if (!au.done) {
                                var su = au.value[0];
                                au.value[0] = au.value[1],
                                au.value[1] = su
                            }
                            return au
                        }
                        ))
                    }
                    return au.__iterator(su === Eu ? Fu : Eu, fu)
                }
                ,
                su
            }
            function se(au, su, fu) {
                var cu = be(au);
                return cu.size = au.size,
                cu.has = function(su) {
                    return au.has(su)
                }
                ,
                cu.get = function(cu, Du) {
                    var lu = au.get(cu, du);
                    return lu === du ? Du : su.call(fu, lu, cu, au)
                }
                ,
                cu.__iterateUncached = function(cu, Du) {
                    var lu = this;
                    return au.__iterate((function(au, Du, hu) {
                        return !1 !== cu(su.call(fu, au, Du, hu), Du, lu)
                    }
                    ), Du)
                }
                ,
                cu.__iteratorUncached = function(cu, Du) {
                    var lu = au.__iterator(Cu, Du);
                    return new A((function() {
                        var Du = lu.next();
                        if (Du.done)
                            return Du;
                        var hu = Du.value
                          , pu = hu[0];
                        return y(cu, pu, su.call(fu, hu[1], pu, au), Du)
                    }
                    ))
                }
                ,
                cu
            }
            function fe(au, su) {
                var fu = be(au);
                return fu._iter = au,
                fu.size = au.size,
                fu.reverse = function() {
                    return au
                }
                ,
                au.flip && (fu.flip = function() {
                    var su = ae(au);
                    return su.reverse = function() {
                        return au.flip()
                    }
                    ,
                    su
                }
                ),
                fu.get = function(fu, cu) {
                    return au.get(su ? fu : -1 - fu, cu)
                }
                ,
                fu.has = function(fu) {
                    return au.has(su ? fu : -1 - fu)
                }
                ,
                fu.includes = function(su) {
                    return au.includes(su)
                }
                ,
                fu.cacheResult = Ie,
                fu.__iterate = function(su, fu) {
                    var cu = this;
                    return au.__iterate((function(au, fu) {
                        return su(au, fu, cu)
                    }
                    ), !fu)
                }
                ,
                fu.__iterator = function(su, fu) {
                    return au.__iterator(su, !fu)
                }
                ,
                fu
            }
            function ce(au, su, fu, cu) {
                var Du = be(au);
                return cu && (Du.has = function(cu) {
                    var Du = au.get(cu, du);
                    return Du !== du && !!su.call(fu, Du, cu, au)
                }
                ,
                Du.get = function(cu, Du) {
                    var lu = au.get(cu, du);
                    return lu !== du && su.call(fu, lu, cu, au) ? lu : Du
                }
                ),
                Du.__iterateUncached = function(Du, lu) {
                    var hu = this
                      , pu = 0;
                    return au.__iterate((function(au, lu, du) {
                        if (su.call(fu, au, lu, du))
                            return pu++,
                            Du(au, cu ? lu : pu - 1, hu)
                    }
                    ), lu),
                    pu
                }
                ,
                Du.__iteratorUncached = function(Du, lu) {
                    var hu = au.__iterator(Cu, lu)
                      , pu = 0;
                    return new A((function() {
                        for (; ; ) {
                            var lu = hu.next();
                            if (lu.done)
                                return lu;
                            var du = lu.value
                              , _u = du[0]
                              , vu = du[1];
                            if (su.call(fu, vu, _u, au))
                                return y(Du, cu ? _u : pu++, vu, lu)
                        }
                    }
                    ))
                }
                ,
                Du
            }
            function De(au, su, fu) {
                var cu = Dt().asMutable();
                return au.__iterate((function(Du, lu) {
                    cu.update(su.call(fu, Du, lu, au), 0, (function(au) {
                        return au + 1
                    }
                    ))
                }
                )),
                cu.asImmutable()
            }
            function le(au, su, fu) {
                var cu = o(au)
                  , Du = (f(au) ? $t() : Dt()).asMutable();
                au.__iterate((function(lu, hu) {
                    Du.update(su.call(fu, lu, hu, au), (function(au) {
                        return (au = au || []).push(cu ? [hu, lu] : lu),
                        au
                    }
                    ))
                }
                ));
                var lu = we(au);
                return Du.map((function(su) {
                    return ge(au, lu(su))
                }
                ))
            }
            function he(au, su, fu, cu) {
                var Du = au.size;
                if (void 0 !== su && (su |= 0),
                void 0 !== fu && (fu === 1 / 0 ? fu = Du : fu |= 0),
                v(su, fu, Du))
                    return au;
                var lu = F(su, Du)
                  , hu = E(fu, Du);
                if (lu != lu || hu != hu)
                    return he(au.toSeq().cacheResult(), su, fu, cu);
                var pu, du = hu - lu;
                du == du && (pu = du < 0 ? 0 : du);
                var _u = be(au);
                return _u.size = 0 === pu ? pu : au.size && pu || void 0,
                !cu && j(au) && pu >= 0 && (_u.get = function(su, fu) {
                    return (su = d(this, su)) >= 0 && su < pu ? au.get(su + lu, fu) : fu
                }
                ),
                _u.__iterateUncached = function(su, fu) {
                    var Du = this;
                    if (0 === pu)
                        return 0;
                    if (fu)
                        return this.cacheResult().__iterate(su, fu);
                    var hu = 0
                      , du = !0
                      , _u = 0;
                    return au.__iterate((function(au, fu) {
                        if (!du || !(du = hu++ < lu))
                            return _u++,
                            !1 !== su(au, cu ? fu : _u - 1, Du) && _u !== pu
                    }
                    )),
                    _u
                }
                ,
                _u.__iteratorUncached = function(su, fu) {
                    if (0 !== pu && fu)
                        return this.cacheResult().__iterator(su, fu);
                    var Du = 0 !== pu && au.__iterator(su, fu)
                      , hu = 0
                      , du = 0;
                    return new A((function() {
                        for (; hu++ < lu; )
                            Du.next();
                        if (++du > pu)
                            return B();
                        var au = Du.next();
                        return cu || su === Eu ? au : y(su, du - 1, su === Fu ? void 0 : au.value[1], au)
                    }
                    ))
                }
                ,
                _u
            }
            function pe(au, su, fu) {
                var cu = be(au);
                return cu.__iterateUncached = function(cu, Du) {
                    var lu = this;
                    if (Du)
                        return this.cacheResult().__iterate(cu, Du);
                    var hu = 0;
                    return au.__iterate((function(au, Du, pu) {
                        return su.call(fu, au, Du, pu) && ++hu && cu(au, Du, lu)
                    }
                    )),
                    hu
                }
                ,
                cu.__iteratorUncached = function(cu, Du) {
                    var lu = this;
                    if (Du)
                        return this.cacheResult().__iterator(cu, Du);
                    var hu = au.__iterator(Cu, Du)
                      , pu = !0;
                    return new A((function() {
                        if (!pu)
                            return B();
                        var au = hu.next();
                        if (au.done)
                            return au;
                        var Du = au.value
                          , du = Du[0]
                          , _u = Du[1];
                        return su.call(fu, _u, du, lu) ? cu === Cu ? au : y(cu, du, _u, au) : (pu = !1,
                        B())
                    }
                    ))
                }
                ,
                cu
            }
            function de(au, su, fu, cu) {
                var Du = be(au);
                return Du.__iterateUncached = function(Du, lu) {
                    var hu = this;
                    if (lu)
                        return this.cacheResult().__iterate(Du, lu);
                    var pu = !0
                      , du = 0;
                    return au.__iterate((function(au, lu, _u) {
                        if (!pu || !(pu = su.call(fu, au, lu, _u)))
                            return du++,
                            Du(au, cu ? lu : du - 1, hu)
                    }
                    )),
                    du
                }
                ,
                Du.__iteratorUncached = function(Du, lu) {
                    var hu = this;
                    if (lu)
                        return this.cacheResult().__iterator(Du, lu);
                    var pu = au.__iterator(Cu, lu)
                      , du = !0
                      , _u = 0;
                    return new A((function() {
                        var au, lu, vu;
                        do {
                            if ((au = pu.next()).done)
                                return cu || Du === Eu ? au : y(Du, _u++, Du === Fu ? void 0 : au.value[1], au);
                            var Au = au.value;
                            lu = Au[0],
                            vu = Au[1],
                            du && (du = su.call(fu, vu, lu, hu))
                        } while (du);
                        return Du === Cu ? au : y(Du, lu, vu, au)
                    }
                    ))
                }
                ,
                Du
            }
            function _e(au, su) {
                var fu = o(au)
                  , cu = [au].concat(su).map((function(au) {
                    return i(au) ? fu && (au = u(au)) : au = fu ? T(au) : q(Array.isArray(au) ? au : [au]),
                    au
                }
                )).filter((function(au) {
                    return 0 !== au.size
                }
                ));
                if (0 === cu.length)
                    return au;
                if (1 === cu.length) {
                    var Du = cu[0];
                    if (Du === au || fu && o(Du) || a(au) && a(Du))
                        return Du
                }
                var lu = new z(cu);
                return fu ? lu = lu.toKeyedSeq() : a(au) || (lu = lu.toSetSeq()),
                (lu = lu.flatten(!0)).size = cu.reduce((function(au, su) {
                    if (void 0 !== au) {
                        var fu = su.size;
                        if (void 0 !== fu)
                            return au + fu
                    }
                }
                ), 0),
                lu
            }
            function ve(au, su, fu) {
                var cu = be(au);
                return cu.__iterateUncached = function(cu, Du) {
                    function o(au, pu) {
                        var du = this;
                        au.__iterate((function(au, Du) {
                            return (!su || pu < su) && i(au) ? o(au, pu + 1) : !1 === cu(au, fu ? Du : lu++, du) && (hu = !0),
                            !hu
                        }
                        ), Du)
                    }
                    var lu = 0
                      , hu = !1;
                    return o(au, 0),
                    lu
                }
                ,
                cu.__iteratorUncached = function(cu, Du) {
                    var lu = au.__iterator(cu, Du)
                      , hu = []
                      , pu = 0;
                    return new A((function() {
                        for (; lu; ) {
                            var au = lu.next();
                            if (!1 === au.done) {
                                var du = au.value;
                                if (cu === Cu && (du = du[1]),
                                su && !(hu.length < su) || !i(du))
                                    return fu ? au : y(cu, pu++, du, au);
                                hu.push(lu),
                                lu = du.__iterator(cu, Du)
                            } else
                                lu = hu.pop()
                        }
                        return B()
                    }
                    ))
                }
                ,
                cu
            }
            function Fe(au, su, fu) {
                var cu = we(au);
                return au.toSeq().map((function(Du, lu) {
                    return cu(su.call(fu, Du, lu, au))
                }
                )).flatten(!0)
            }
            function Ee(au, su) {
                var fu = be(au);
                return fu.size = au.size && 2 * au.size - 1,
                fu.__iterateUncached = function(fu, cu) {
                    var Du = this
                      , lu = 0;
                    return au.__iterate((function(au, cu) {
                        return (!lu || !1 !== fu(su, lu++, Du)) && !1 !== fu(au, lu++, Du)
                    }
                    ), cu),
                    lu
                }
                ,
                fu.__iteratorUncached = function(fu, cu) {
                    var Du, lu = au.__iterator(Eu, cu), hu = 0;
                    return new A((function() {
                        return (!Du || hu % 2) && (Du = lu.next()).done ? Du : hu % 2 ? y(fu, hu++, su) : y(fu, hu++, Du.value, Du)
                    }
                    ))
                }
                ,
                fu
            }
            function Ce(au, su, fu) {
                su || (su = xe);
                var cu = o(au)
                  , Du = 0
                  , lu = au.toSeq().map((function(su, cu) {
                    return [cu, su, Du++, fu ? fu(su, cu, au) : su]
                }
                )).toArray();
                return lu.sort((function(au, fu) {
                    return su(au[3], fu[3]) || au[2] - fu[2]
                }
                )).forEach(cu ? function(au, su) {
                    lu[su].length = 2
                }
                : function(au, su) {
                    lu[su] = au[1]
                }
                ),
                cu ? x(lu) : a(au) ? L(lu) : M(lu)
            }
            function Ae(au, su, fu) {
                if (su || (su = xe),
                fu) {
                    var cu = au.toSeq().map((function(su, cu) {
                        return [su, fu(su, cu, au)]
                    }
                    )).reduce((function(au, fu) {
                        return ye(su, au[1], fu[1]) ? fu : au
                    }
                    ));
                    return cu && cu[0]
                }
                return au.reduce((function(au, fu) {
                    return ye(su, au, fu) ? fu : au
                }
                ))
            }
            function ye(au, su, fu) {
                var cu = au(fu, su);
                return 0 === cu && fu !== su && (null == fu || fu != fu) || cu > 0
            }
            function Be(au, su, fu) {
                var cu = be(au);
                return cu.size = new z(fu).map((function(au) {
                    return au.size
                }
                )).min(),
                cu.__iterate = function(au, su) {
                    for (var fu, cu = this.__iterator(Eu, su), Du = 0; !(fu = cu.next()).done && !1 !== au(fu.value, Du++, this); )
                        ;
                    return Du
                }
                ,
                cu.__iteratorUncached = function(au, cu) {
                    var Du = fu.map((function(au) {
                        return au = e(au),
                        S(cu ? au.reverse() : au)
                    }
                    ))
                      , lu = 0
                      , hu = !1;
                    return new A((function() {
                        var fu;
                        return hu || (fu = Du.map((function(au) {
                            return au.next()
                        }
                        )),
                        hu = fu.some((function(au) {
                            return au.done
                        }
                        ))),
                        hu ? B() : y(au, lu++, su.apply(null, fu.map((function(au) {
                            return au.value
                        }
                        ))))
                    }
                    ))
                }
                ,
                cu
            }
            function ge(au, su) {
                return j(au) ? su : au.constructor(su)
            }
            function me(au) {
                if (au !== Object(au))
                    throw new TypeError("Expected [K, V] tuple: " + au)
            }
            function Se(au) {
                return ct(au.size),
                p(au)
            }
            function we(au) {
                return o(au) ? u : a(au) ? r : n
            }
            function be(au) {
                return Object.create((o(au) ? x : a(au) ? L : M).prototype)
            }
            function Ie() {
                return this._iter.cacheResult ? (this._iter.cacheResult(),
                this.size = this._iter.size,
                this) : I.prototype.cacheResult.call(this)
            }
            function xe(au, su) {
                return au > su ? 1 : au < su ? -1 : 0
            }
            function Le(au) {
                var su = S(au);
                if (!su) {
                    if (!b(au))
                        throw new TypeError("Expected iterable or array-like: " + au);
                    su = S(e(au))
                }
                return su
            }
            function Me(au, su) {
                var fu, r = function(Du) {
                    if (Du instanceof r)
                        return Du;
                    if (!(this instanceof r))
                        return new r(Du);
                    if (!fu) {
                        fu = !0;
                        var lu = Object.keys(au);
                        Re(cu, lu),
                        cu.size = lu.length,
                        cu._name = su,
                        cu._keys = lu,
                        cu._defaultValues = au
                    }
                    this._map = Dt(Du)
                }, cu = r.prototype = Object.create(Xu);
                return cu.constructor = r,
                r
            }
            function ze(au, su, fu) {
                var cu = Object.create(Object.getPrototypeOf(au));
                return cu._map = su,
                cu.__ownerID = fu,
                cu
            }
            function Oe(au) {
                return au._name || au.constructor.name || "Record"
            }
            function Re(au, su) {
                try {
                    su.forEach(ke.bind(void 0, au))
                } catch (au) {}
            }
            function ke(au, su) {
                Object.defineProperty(au, su, {
                    get: function() {
                        return this.get(su)
                    },
                    set: function(au) {
                        $(this.__ownerID, "Cannot set on an immutable record."),
                        this.set(su, au)
                    }
                })
            }
            function je(au) {
                return null == au ? Ne() : Pe(au) && !f(au) ? au : Ne().withMutations((function(su) {
                    var fu = n(au);
                    ct(fu.size),
                    fu.forEach((function(au) {
                        return su.add(au)
                    }
                    ))
                }
                ))
            }
            function Pe(au) {
                return !(!au || !au[Yu])
            }
            function Te(au, su) {
                return au.__ownerID ? (au.size = su.size,
                au._map = su,
                au) : su === au._map ? au : 0 === su.size ? au.__empty() : au.__make(su)
            }
            function qe(au, su) {
                var fu = Object.create(Gu);
                return fu.size = au ? au.size : 0,
                fu._map = au,
                fu.__ownerID = su,
                fu
            }
            function Ne() {
                return Zu || (Zu = qe(yt()))
            }
            function Ue(au) {
                return null == au ? Je() : We(au) ? au : Je().withMutations((function(su) {
                    var fu = n(au);
                    ct(fu.size),
                    fu.forEach((function(au) {
                        return su.add(au)
                    }
                    ))
                }
                ))
            }
            function We(au) {
                return Pe(au) && f(au)
            }
            function Ke(au, su) {
                var fu = Object.create(er);
                return fu.size = au ? au.size : 0,
                fu._map = au,
                fu.__ownerID = su,
                fu
            }
            function Je() {
                return tr || (tr = Ke(ee()))
            }
            function He(au) {
                return null == au ? Ve() : Xe(au) ? au : Ve().unshiftAll(au)
            }
            function Xe(au) {
                return !(!au || !au[rr])
            }
            function Ge(au, su, fu, cu) {
                var Du = Object.create(nr);
                return Du.size = au,
                Du._head = su,
                Du.__ownerID = fu,
                Du.__hash = cu,
                Du.__altered = !1,
                Du
            }
            function Ve() {
                return ur || (ur = Ge(0))
            }
            function Ye(au, su) {
                var u = function(fu) {
                    au.prototype[fu] = su[fu]
                };
                return Object.keys(su).forEach(u),
                Object.getOwnPropertySymbols && Object.getOwnPropertySymbols(su).forEach(u),
                au
            }
            function Qe(au, su) {
                return su
            }
            function $e(au, su) {
                return [su, au]
            }
            function Ze(au) {
                return function() {
                    return !au.apply(this, arguments)
                }
            }
            function tu(au) {
                return function() {
                    return -au.apply(this, arguments)
                }
            }
            function eu(au) {
                return "string" == typeof au ? JSON.stringify(au) : String(au)
            }
            function uu() {
                return h(arguments)
            }
            function ru(au, su) {
                return au < su ? 1 : au > su ? -1 : 0
            }
            function nu(au) {
                if (au.size === 1 / 0)
                    return 0;
                var su = f(au)
                  , fu = o(au)
                  , cu = su ? 1 : 0;
                return iu(au.__iterate(fu ? su ? function(au, su) {
                    cu = 31 * cu + ou(it(au), it(su)) | 0
                }
                : function(au, su) {
                    cu = cu + ou(it(au), it(su)) | 0
                }
                : su ? function(au) {
                    cu = 31 * cu + it(au) | 0
                }
                : function(au) {
                    cu = cu + it(au) | 0
                }
                ), cu)
            }
            function iu(au, su) {
                return su = Iu(su, 3432918353),
                su = Iu(su << 15 | su >>> -15, 461845907),
                su = Iu(su << 13 | su >>> -13, 5),
                su = Iu((su = (su + 3864292196 | 0) ^ au) ^ su >>> 16, 2246822507),
                nt((su = Iu(su ^ su >>> 13, 3266489909)) ^ su >>> 16)
            }
            function ou(au, su) {
                return au ^ su + 2654435769 + (au << 6) + (au >> 2) | 0
            }
            var au = Array.prototype.slice;
            t(u, e),
            t(r, e),
            t(n, e),
            e.isIterable = i,
            e.isKeyed = o,
            e.isIndexed = a,
            e.isAssociative = s,
            e.isOrdered = f,
            e.Keyed = u,
            e.Indexed = r,
            e.Set = n;
            var su = "@@__IMMUTABLE_ITERABLE__@@"
              , fu = "@@__IMMUTABLE_KEYED__@@"
              , cu = "@@__IMMUTABLE_INDEXED__@@"
              , Du = "@@__IMMUTABLE_ORDERED__@@"
              , lu = 5
              , hu = 1 << lu
              , pu = hu - 1
              , du = {}
              , _u = {
                value: !1
            }
              , vu = {
                value: !1
            }
              , Fu = 0
              , Eu = 1
              , Cu = 2
              , Au = "function" == typeof Symbol && Symbol.iterator
              , yu = "@@iterator"
              , Bu = Au || yu;
            A.prototype.toString = function() {
                return "[Iterator]"
            }
            ,
            A.KEYS = Fu,
            A.VALUES = Eu,
            A.ENTRIES = Cu,
            A.prototype.inspect = A.prototype.toSource = function() {
                return this.toString()
            }
            ,
            A.prototype[Bu] = function() {
                return this
            }
            ,
            t(I, e),
            I.of = function() {
                return I(arguments)
            }
            ,
            I.prototype.toSeq = function() {
                return this
            }
            ,
            I.prototype.toString = function() {
                return this.__toString("Seq {", "}")
            }
            ,
            I.prototype.cacheResult = function() {
                return !this._cache && this.__iterateUncached && (this._cache = this.entrySeq().toArray(),
                this.size = this._cache.length),
                this
            }
            ,
            I.prototype.__iterate = function(au, su) {
                return W(this, au, su, !0)
            }
            ,
            I.prototype.__iterator = function(au, su) {
                return K(this, au, su, !0)
            }
            ,
            t(x, I),
            x.prototype.toKeyedSeq = function() {
                return this
            }
            ,
            t(L, I),
            L.of = function() {
                return L(arguments)
            }
            ,
            L.prototype.toIndexedSeq = function() {
                return this
            }
            ,
            L.prototype.toString = function() {
                return this.__toString("Seq [", "]")
            }
            ,
            L.prototype.__iterate = function(au, su) {
                return W(this, au, su, !1)
            }
            ,
            L.prototype.__iterator = function(au, su) {
                return K(this, au, su, !1)
            }
            ,
            t(M, I),
            M.of = function() {
                return M(arguments)
            }
            ,
            M.prototype.toSetSeq = function() {
                return this
            }
            ,
            I.isSeq = j,
            I.Keyed = x,
            I.Set = M,
            I.Indexed = L;
            var gu, mu, Su, wu = "@@__IMMUTABLE_SEQ__@@";
            I.prototype[wu] = !0,
            t(z, L),
            z.prototype.get = function(au, su) {
                return this.has(au) ? this._array[d(this, au)] : su
            }
            ,
            z.prototype.__iterate = function(au, su) {
                for (var fu = this._array, cu = fu.length - 1, Du = 0; Du <= cu; Du++)
                    if (!1 === au(fu[su ? cu - Du : Du], Du, this))
                        return Du + 1;
                return Du
            }
            ,
            z.prototype.__iterator = function(au, su) {
                var fu = this._array
                  , cu = fu.length - 1
                  , Du = 0;
                return new A((function() {
                    return Du > cu ? B() : y(au, Du, fu[su ? cu - Du++ : Du++])
                }
                ))
            }
            ,
            t(O, x),
            O.prototype.get = function(au, su) {
                return void 0 === su || this.has(au) ? this._object[au] : su
            }
            ,
            O.prototype.has = function(au) {
                return this._object.hasOwnProperty(au)
            }
            ,
            O.prototype.__iterate = function(au, su) {
                for (var fu = this._object, cu = this._keys, Du = cu.length - 1, lu = 0; lu <= Du; lu++) {
                    var hu = cu[su ? Du - lu : lu];
                    if (!1 === au(fu[hu], hu, this))
                        return lu + 1
                }
                return lu
            }
            ,
            O.prototype.__iterator = function(au, su) {
                var fu = this._object
                  , cu = this._keys
                  , Du = cu.length - 1
                  , lu = 0;
                return new A((function() {
                    var hu = cu[su ? Du - lu : lu];
                    return lu++ > Du ? B() : y(au, hu, fu[hu])
                }
                ))
            }
            ,
            O.prototype[Du] = !0,
            t(R, L),
            R.prototype.__iterateUncached = function(au, su) {
                if (su)
                    return this.cacheResult().__iterate(au, su);
                var fu = S(this._iterable)
                  , cu = 0;
                if (m(fu))
                    for (var Du; !(Du = fu.next()).done && !1 !== au(Du.value, cu++, this); )
                        ;
                return cu
            }
            ,
            R.prototype.__iteratorUncached = function(au, su) {
                if (su)
                    return this.cacheResult().__iterator(au, su);
                var fu = S(this._iterable);
                if (!m(fu))
                    return new A(B);
                var cu = 0;
                return new A((function() {
                    var su = fu.next();
                    return su.done ? su : y(au, cu++, su.value)
                }
                ))
            }
            ,
            t(k, L),
            k.prototype.__iterateUncached = function(au, su) {
                if (su)
                    return this.cacheResult().__iterate(au, su);
                for (var fu = this._iterator, cu = this._iteratorCache, Du = 0; Du < cu.length; )
                    if (!1 === au(cu[Du], Du++, this))
                        return Du;
                for (var lu; !(lu = fu.next()).done; ) {
                    var hu = lu.value;
                    if (cu[Du] = hu,
                    !1 === au(hu, Du++, this))
                        break
                }
                return Du
            }
            ,
            k.prototype.__iteratorUncached = function(au, su) {
                if (su)
                    return this.cacheResult().__iterator(au, su);
                var fu = this._iterator
                  , cu = this._iteratorCache
                  , Du = 0;
                return new A((function() {
                    if (Du >= cu.length) {
                        var su = fu.next();
                        if (su.done)
                            return su;
                        cu[Du] = su.value
                    }
                    return y(au, Du, cu[Du++])
                }
                ))
            }
            ,
            t(Q, L),
            Q.prototype.toString = function() {
                return 0 === this.size ? "Repeat []" : "Repeat [ " + this._value + " " + this.size + " times ]"
            }
            ,
            Q.prototype.get = function(au, su) {
                return this.has(au) ? this._value : su
            }
            ,
            Q.prototype.includes = function(au) {
                return V(this._value, au)
            }
            ,
            Q.prototype.slice = function(au, su) {
                var fu = this.size;
                return v(au, su, fu) ? this : new Q(this._value,E(su, fu) - F(au, fu))
            }
            ,
            Q.prototype.reverse = function() {
                return this
            }
            ,
            Q.prototype.indexOf = function(au) {
                return V(this._value, au) ? 0 : -1
            }
            ,
            Q.prototype.lastIndexOf = function(au) {
                return V(this._value, au) ? this.size : -1
            }
            ,
            Q.prototype.__iterate = function(au, su) {
                for (var fu = 0; fu < this.size; fu++)
                    if (!1 === au(this._value, fu, this))
                        return fu + 1;
                return fu
            }
            ,
            Q.prototype.__iterator = function(au, su) {
                var fu = this
                  , cu = 0;
                return new A((function() {
                    return cu < fu.size ? y(au, cu++, fu._value) : B()
                }
                ))
            }
            ,
            Q.prototype.equals = function(au) {
                return au instanceof Q ? V(this._value, au._value) : Y(au)
            }
            ,
            t(Z, L),
            Z.prototype.toString = function() {
                return 0 === this.size ? "Range []" : "Range [ " + this._start + "..." + this._end + (1 !== this._step ? " by " + this._step : "") + " ]"
            }
            ,
            Z.prototype.get = function(au, su) {
                return this.has(au) ? this._start + d(this, au) * this._step : su
            }
            ,
            Z.prototype.includes = function(au) {
                var su = (au - this._start) / this._step;
                return su >= 0 && su < this.size && su === Math.floor(su)
            }
            ,
            Z.prototype.slice = function(au, su) {
                return v(au, su, this.size) ? this : (au = F(au, this.size),
                (su = E(su, this.size)) <= au ? new Z(0,0) : new Z(this.get(au, this._end),this.get(su, this._end),this._step))
            }
            ,
            Z.prototype.indexOf = function(au) {
                var su = au - this._start;
                if (su % this._step == 0) {
                    var fu = su / this._step;
                    if (fu >= 0 && fu < this.size)
                        return fu
                }
                return -1
            }
            ,
            Z.prototype.lastIndexOf = function(au) {
                return this.indexOf(au)
            }
            ,
            Z.prototype.__iterate = function(au, su) {
                for (var fu = this.size - 1, cu = this._step, Du = su ? this._start + fu * cu : this._start, lu = 0; lu <= fu; lu++) {
                    if (!1 === au(Du, lu, this))
                        return lu + 1;
                    Du += su ? -cu : cu
                }
                return lu
            }
            ,
            Z.prototype.__iterator = function(au, su) {
                var fu = this.size - 1
                  , cu = this._step
                  , Du = su ? this._start + fu * cu : this._start
                  , lu = 0;
                return new A((function() {
                    var hu = Du;
                    return Du += su ? -cu : cu,
                    lu > fu ? B() : y(au, lu++, hu)
                }
                ))
            }
            ,
            Z.prototype.equals = function(au) {
                return au instanceof Z ? this._start === au._start && this._end === au._end && this._step === au._step : Y(this, au)
            }
            ,
            t(tt, e),
            t(et, tt),
            t(ut, tt),
            t(rt, tt),
            tt.Keyed = et,
            tt.Indexed = ut,
            tt.Set = rt;
            var bu, Iu = "function" == typeof Math.imul && -2 === Math.imul(4294967295, 2) ? Math.imul : function(au, su) {
                var fu = 65535 & (au |= 0)
                  , cu = 65535 & (su |= 0);
                return fu * cu + ((au >>> 16) * cu + fu * (su >>> 16) << 16 >>> 0) | 0
            }
            , xu = Object.isExtensible, Lu = function() {
                try {
                    return Object.defineProperty({}, "@", {}),
                    !0
                } catch (au) {
                    return !1
                }
            }(), Mu = "function" == typeof WeakMap;
            Mu && (bu = new WeakMap);
            var zu = 0
              , Ou = "__immutablehash__";
            "function" == typeof Symbol && (Ou = Symbol(Ou));
            var Ru = 16
              , ju = 255
              , ku = 0
              , Tu = {};
            t(Dt, et),
            Dt.of = function() {
                var su = au.call(arguments, 0);
                return yt().withMutations((function(au) {
                    for (var fu = 0; fu < su.length; fu += 2) {
                        if (fu + 1 >= su.length)
                            throw new Error("Missing value for key: " + su[fu]);
                        au.set(su[fu], su[fu + 1])
                    }
                }
                ))
            }
            ,
            Dt.prototype.toString = function() {
                return this.__toString("Map {", "}")
            }
            ,
            Dt.prototype.get = function(au, su) {
                return this._root ? this._root.get(0, void 0, au, su) : su
            }
            ,
            Dt.prototype.set = function(au, su) {
                return Bt(this, au, su)
            }
            ,
            Dt.prototype.setIn = function(au, su) {
                return this.updateIn(au, du, (function() {
                    return su
                }
                ))
            }
            ,
            Dt.prototype.remove = function(au) {
                return Bt(this, au, du)
            }
            ,
            Dt.prototype.deleteIn = function(au) {
                return this.updateIn(au, (function() {
                    return du
                }
                ))
            }
            ,
            Dt.prototype.update = function(au, su, fu) {
                return 1 === arguments.length ? au(this) : this.updateIn([au], su, fu)
            }
            ,
            Dt.prototype.updateIn = function(au, su, fu) {
                fu || (fu = su,
                su = void 0);
                var cu = Ot(this, Le(au), su, fu);
                return cu === du ? void 0 : cu
            }
            ,
            Dt.prototype.clear = function() {
                return 0 === this.size ? this : this.__ownerID ? (this.size = 0,
                this._root = null,
                this.__hash = void 0,
                this.__altered = !0,
                this) : yt()
            }
            ,
            Dt.prototype.merge = function() {
                return xt(this, void 0, arguments)
            }
            ,
            Dt.prototype.mergeWith = function(su) {
                return xt(this, su, au.call(arguments, 1))
            }
            ,
            Dt.prototype.mergeIn = function(su) {
                var fu = au.call(arguments, 1);
                return this.updateIn(su, yt(), (function(au) {
                    return "function" == typeof au.merge ? au.merge.apply(au, fu) : fu[fu.length - 1]
                }
                ))
            }
            ,
            Dt.prototype.mergeDeep = function() {
                return xt(this, Lt, arguments)
            }
            ,
            Dt.prototype.mergeDeepWith = function(su) {
                var fu = au.call(arguments, 1);
                return xt(this, Mt(su), fu)
            }
            ,
            Dt.prototype.mergeDeepIn = function(su) {
                var fu = au.call(arguments, 1);
                return this.updateIn(su, yt(), (function(au) {
                    return "function" == typeof au.mergeDeep ? au.mergeDeep.apply(au, fu) : fu[fu.length - 1]
                }
                ))
            }
            ,
            Dt.prototype.sort = function(au) {
                return $t(Ce(this, au))
            }
            ,
            Dt.prototype.sortBy = function(au, su) {
                return $t(Ce(this, su, au))
            }
            ,
            Dt.prototype.withMutations = function(au) {
                var su = this.asMutable();
                return au(su),
                su.wasAltered() ? su.__ensureOwner(this.__ownerID) : this
            }
            ,
            Dt.prototype.asMutable = function() {
                return this.__ownerID ? this : this.__ensureOwner(new l)
            }
            ,
            Dt.prototype.asImmutable = function() {
                return this.__ensureOwner()
            }
            ,
            Dt.prototype.wasAltered = function() {
                return this.__altered
            }
            ,
            Dt.prototype.__iterator = function(au, su) {
                return new Ft(this,au,su)
            }
            ,
            Dt.prototype.__iterate = function(au, su) {
                var fu = this
                  , cu = 0;
                return this._root && this._root.iterate((function(su) {
                    return cu++,
                    au(su[1], su[0], fu)
                }
                ), su),
                cu
            }
            ,
            Dt.prototype.__ensureOwner = function(au) {
                return au === this.__ownerID ? this : au ? At(this.size, this._root, au, this.__hash) : (this.__ownerID = au,
                this.__altered = !1,
                this)
            }
            ,
            Dt.isMap = lt;
            var Pu = "@@__IMMUTABLE_MAP__@@"
              , qu = Dt.prototype;
            qu[Pu] = !0,
            qu.delete = qu.remove,
            qu.removeIn = qu.deleteIn,
            ht.prototype.get = function(au, su, fu, cu) {
                for (var Du = this.entries, lu = 0, hu = Du.length; lu < hu; lu++)
                    if (V(fu, Du[lu][0]))
                        return Du[lu][1];
                return cu
            }
            ,
            ht.prototype.update = function(au, su, fu, cu, Du, lu, hu) {
                for (var pu = Du === du, _u = this.entries, vu = 0, Fu = _u.length; vu < Fu && !V(cu, _u[vu][0]); vu++)
                    ;
                var Eu = vu < Fu;
                if (Eu ? _u[vu][1] === Du : pu)
                    return this;
                if (D(hu),
                (pu || !Eu) && D(lu),
                !pu || 1 !== _u.length) {
                    if (!Eu && !pu && _u.length >= Uu)
                        return wt(au, _u, cu, Du);
                    var Cu = au && au === this.ownerID
                      , Au = Cu ? _u : h(_u);
                    return Eu ? pu ? vu === Fu - 1 ? Au.pop() : Au[vu] = Au.pop() : Au[vu] = [cu, Du] : Au.push([cu, Du]),
                    Cu ? (this.entries = Au,
                    this) : new ht(au,Au)
                }
            }
            ,
            pt.prototype.get = function(au, su, fu, cu) {
                void 0 === su && (su = it(fu));
                var Du = 1 << ((0 === au ? su : su >>> au) & pu)
                  , hu = this.bitmap;
                return 0 == (hu & Du) ? cu : this.nodes[Rt(hu & Du - 1)].get(au + lu, su, fu, cu)
            }
            ,
            pt.prototype.update = function(au, su, fu, cu, Du, hu, _u) {
                void 0 === fu && (fu = it(cu));
                var vu = (0 === su ? fu : fu >>> su) & pu
                  , Fu = 1 << vu
                  , Eu = this.bitmap
                  , Cu = 0 != (Eu & Fu);
                if (!Cu && Du === du)
                    return this;
                var Au = Rt(Eu & Fu - 1)
                  , yu = this.nodes
                  , Bu = Cu ? yu[Au] : void 0
                  , gu = gt(Bu, au, su + lu, fu, cu, Du, hu, _u);
                if (gu === Bu)
                    return this;
                if (!Cu && gu && yu.length >= Hu)
                    return It(au, yu, Eu, vu, gu);
                if (Cu && !gu && 2 === yu.length && mt(yu[1 ^ Au]))
                    return yu[1 ^ Au];
                if (Cu && gu && 1 === yu.length && mt(gu))
                    return gu;
                var mu = au && au === this.ownerID
                  , Su = Cu ? gu ? Eu : Eu ^ Fu : Eu | Fu
                  , wu = Cu ? gu ? kt(yu, Au, gu, mu) : Pt(yu, Au, mu) : jt(yu, Au, gu, mu);
                return mu ? (this.bitmap = Su,
                this.nodes = wu,
                this) : new pt(au,Su,wu)
            }
            ,
            dt.prototype.get = function(au, su, fu, cu) {
                void 0 === su && (su = it(fu));
                var Du = (0 === au ? su : su >>> au) & pu
                  , hu = this.nodes[Du];
                return hu ? hu.get(au + lu, su, fu, cu) : cu
            }
            ,
            dt.prototype.update = function(au, su, fu, cu, Du, hu, _u) {
                void 0 === fu && (fu = it(cu));
                var vu = (0 === su ? fu : fu >>> su) & pu
                  , Fu = Du === du
                  , Eu = this.nodes
                  , Cu = Eu[vu];
                if (Fu && !Cu)
                    return this;
                var Au = gt(Cu, au, su + lu, fu, cu, Du, hu, _u);
                if (Au === Cu)
                    return this;
                var yu = this.count;
                if (Cu) {
                    if (!Au && --yu < Wu)
                        return bt(au, Eu, yu, vu)
                } else
                    yu++;
                var Bu = au && au === this.ownerID
                  , gu = kt(Eu, vu, Au, Bu);
                return Bu ? (this.count = yu,
                this.nodes = gu,
                this) : new dt(au,yu,gu)
            }
            ,
            _t.prototype.get = function(au, su, fu, cu) {
                for (var Du = this.entries, lu = 0, hu = Du.length; lu < hu; lu++)
                    if (V(fu, Du[lu][0]))
                        return Du[lu][1];
                return cu
            }
            ,
            _t.prototype.update = function(au, su, fu, cu, Du, lu, hu) {
                void 0 === fu && (fu = it(cu));
                var pu = Du === du;
                if (fu !== this.keyHash)
                    return pu ? this : (D(hu),
                    D(lu),
                    St(this, au, su, fu, [cu, Du]));
                for (var _u = this.entries, vu = 0, Fu = _u.length; vu < Fu && !V(cu, _u[vu][0]); vu++)
                    ;
                var Eu = vu < Fu;
                if (Eu ? _u[vu][1] === Du : pu)
                    return this;
                if (D(hu),
                (pu || !Eu) && D(lu),
                pu && 2 === Fu)
                    return new vt(au,this.keyHash,_u[1 ^ vu]);
                var Cu = au && au === this.ownerID
                  , Au = Cu ? _u : h(_u);
                return Eu ? pu ? vu === Fu - 1 ? Au.pop() : Au[vu] = Au.pop() : Au[vu] = [cu, Du] : Au.push([cu, Du]),
                Cu ? (this.entries = Au,
                this) : new _t(au,this.keyHash,Au)
            }
            ,
            vt.prototype.get = function(au, su, fu, cu) {
                return V(fu, this.entry[0]) ? this.entry[1] : cu
            }
            ,
            vt.prototype.update = function(au, su, fu, cu, Du, lu, hu) {
                var pu = Du === du
                  , _u = V(cu, this.entry[0]);
                return (_u ? Du === this.entry[1] : pu) ? this : (D(hu),
                pu ? void D(lu) : _u ? au && au === this.ownerID ? (this.entry[1] = Du,
                this) : new vt(au,this.keyHash,[cu, Du]) : (D(lu),
                St(this, au, su, it(cu), [cu, Du])))
            }
            ,
            ht.prototype.iterate = _t.prototype.iterate = function(au, su) {
                for (var fu = this.entries, cu = 0, Du = fu.length - 1; cu <= Du; cu++)
                    if (!1 === au(fu[su ? Du - cu : cu]))
                        return !1
            }
            ,
            pt.prototype.iterate = dt.prototype.iterate = function(au, su) {
                for (var fu = this.nodes, cu = 0, Du = fu.length - 1; cu <= Du; cu++) {
                    var lu = fu[su ? Du - cu : cu];
                    if (lu && !1 === lu.iterate(au, su))
                        return !1
                }
            }
            ,
            vt.prototype.iterate = function(au, su) {
                return au(this.entry)
            }
            ,
            t(Ft, A),
            Ft.prototype.next = function() {
                for (var au = this._type, su = this._stack; su; ) {
                    var fu, cu = su.node, Du = su.index++;
                    if (cu.entry) {
                        if (0 === Du)
                            return Et(au, cu.entry)
                    } else if (cu.entries) {
                        if (Du <= (fu = cu.entries.length - 1))
                            return Et(au, cu.entries[this._reverse ? fu - Du : Du])
                    } else if (Du <= (fu = cu.nodes.length - 1)) {
                        var lu = cu.nodes[this._reverse ? fu - Du : Du];
                        if (lu) {
                            if (lu.entry)
                                return Et(au, lu.entry);
                            su = this._stack = Ct(lu, su)
                        }
                        continue
                    }
                    su = this._stack = this._stack.__prev
                }
                return B()
            }
            ;
            var Nu, Uu = hu / 4, Hu = hu / 2, Wu = hu / 4;
            t(Tt, ut),
            Tt.of = function() {
                return this(arguments)
            }
            ,
            Tt.prototype.toString = function() {
                return this.__toString("List [", "]")
            }
            ,
            Tt.prototype.get = function(au, su) {
                if ((au = d(this, au)) >= 0 && au < this.size) {
                    var fu = Gt(this, au += this._origin);
                    return fu && fu.array[au & pu]
                }
                return su
            }
            ,
            Tt.prototype.set = function(au, su) {
                return Jt(this, au, su)
            }
            ,
            Tt.prototype.remove = function(au) {
                return this.has(au) ? 0 === au ? this.shift() : au === this.size - 1 ? this.pop() : this.splice(au, 1) : this
            }
            ,
            Tt.prototype.insert = function(au, su) {
                return this.splice(au, 0, su)
            }
            ,
            Tt.prototype.clear = function() {
                return 0 === this.size ? this : this.__ownerID ? (this.size = this._origin = this._capacity = 0,
                this._level = lu,
                this._root = this._tail = null,
                this.__hash = void 0,
                this.__altered = !0,
                this) : Kt()
            }
            ,
            Tt.prototype.push = function() {
                var au = arguments
                  , su = this.size;
                return this.withMutations((function(fu) {
                    Vt(fu, 0, su + au.length);
                    for (var cu = 0; cu < au.length; cu++)
                        fu.set(su + cu, au[cu])
                }
                ))
            }
            ,
            Tt.prototype.pop = function() {
                return Vt(this, 0, -1)
            }
            ,
            Tt.prototype.unshift = function() {
                var au = arguments;
                return this.withMutations((function(su) {
                    Vt(su, -au.length);
                    for (var fu = 0; fu < au.length; fu++)
                        su.set(fu, au[fu])
                }
                ))
            }
            ,
            Tt.prototype.shift = function() {
                return Vt(this, 1)
            }
            ,
            Tt.prototype.merge = function() {
                return Yt(this, void 0, arguments)
            }
            ,
            Tt.prototype.mergeWith = function(su) {
                return Yt(this, su, au.call(arguments, 1))
            }
            ,
            Tt.prototype.mergeDeep = function() {
                return Yt(this, Lt, arguments)
            }
            ,
            Tt.prototype.mergeDeepWith = function(su) {
                var fu = au.call(arguments, 1);
                return Yt(this, Mt(su), fu)
            }
            ,
            Tt.prototype.setSize = function(au) {
                return Vt(this, 0, au)
            }
            ,
            Tt.prototype.slice = function(au, su) {
                var fu = this.size;
                return v(au, su, fu) ? this : Vt(this, F(au, fu), E(su, fu))
            }
            ,
            Tt.prototype.__iterator = function(au, su) {
                var fu = 0
                  , cu = Ut(this, su);
                return new A((function() {
                    var su = cu();
                    return su === Qu ? B() : y(au, fu++, su)
                }
                ))
            }
            ,
            Tt.prototype.__iterate = function(au, su) {
                for (var fu, cu = 0, Du = Ut(this, su); (fu = Du()) !== Qu && !1 !== au(fu, cu++, this); )
                    ;
                return cu
            }
            ,
            Tt.prototype.__ensureOwner = function(au) {
                return au === this.__ownerID ? this : au ? Wt(this._origin, this._capacity, this._level, this._root, this._tail, au, this.__hash) : (this.__ownerID = au,
                this)
            }
            ,
            Tt.isList = qt;
            var Ku = "@@__IMMUTABLE_LIST__@@"
              , Vu = Tt.prototype;
            Vu[Ku] = !0,
            Vu.delete = Vu.remove,
            Vu.setIn = qu.setIn,
            Vu.deleteIn = Vu.removeIn = qu.removeIn,
            Vu.update = qu.update,
            Vu.updateIn = qu.updateIn,
            Vu.mergeIn = qu.mergeIn,
            Vu.mergeDeepIn = qu.mergeDeepIn,
            Vu.withMutations = qu.withMutations,
            Vu.asMutable = qu.asMutable,
            Vu.asImmutable = qu.asImmutable,
            Vu.wasAltered = qu.wasAltered,
            Nt.prototype.removeBefore = function(au, su, fu) {
                if (fu === su ? 1 << su : 0 === this.array.length)
                    return this;
                var cu = fu >>> su & pu;
                if (cu >= this.array.length)
                    return new Nt([],au);
                var Du, hu = 0 === cu;
                if (su > 0) {
                    var du = this.array[cu];
                    if ((Du = du && du.removeBefore(au, su - lu, fu)) === du && hu)
                        return this
                }
                if (hu && !Du)
                    return this;
                var _u = Xt(this, au);
                if (!hu)
                    for (var vu = 0; vu < cu; vu++)
                        _u.array[vu] = void 0;
                return Du && (_u.array[cu] = Du),
                _u
            }
            ,
            Nt.prototype.removeAfter = function(au, su, fu) {
                if (fu === (su ? 1 << su : 0) || 0 === this.array.length)
                    return this;
                var cu, Du = fu - 1 >>> su & pu;
                if (Du >= this.array.length)
                    return this;
                if (su > 0) {
                    var hu = this.array[Du];
                    if ((cu = hu && hu.removeAfter(au, su - lu, fu)) === hu && Du === this.array.length - 1)
                        return this
                }
                var du = Xt(this, au);
                return du.array.splice(Du + 1),
                cu && (du.array[Du] = cu),
                du
            }
            ;
            var Ju, $u, Qu = {};
            t($t, Dt),
            $t.of = function() {
                return this(arguments)
            }
            ,
            $t.prototype.toString = function() {
                return this.__toString("OrderedMap {", "}")
            }
            ,
            $t.prototype.get = function(au, su) {
                var fu = this._map.get(au);
                return void 0 !== fu ? this._list.get(fu)[1] : su
            }
            ,
            $t.prototype.clear = function() {
                return 0 === this.size ? this : this.__ownerID ? (this.size = 0,
                this._map.clear(),
                this._list.clear(),
                this) : ee()
            }
            ,
            $t.prototype.set = function(au, su) {
                return ue(this, au, su)
            }
            ,
            $t.prototype.remove = function(au) {
                return ue(this, au, du)
            }
            ,
            $t.prototype.wasAltered = function() {
                return this._map.wasAltered() || this._list.wasAltered()
            }
            ,
            $t.prototype.__iterate = function(au, su) {
                var fu = this;
                return this._list.__iterate((function(su) {
                    return su && au(su[1], su[0], fu)
                }
                ), su)
            }
            ,
            $t.prototype.__iterator = function(au, su) {
                return this._list.fromEntrySeq().__iterator(au, su)
            }
            ,
            $t.prototype.__ensureOwner = function(au) {
                if (au === this.__ownerID)
                    return this;
                var su = this._map.__ensureOwner(au)
                  , fu = this._list.__ensureOwner(au);
                return au ? te(su, fu, au, this.__hash) : (this.__ownerID = au,
                this._map = su,
                this._list = fu,
                this)
            }
            ,
            $t.isOrderedMap = Zt,
            $t.prototype[Du] = !0,
            $t.prototype.delete = $t.prototype.remove,
            t(re, x),
            re.prototype.get = function(au, su) {
                return this._iter.get(au, su)
            }
            ,
            re.prototype.has = function(au) {
                return this._iter.has(au)
            }
            ,
            re.prototype.valueSeq = function() {
                return this._iter.valueSeq()
            }
            ,
            re.prototype.reverse = function() {
                var au = this
                  , su = fe(this, !0);
                return this._useKeys || (su.valueSeq = function() {
                    return au._iter.toSeq().reverse()
                }
                ),
                su
            }
            ,
            re.prototype.map = function(au, su) {
                var fu = this
                  , cu = se(this, au, su);
                return this._useKeys || (cu.valueSeq = function() {
                    return fu._iter.toSeq().map(au, su)
                }
                ),
                cu
            }
            ,
            re.prototype.__iterate = function(au, su) {
                var fu, cu = this;
                return this._iter.__iterate(this._useKeys ? function(su, fu) {
                    return au(su, fu, cu)
                }
                : (fu = su ? Se(this) : 0,
                function(Du) {
                    return au(Du, su ? --fu : fu++, cu)
                }
                ), su)
            }
            ,
            re.prototype.__iterator = function(au, su) {
                if (this._useKeys)
                    return this._iter.__iterator(au, su);
                var fu = this._iter.__iterator(Eu, su)
                  , cu = su ? Se(this) : 0;
                return new A((function() {
                    var Du = fu.next();
                    return Du.done ? Du : y(au, su ? --cu : cu++, Du.value, Du)
                }
                ))
            }
            ,
            re.prototype[Du] = !0,
            t(ne, L),
            ne.prototype.includes = function(au) {
                return this._iter.includes(au)
            }
            ,
            ne.prototype.__iterate = function(au, su) {
                var fu = this
                  , cu = 0;
                return this._iter.__iterate((function(su) {
                    return au(su, cu++, fu)
                }
                ), su)
            }
            ,
            ne.prototype.__iterator = function(au, su) {
                var fu = this._iter.__iterator(Eu, su)
                  , cu = 0;
                return new A((function() {
                    var su = fu.next();
                    return su.done ? su : y(au, cu++, su.value, su)
                }
                ))
            }
            ,
            t(ie, M),
            ie.prototype.has = function(au) {
                return this._iter.includes(au)
            }
            ,
            ie.prototype.__iterate = function(au, su) {
                var fu = this;
                return this._iter.__iterate((function(su) {
                    return au(su, su, fu)
                }
                ), su)
            }
            ,
            ie.prototype.__iterator = function(au, su) {
                var fu = this._iter.__iterator(Eu, su);
                return new A((function() {
                    var su = fu.next();
                    return su.done ? su : y(au, su.value, su.value, su)
                }
                ))
            }
            ,
            t(oe, x),
            oe.prototype.entrySeq = function() {
                return this._iter.toSeq()
            }
            ,
            oe.prototype.__iterate = function(au, su) {
                var fu = this;
                return this._iter.__iterate((function(su) {
                    if (su) {
                        me(su);
                        var cu = i(su);
                        return au(cu ? su.get(1) : su[1], cu ? su.get(0) : su[0], fu)
                    }
                }
                ), su)
            }
            ,
            oe.prototype.__iterator = function(au, su) {
                var fu = this._iter.__iterator(Eu, su);
                return new A((function() {
                    for (; ; ) {
                        var su = fu.next();
                        if (su.done)
                            return su;
                        var cu = su.value;
                        if (cu) {
                            me(cu);
                            var Du = i(cu);
                            return y(au, Du ? cu.get(0) : cu[0], Du ? cu.get(1) : cu[1], su)
                        }
                    }
                }
                ))
            }
            ,
            ne.prototype.cacheResult = re.prototype.cacheResult = ie.prototype.cacheResult = oe.prototype.cacheResult = Ie,
            t(Me, et),
            Me.prototype.toString = function() {
                return this.__toString(Oe(this) + " {", "}")
            }
            ,
            Me.prototype.has = function(au) {
                return this._defaultValues.hasOwnProperty(au)
            }
            ,
            Me.prototype.get = function(au, su) {
                if (!this.has(au))
                    return su;
                var fu = this._defaultValues[au];
                return this._map ? this._map.get(au, fu) : fu
            }
            ,
            Me.prototype.clear = function() {
                if (this.__ownerID)
                    return this._map && this._map.clear(),
                    this;
                var au = this.constructor;
                return au._empty || (au._empty = ze(this, yt()))
            }
            ,
            Me.prototype.set = function(au, su) {
                if (!this.has(au))
                    throw new Error('Cannot set unknown key "' + au + '" on ' + Oe(this));
                if (this._map && !this._map.has(au) && su === this._defaultValues[au])
                    return this;
                var fu = this._map && this._map.set(au, su);
                return this.__ownerID || fu === this._map ? this : ze(this, fu)
            }
            ,
            Me.prototype.remove = function(au) {
                if (!this.has(au))
                    return this;
                var su = this._map && this._map.remove(au);
                return this.__ownerID || su === this._map ? this : ze(this, su)
            }
            ,
            Me.prototype.wasAltered = function() {
                return this._map.wasAltered()
            }
            ,
            Me.prototype.__iterator = function(au, su) {
                var fu = this;
                return u(this._defaultValues).map((function(au, su) {
                    return fu.get(su)
                }
                )).__iterator(au, su)
            }
            ,
            Me.prototype.__iterate = function(au, su) {
                var fu = this;
                return u(this._defaultValues).map((function(au, su) {
                    return fu.get(su)
                }
                )).__iterate(au, su)
            }
            ,
            Me.prototype.__ensureOwner = function(au) {
                if (au === this.__ownerID)
                    return this;
                var su = this._map && this._map.__ensureOwner(au);
                return au ? ze(this, su, au) : (this.__ownerID = au,
                this._map = su,
                this)
            }
            ;
            var Xu = Me.prototype;
            Xu.delete = Xu.remove,
            Xu.deleteIn = Xu.removeIn = qu.removeIn,
            Xu.merge = qu.merge,
            Xu.mergeWith = qu.mergeWith,
            Xu.mergeIn = qu.mergeIn,
            Xu.mergeDeep = qu.mergeDeep,
            Xu.mergeDeepWith = qu.mergeDeepWith,
            Xu.mergeDeepIn = qu.mergeDeepIn,
            Xu.setIn = qu.setIn,
            Xu.update = qu.update,
            Xu.updateIn = qu.updateIn,
            Xu.withMutations = qu.withMutations,
            Xu.asMutable = qu.asMutable,
            Xu.asImmutable = qu.asImmutable,
            t(je, rt),
            je.of = function() {
                return this(arguments)
            }
            ,
            je.fromKeys = function(au) {
                return this(u(au).keySeq())
            }
            ,
            je.prototype.toString = function() {
                return this.__toString("Set {", "}")
            }
            ,
            je.prototype.has = function(au) {
                return this._map.has(au)
            }
            ,
            je.prototype.add = function(au) {
                return Te(this, this._map.set(au, !0))
            }
            ,
            je.prototype.remove = function(au) {
                return Te(this, this._map.remove(au))
            }
            ,
            je.prototype.clear = function() {
                return Te(this, this._map.clear())
            }
            ,
            je.prototype.union = function() {
                var su = au.call(arguments, 0);
                return 0 === (su = su.filter((function(au) {
                    return 0 !== au.size
                }
                ))).length ? this : 0 !== this.size || this.__ownerID || 1 !== su.length ? this.withMutations((function(au) {
                    for (var fu = 0; fu < su.length; fu++)
                        n(su[fu]).forEach((function(su) {
                            return au.add(su)
                        }
                        ))
                }
                )) : this.constructor(su[0])
            }
            ,
            je.prototype.intersect = function() {
                var su = au.call(arguments, 0);
                if (0 === su.length)
                    return this;
                su = su.map((function(au) {
                    return n(au)
                }
                ));
                var fu = this;
                return this.withMutations((function(au) {
                    fu.forEach((function(fu) {
                        su.every((function(au) {
                            return au.includes(fu)
                        }
                        )) || au.remove(fu)
                    }
                    ))
                }
                ))
            }
            ,
            je.prototype.subtract = function() {
                var su = au.call(arguments, 0);
                if (0 === su.length)
                    return this;
                su = su.map((function(au) {
                    return n(au)
                }
                ));
                var fu = this;
                return this.withMutations((function(au) {
                    fu.forEach((function(fu) {
                        su.some((function(au) {
                            return au.includes(fu)
                        }
                        )) && au.remove(fu)
                    }
                    ))
                }
                ))
            }
            ,
            je.prototype.merge = function() {
                return this.union.apply(this, arguments)
            }
            ,
            je.prototype.mergeWith = function(su) {
                var fu = au.call(arguments, 1);
                return this.union.apply(this, fu)
            }
            ,
            je.prototype.sort = function(au) {
                return Ue(Ce(this, au))
            }
            ,
            je.prototype.sortBy = function(au, su) {
                return Ue(Ce(this, su, au))
            }
            ,
            je.prototype.wasAltered = function() {
                return this._map.wasAltered()
            }
            ,
            je.prototype.__iterate = function(au, su) {
                var fu = this;
                return this._map.__iterate((function(su, cu) {
                    return au(cu, cu, fu)
                }
                ), su)
            }
            ,
            je.prototype.__iterator = function(au, su) {
                return this._map.map((function(au, su) {
                    return su
                }
                )).__iterator(au, su)
            }
            ,
            je.prototype.__ensureOwner = function(au) {
                if (au === this.__ownerID)
                    return this;
                var su = this._map.__ensureOwner(au);
                return au ? this.__make(su, au) : (this.__ownerID = au,
                this._map = su,
                this)
            }
            ,
            je.isSet = Pe;
            var Zu, Yu = "@@__IMMUTABLE_SET__@@", Gu = je.prototype;
            Gu[Yu] = !0,
            Gu.delete = Gu.remove,
            Gu.mergeDeep = Gu.merge,
            Gu.mergeDeepWith = Gu.mergeWith,
            Gu.withMutations = qu.withMutations,
            Gu.asMutable = qu.asMutable,
            Gu.asImmutable = qu.asImmutable,
            Gu.__empty = Ne,
            Gu.__make = qe,
            t(Ue, je),
            Ue.of = function() {
                return this(arguments)
            }
            ,
            Ue.fromKeys = function(au) {
                return this(u(au).keySeq())
            }
            ,
            Ue.prototype.toString = function() {
                return this.__toString("OrderedSet {", "}")
            }
            ,
            Ue.isOrderedSet = We;
            var tr, er = Ue.prototype;
            er[Du] = !0,
            er.__empty = Je,
            er.__make = Ke,
            t(He, ut),
            He.of = function() {
                return this(arguments)
            }
            ,
            He.prototype.toString = function() {
                return this.__toString("Stack [", "]")
            }
            ,
            He.prototype.get = function(au, su) {
                var fu = this._head;
                for (au = d(this, au); fu && au--; )
                    fu = fu.next;
                return fu ? fu.value : su
            }
            ,
            He.prototype.peek = function() {
                return this._head && this._head.value
            }
            ,
            He.prototype.push = function() {
                if (0 === arguments.length)
                    return this;
                for (var au = this.size + arguments.length, su = this._head, fu = arguments.length - 1; fu >= 0; fu--)
                    su = {
                        value: arguments[fu],
                        next: su
                    };
                return this.__ownerID ? (this.size = au,
                this._head = su,
                this.__hash = void 0,
                this.__altered = !0,
                this) : Ge(au, su)
            }
            ,
            He.prototype.pushAll = function(au) {
                if (0 === (au = r(au)).size)
                    return this;
                ct(au.size);
                var su = this.size
                  , fu = this._head;
                return au.reverse().forEach((function(au) {
                    su++,
                    fu = {
                        value: au,
                        next: fu
                    }
                }
                )),
                this.__ownerID ? (this.size = su,
                this._head = fu,
                this.__hash = void 0,
                this.__altered = !0,
                this) : Ge(su, fu)
            }
            ,
            He.prototype.pop = function() {
                return this.slice(1)
            }
            ,
            He.prototype.unshift = function() {
                return this.push.apply(this, arguments)
            }
            ,
            He.prototype.unshiftAll = function(au) {
                return this.pushAll(au)
            }
            ,
            He.prototype.shift = function() {
                return this.pop.apply(this, arguments)
            }
            ,
            He.prototype.clear = function() {
                return 0 === this.size ? this : this.__ownerID ? (this.size = 0,
                this._head = void 0,
                this.__hash = void 0,
                this.__altered = !0,
                this) : Ve()
            }
            ,
            He.prototype.slice = function(au, su) {
                if (v(au, su, this.size))
                    return this;
                var fu = F(au, this.size);
                if (E(su, this.size) !== this.size)
                    return ut.prototype.slice.call(this, au, su);
                for (var cu = this.size - fu, Du = this._head; fu--; )
                    Du = Du.next;
                return this.__ownerID ? (this.size = cu,
                this._head = Du,
                this.__hash = void 0,
                this.__altered = !0,
                this) : Ge(cu, Du)
            }
            ,
            He.prototype.__ensureOwner = function(au) {
                return au === this.__ownerID ? this : au ? Ge(this.size, this._head, au, this.__hash) : (this.__ownerID = au,
                this.__altered = !1,
                this)
            }
            ,
            He.prototype.__iterate = function(au, su) {
                if (su)
                    return this.reverse().__iterate(au);
                for (var fu = 0, cu = this._head; cu && !1 !== au(cu.value, fu++, this); )
                    cu = cu.next;
                return fu
            }
            ,
            He.prototype.__iterator = function(au, su) {
                if (su)
                    return this.reverse().__iterator(au);
                var fu = 0
                  , cu = this._head;
                return new A((function() {
                    if (cu) {
                        var su = cu.value;
                        return cu = cu.next,
                        y(au, fu++, su)
                    }
                    return B()
                }
                ))
            }
            ,
            He.isStack = Xe;
            var ur, rr = "@@__IMMUTABLE_STACK__@@", nr = He.prototype;
            nr[rr] = !0,
            nr.withMutations = qu.withMutations,
            nr.asMutable = qu.asMutable,
            nr.asImmutable = qu.asImmutable,
            nr.wasAltered = qu.wasAltered,
            e.Iterator = A,
            Ye(e, {
                toArray: function() {
                    ct(this.size);
                    var au = new Array(this.size || 0);
                    return this.valueSeq().__iterate((function(su, fu) {
                        au[fu] = su
                    }
                    )),
                    au
                },
                toIndexedSeq: function() {
                    return new ne(this)
                },
                toJS: function() {
                    return this.toSeq().map((function(au) {
                        return au && "function" == typeof au.toJS ? au.toJS() : au
                    }
                    )).__toJS()
                },
                toJSON: function() {
                    return this.toSeq().map((function(au) {
                        return au && "function" == typeof au.toJSON ? au.toJSON() : au
                    }
                    )).__toJS()
                },
                toKeyedSeq: function() {
                    return new re(this,!0)
                },
                toMap: function() {
                    return Dt(this.toKeyedSeq())
                },
                toObject: function() {
                    ct(this.size);
                    var au = {};
                    return this.__iterate((function(su, fu) {
                        au[fu] = su
                    }
                    )),
                    au
                },
                toOrderedMap: function() {
                    return $t(this.toKeyedSeq())
                },
                toOrderedSet: function() {
                    return Ue(o(this) ? this.valueSeq() : this)
                },
                toSet: function() {
                    return je(o(this) ? this.valueSeq() : this)
                },
                toSetSeq: function() {
                    return new ie(this)
                },
                toSeq: function() {
                    return a(this) ? this.toIndexedSeq() : o(this) ? this.toKeyedSeq() : this.toSetSeq()
                },
                toStack: function() {
                    return He(o(this) ? this.valueSeq() : this)
                },
                toList: function() {
                    return Tt(o(this) ? this.valueSeq() : this)
                },
                toString: function() {
                    return "[Iterable]"
                },
                __toString: function(au, su) {
                    return 0 === this.size ? au + su : au + " " + this.toSeq().map(this.__toStringMapper).join(", ") + " " + su
                },
                concat: function() {
                    return ge(this, _e(this, au.call(arguments, 0)))
                },
                includes: function(au) {
                    return this.some((function(su) {
                        return V(su, au)
                    }
                    ))
                },
                entries: function() {
                    return this.__iterator(Cu)
                },
                every: function(au, su) {
                    ct(this.size);
                    var fu = !0;
                    return this.__iterate((function(cu, Du, lu) {
                        if (!au.call(su, cu, Du, lu))
                            return fu = !1,
                            !1
                    }
                    )),
                    fu
                },
                filter: function(au, su) {
                    return ge(this, ce(this, au, su, !0))
                },
                find: function(au, su, fu) {
                    var cu = this.findEntry(au, su);
                    return cu ? cu[1] : fu
                },
                forEach: function(au, su) {
                    return ct(this.size),
                    this.__iterate(su ? au.bind(su) : au)
                },
                join: function(au) {
                    ct(this.size),
                    au = void 0 !== au ? "" + au : ",";
                    var su = ""
                      , fu = !0;
                    return this.__iterate((function(cu) {
                        fu ? fu = !1 : su += au,
                        su += null != cu ? cu.toString() : ""
                    }
                    )),
                    su
                },
                keys: function() {
                    return this.__iterator(Fu)
                },
                map: function(au, su) {
                    return ge(this, se(this, au, su))
                },
                reduce: function(au, su, fu) {
                    var cu, Du;
                    return ct(this.size),
                    arguments.length < 2 ? Du = !0 : cu = su,
                    this.__iterate((function(su, lu, hu) {
                        Du ? (Du = !1,
                        cu = su) : cu = au.call(fu, cu, su, lu, hu)
                    }
                    )),
                    cu
                },
                reduceRight: function(au, su, fu) {
                    var cu = this.toKeyedSeq().reverse();
                    return cu.reduce.apply(cu, arguments)
                },
                reverse: function() {
                    return ge(this, fe(this, !0))
                },
                slice: function(au, su) {
                    return ge(this, he(this, au, su, !0))
                },
                some: function(au, su) {
                    return !this.every(Ze(au), su)
                },
                sort: function(au) {
                    return ge(this, Ce(this, au))
                },
                values: function() {
                    return this.__iterator(Eu)
                },
                butLast: function() {
                    return this.slice(0, -1)
                },
                isEmpty: function() {
                    return void 0 !== this.size ? 0 === this.size : !this.some((function() {
                        return !0
                    }
                    ))
                },
                count: function(au, su) {
                    return p(au ? this.toSeq().filter(au, su) : this)
                },
                countBy: function(au, su) {
                    return De(this, au, su)
                },
                equals: function(au) {
                    return Y(this, au)
                },
                entrySeq: function() {
                    var au = this;
                    if (au._cache)
                        return new z(au._cache);
                    var su = au.toSeq().map($e).toIndexedSeq();
                    return su.fromEntrySeq = function() {
                        return au.toSeq()
                    }
                    ,
                    su
                },
                filterNot: function(au, su) {
                    return this.filter(Ze(au), su)
                },
                findEntry: function(au, su, fu) {
                    var cu = fu;
                    return this.__iterate((function(fu, Du, lu) {
                        if (au.call(su, fu, Du, lu))
                            return cu = [Du, fu],
                            !1
                    }
                    )),
                    cu
                },
                findKey: function(au, su) {
                    var fu = this.findEntry(au, su);
                    return fu && fu[0]
                },
                findLast: function(au, su, fu) {
                    return this.toKeyedSeq().reverse().find(au, su, fu)
                },
                findLastEntry: function(au, su, fu) {
                    return this.toKeyedSeq().reverse().findEntry(au, su, fu)
                },
                findLastKey: function(au, su) {
                    return this.toKeyedSeq().reverse().findKey(au, su)
                },
                first: function() {
                    return this.find(_)
                },
                flatMap: function(au, su) {
                    return ge(this, Fe(this, au, su))
                },
                flatten: function(au) {
                    return ge(this, ve(this, au, !0))
                },
                fromEntrySeq: function() {
                    return new oe(this)
                },
                get: function(au, su) {
                    return this.find((function(su, fu) {
                        return V(fu, au)
                    }
                    ), void 0, su)
                },
                getIn: function(au, su) {
                    for (var fu, cu = this, Du = Le(au); !(fu = Du.next()).done; ) {
                        var lu = fu.value;
                        if ((cu = cu && cu.get ? cu.get(lu, du) : du) === du)
                            return su
                    }
                    return cu
                },
                groupBy: function(au, su) {
                    return le(this, au, su)
                },
                has: function(au) {
                    return this.get(au, du) !== du
                },
                hasIn: function(au) {
                    return this.getIn(au, du) !== du
                },
                isSubset: function(au) {
                    return au = "function" == typeof au.includes ? au : e(au),
                    this.every((function(su) {
                        return au.includes(su)
                    }
                    ))
                },
                isSuperset: function(au) {
                    return (au = "function" == typeof au.isSubset ? au : e(au)).isSubset(this)
                },
                keyOf: function(au) {
                    return this.findKey((function(su) {
                        return V(su, au)
                    }
                    ))
                },
                keySeq: function() {
                    return this.toSeq().map(Qe).toIndexedSeq()
                },
                last: function() {
                    return this.toSeq().reverse().first()
                },
                lastKeyOf: function(au) {
                    return this.toKeyedSeq().reverse().keyOf(au)
                },
                max: function(au) {
                    return Ae(this, au)
                },
                maxBy: function(au, su) {
                    return Ae(this, su, au)
                },
                min: function(au) {
                    return Ae(this, au ? tu(au) : ru)
                },
                minBy: function(au, su) {
                    return Ae(this, su ? tu(su) : ru, au)
                },
                rest: function() {
                    return this.slice(1)
                },
                skip: function(au) {
                    return this.slice(Math.max(0, au))
                },
                skipLast: function(au) {
                    return ge(this, this.toSeq().reverse().skip(au).reverse())
                },
                skipWhile: function(au, su) {
                    return ge(this, de(this, au, su, !0))
                },
                skipUntil: function(au, su) {
                    return this.skipWhile(Ze(au), su)
                },
                sortBy: function(au, su) {
                    return ge(this, Ce(this, su, au))
                },
                take: function(au) {
                    return this.slice(0, Math.max(0, au))
                },
                takeLast: function(au) {
                    return ge(this, this.toSeq().reverse().take(au).reverse())
                },
                takeWhile: function(au, su) {
                    return ge(this, pe(this, au, su))
                },
                takeUntil: function(au, su) {
                    return this.takeWhile(Ze(au), su)
                },
                valueSeq: function() {
                    return this.toIndexedSeq()
                },
                hashCode: function() {
                    return this.__hash || (this.__hash = nu(this))
                }
            });
            var ir = e.prototype;
            ir[su] = !0,
            ir[Bu] = ir.values,
            ir.__toJS = ir.toArray,
            ir.__toStringMapper = eu,
            ir.inspect = ir.toSource = function() {
                return this.toString()
            }
            ,
            ir.chain = ir.flatMap,
            ir.contains = ir.includes,
            Ye(u, {
                flip: function() {
                    return ge(this, ae(this))
                },
                mapEntries: function(au, su) {
                    var fu = this
                      , cu = 0;
                    return ge(this, this.toSeq().map((function(Du, lu) {
                        return au.call(su, [lu, Du], cu++, fu)
                    }
                    )).fromEntrySeq())
                },
                mapKeys: function(au, su) {
                    var fu = this;
                    return ge(this, this.toSeq().flip().map((function(cu, Du) {
                        return au.call(su, cu, Du, fu)
                    }
                    )).flip())
                }
            });
            var or = u.prototype;
            return or[fu] = !0,
            or[Bu] = ir.entries,
            or.__toJS = ir.toObject,
            or.__toStringMapper = function(au, su) {
                return JSON.stringify(su) + ": " + eu(au)
            }
            ,
            Ye(r, {
                toKeyedSeq: function() {
                    return new re(this,!1)
                },
                filter: function(au, su) {
                    return ge(this, ce(this, au, su, !1))
                },
                findIndex: function(au, su) {
                    var fu = this.findEntry(au, su);
                    return fu ? fu[0] : -1
                },
                indexOf: function(au) {
                    var su = this.keyOf(au);
                    return void 0 === su ? -1 : su
                },
                lastIndexOf: function(au) {
                    var su = this.lastKeyOf(au);
                    return void 0 === su ? -1 : su
                },
                reverse: function() {
                    return ge(this, fe(this, !1))
                },
                slice: function(au, su) {
                    return ge(this, he(this, au, su, !1))
                },
                splice: function(au, su) {
                    var fu = arguments.length;
                    if (su = Math.max(0 | su, 0),
                    0 === fu || 2 === fu && !su)
                        return this;
                    au = F(au, au < 0 ? this.count() : this.size);
                    var cu = this.slice(0, au);
                    return ge(this, 1 === fu ? cu : cu.concat(h(arguments, 2), this.slice(au + su)))
                },
                findLastIndex: function(au, su) {
                    var fu = this.findLastEntry(au, su);
                    return fu ? fu[0] : -1
                },
                first: function() {
                    return this.get(0)
                },
                flatten: function(au) {
                    return ge(this, ve(this, au, !1))
                },
                get: function(au, su) {
                    return (au = d(this, au)) < 0 || this.size === 1 / 0 || void 0 !== this.size && au > this.size ? su : this.find((function(su, fu) {
                        return fu === au
                    }
                    ), void 0, su)
                },
                has: function(au) {
                    return (au = d(this, au)) >= 0 && (void 0 !== this.size ? this.size === 1 / 0 || au < this.size : -1 !== this.indexOf(au))
                },
                interpose: function(au) {
                    return ge(this, Ee(this, au))
                },
                interleave: function() {
                    var au = [this].concat(h(arguments))
                      , su = Be(this.toSeq(), L.of, au)
                      , fu = su.flatten(!0);
                    return su.size && (fu.size = su.size * au.length),
                    ge(this, fu)
                },
                keySeq: function() {
                    return Z(0, this.size)
                },
                last: function() {
                    return this.get(-1)
                },
                skipWhile: function(au, su) {
                    return ge(this, de(this, au, su, !1))
                },
                zip: function() {
                    return ge(this, Be(this, uu, [this].concat(h(arguments))))
                },
                zipWith: function(au) {
                    var su = h(arguments);
                    return su[0] = this,
                    ge(this, Be(this, au, su))
                }
            }),
            r.prototype[cu] = !0,
            r.prototype[Du] = !0,
            Ye(n, {
                get: function(au, su) {
                    return this.has(au) ? au : su
                },
                includes: function(au) {
                    return this.has(au)
                },
                keySeq: function() {
                    return this.valueSeq()
                }
            }),
            n.prototype.has = ir.includes,
            n.prototype.contains = n.prototype.includes,
            Ye(x, u.prototype),
            Ye(L, r.prototype),
            Ye(M, n.prototype),
            Ye(et, u.prototype),
            Ye(ut, r.prototype),
            Ye(rt, n.prototype),
            {
                Iterable: e,
                Seq: I,
                Collection: tt,
                Map: Dt,
                OrderedMap: $t,
                List: Tt,
                Stack: He,
                Set: je,
                OrderedSet: Ue,
                Record: Me,
                Range: Z,
                Repeat: Q,
                is: V,
                fromJS: J
            }
        }()
    }
    , function(au, su) {
        function n(au, su, fu) {
            if (su != su)
                return function r(au, su, fu, cu) {
                    for (var Du = au.length, lu = fu + (cu ? 1 : -1); cu ? lu-- : ++lu < Du; )
                        if (su(au[lu], lu, au))
                            return lu;
                    return -1
                }(au, i, fu);
            for (var cu = fu - 1, Du = au.length; ++cu < Du; )
                if (au[cu] === su)
                    return cu;
            return -1
        }
        function i(au) {
            return au != au
        }
        function a(au, su) {
            return function u(au, su) {
                for (var fu = -1, cu = au ? au.length : 0, Du = Array(cu); ++fu < cu; )
                    Du[fu] = su(au[fu], fu, au);
                return Du
            }(su, (function(su) {
                return au[su]
            }
            ))
        }
        function s(au, su) {
            var fu = xu(au) || function h(au) {
                return function d(au) {
                    return E(au) && p(au)
                }(au) && mu.call(au, "callee") && (!wu.call(au, "callee") || Su.call(au) == hu)
            }(au) ? function o(au, su) {
                for (var fu = -1, cu = Array(au); ++fu < au; )
                    cu[fu] = su(fu);
                return cu
            }(au.length, String) : []
              , cu = fu.length
              , Du = !!cu;
            for (var lu in au)
                !su && !mu.call(au, lu) || Du && ("length" == lu || c(lu, cu)) || fu.push(lu);
            return fu
        }
        function f(au) {
            if (!function D(au) {
                var su = au && au.constructor;
                return au === ("function" == typeof su && su.prototype || gu)
            }(au))
                return bu(au);
            var su = [];
            for (var fu in Object(au))
                mu.call(au, fu) && "constructor" != fu && su.push(fu);
            return su
        }
        function c(au, su) {
            return !!(su = null == su ? cu : su) && ("number" == typeof au || yu.test(au)) && au > -1 && au % 1 == 0 && au < su
        }
        function p(au) {
            return null != au && function v(au) {
                return "number" == typeof au && au > -1 && au % 1 == 0 && au <= cu
            }(au.length) && !function _(au) {
                var su = F(au) ? Su.call(au) : "";
                return su == pu || su == du
            }(au)
        }
        function F(au) {
            var su = typeof au;
            return !!au && ("object" == su || "function" == su)
        }
        function E(au) {
            return !!au && "object" == typeof au
        }
        var fu = 1 / 0
          , cu = 9007199254740991
          , Du = 17976931348623157e292
          , lu = NaN
          , hu = "[object Arguments]"
          , pu = "[object Function]"
          , du = "[object GeneratorFunction]"
          , _u = "[object String]"
          , vu = "[object Symbol]"
          , Fu = /^\s+|\s+$/g
          , Eu = /^[-+]0x[0-9a-f]+$/i
          , Cu = /^0b[01]+$/i
          , Au = /^0o[0-7]+$/i
          , yu = /^(?:0|[1-9]\d*)$/
          , Bu = parseInt
          , gu = Object.prototype
          , mu = gu.hasOwnProperty
          , Su = gu.toString
          , wu = gu.propertyIsEnumerable
          , bu = function(au, su) {
            return function(fu) {
                return au(su(fu))
            }
        }(Object.keys, Object)
          , Iu = Math.max
          , xu = Array.isArray;
        au.exports = function l(au, su, cu, hu) {
            au = p(au) ? au : function S(au) {
                return au ? a(au, function m(au) {
                    return p(au) ? s(au) : f(au)
                }(au)) : []
            }(au),
            cu = cu && !hu ? function B(au) {
                var su = function y(au) {
                    if (!au)
                        return 0 === au ? au : 0;
                    if ((au = function g(au) {
                        if ("number" == typeof au)
                            return au;
                        if (function A(au) {
                            return "symbol" == typeof au || E(au) && Su.call(au) == vu
                        }(au))
                            return lu;
                        if (F(au)) {
                            var su = "function" == typeof au.valueOf ? au.valueOf() : au;
                            au = F(su) ? su + "" : su
                        }
                        if ("string" != typeof au)
                            return 0 === au ? au : +au;
                        au = au.replace(Fu, "");
                        var fu = Cu.test(au);
                        return fu || Au.test(au) ? Bu(au.slice(2), fu ? 2 : 8) : Eu.test(au) ? lu : +au
                    }(au)) === fu || au === -fu)
                        return (au < 0 ? -1 : 1) * Du;
                    return au == au ? au : 0
                }(au)
                  , cu = su % 1;
                return su == su ? cu ? su - cu : su : 0
            }(cu) : 0;
            var pu = au.length;
            return cu < 0 && (cu = Iu(pu + cu, 0)),
            function C(au) {
                return "string" == typeof au || !xu(au) && E(au) && Su.call(au) == _u
            }(au) ? cu <= pu && au.indexOf(su, cu) > -1 : !!pu && n(au, su, cu) > -1
        }
    }
    , function(au, su, fu) {
        "use strict";
        Object.defineProperty(su, "__esModule", {
            value: !0
        }),
        su.Sequence = su.Run = su.Pairing = su.EmbeddingLevelState = su.DirectionalStatusStackEntry = su.BracketPairState = su.BracketPairStackEntry = su.decrease = su.increase = void 0;
        var cu = fu(1)
          , Du = (0,
        cu.Record)({
            isolate: !1,
            level: 0,
            override: "neutral"
        })
          , lu = (0,
        cu.Record)({
            directionalStatusStack: cu.Stack.of(new Du),
            bidiTypes: cu.List.of(),
            embeddingLevels: cu.List.of(),
            overflowEmbeddingCount: 0,
            overflowIsolateCount: 0,
            validIsolateCount: 0
        })
          , hu = (0,
        cu.Record)({
            level: -1,
            from: 0,
            to: 0
        }, "Run")
          , pu = (0,
        cu.Record)({
            runs: cu.List.of(),
            eos: "",
            sos: ""
        }, "Sequence")
          , du = (0,
        cu.Record)({
            point: 0,
            position: 0
        })
          , _u = (0,
        cu.Record)({
            open: 0,
            close: 0
        })
          , vu = (0,
        cu.Record)({
            stack: cu.Stack.of(),
            pairings: cu.List.of(),
            stackoverflow: !1
        });
        su.increase = function(au) {
            return au + 1
        }
        ,
        su.decrease = function(au) {
            return au - 1
        }
        ,
        su.BracketPairStackEntry = du,
        su.BracketPairState = vu,
        su.DirectionalStatusStackEntry = Du,
        su.EmbeddingLevelState = lu,
        su.Pairing = _u,
        su.Run = hu,
        su.Sequence = pu
    }
    , function(au, su, fu) {
        (function(su) {
            function u(au, su, fu) {
                switch (fu.length) {
                case 0:
                    return au.call(su);
                case 1:
                    return au.call(su, fu[0]);
                case 2:
                    return au.call(su, fu[0], fu[1]);
                case 3:
                    return au.call(su, fu[0], fu[1], fu[2])
                }
                return au.apply(su, fu)
            }
            function r(au, su) {
                for (var fu = -1, cu = su.length, Du = au.length; ++fu < cu; )
                    au[Du + fu] = su[fu];
                return au
            }
            function n(au, su, fu, cu, Du) {
                var lu = -1
                  , hu = au.length;
                for (fu || (fu = o),
                Du || (Du = []); ++lu < hu; ) {
                    var pu = au[lu];
                    su > 0 && fu(pu) ? su > 1 ? n(pu, su - 1, fu, cu, Du) : r(Du, pu) : cu || (Du[Du.length] = pu)
                }
                return Du
            }
            function o(au) {
                return Bu(au) || function a(au) {
                    return function f(au) {
                        return function h(au) {
                            return !!au && "object" == typeof au
                        }(au) && function s(au) {
                            return null != au && function D(au) {
                                return "number" == typeof au && au > -1 && au % 1 == 0 && au <= fu
                            }(au.length) && !function c(au) {
                                var su = function l(au) {
                                    var su = typeof au;
                                    return !!au && ("object" == su || "function" == su)
                                }(au) ? Fu.call(au) : "";
                                return su == Du || su == lu
                            }(au)
                        }(au)
                    }(au) && vu.call(au, "callee") && (!Cu.call(au, "callee") || Fu.call(au) == cu)
                }(au) || !!(Au && au && au[Au])
            }
            var fu = 9007199254740991
              , cu = "[object Arguments]"
              , Du = "[object Function]"
              , lu = "[object GeneratorFunction]"
              , hu = "object" == typeof su && su && su.Object === Object && su
              , pu = "object" == typeof self && self && self.Object === Object && self
              , du = hu || pu || Function("return this")()
              , _u = Object.prototype
              , vu = _u.hasOwnProperty
              , Fu = _u.toString
              , Eu = du.Symbol
              , Cu = _u.propertyIsEnumerable
              , Au = Eu ? Eu.isConcatSpreadable : void 0
              , yu = Math.max
              , Bu = Array.isArray
              , gu = function i(au, su) {
                return su = yu(void 0 === su ? au.length - 1 : su, 0),
                function() {
                    for (var fu = arguments, cu = -1, Du = yu(fu.length - su, 0), lu = Array(Du); ++cu < Du; )
                        lu[cu] = fu[su + cu];
                    cu = -1;
                    for (var hu = Array(su + 1); ++cu < su; )
                        hu[cu] = fu[cu];
                    return hu[su] = lu,
                    u(au, this, hu)
                }
            }((function(au) {
                for (var su = (au = n(au, 1)).length, fu = su; fu--; )
                    if ("function" != typeof au[fu])
                        throw new TypeError("Expected a function");
                return function() {
                    for (var fu = 0, cu = su ? au[fu].apply(this, arguments) : arguments[0]; ++fu < su; )
                        cu = au[fu].call(this, cu);
                    return cu
                }
            }
            ));
            au.exports = gu
        }
        ).call(su, fu(5))
    }
    , function(au, su) {
        var fu;
        fu = function() {
            return this
        }();
        try {
            fu = fu || Function("return this")() || (0,
            eval)("this")
        } catch (au) {
            "object" == typeof window && (fu = window)
        }
        au.exports = fu
    }
    , function(au, su) {
        au.exports = function u(au) {
            return void 0 === au
        }
    }
    , function(au, su, fu) {
        "use strict";
        function r(au) {
            return au && au.__esModule ? au : {
                default: au
            }
        }
        Object.defineProperty(su, "__esModule", {
            value: !0
        });
        var i = function(au, su) {
            if (Array.isArray(au))
                return au;
            if (Symbol.iterator in Object(au))
                return function t(au, su) {
                    var fu = []
                      , cu = !0
                      , Du = !1
                      , lu = void 0;
                    try {
                        for (var hu, pu = au[Symbol.iterator](); !(cu = (hu = pu.next()).done) && (fu.push(hu.value),
                        !su || fu.length !== su); cu = !0)
                            ;
                    } catch (au) {
                        Du = !0,
                        lu = au
                    } finally {
                        try {
                            !cu && pu.return && pu.return()
                        } finally {
                            if (Du)
                                throw lu
                        }
                    }
                    return fu
                }(au, su);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
          , cu = r(fu(2))
          , Du = fu(1)
          , lu = r(fu(19))
          , hu = r(fu(30))
          , pu = r(fu(11))
          , du = r(fu(31))
          , _u = fu(0)
          , vu = fu(3);
        su.default = function n(au, su) {
            function u(au) {
                var su = au.last().get("to") - 1
                  , fu = bu.get(su, -1);
                if (fu > -1) {
                    var cu = (0,
                    du.default)(Eu, fu);
                    return u(au.push(cu))
                }
                return au
            }
            var fu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
              , Fu = (0,
            lu.default)(au, su, fu)
              , Eu = Fu.runs
              , Cu = Fu.bidiTypes
              , Au = Fu.levels
              , yu = (0,
            hu.default)(au.zip(Cu, su).filter((function(au) {
                var su = i(au, 3)
                  , fu = (su[0],
                su[1]);
                return su[2],
                !1 === (0,
                _u.isX9ControlCharacter)(fu)
            }
            )))
              , Bu = i(yu, 3)
              , gu = Bu[0]
              , mu = Bu[1]
              , Su = Bu[2]
              , wu = (0,
            pu.default)(gu)
              , bu = wu.initiatorToPDI
              , Iu = wu.initiatorFromPDI;
            return {
                sequences: function(au) {
                    return au.map((function(au, su) {
                        var lu = gu.size
                          , hu = au.get("runs").first().get("from")
                          , pu = au.get("runs").last().get("to")
                          , f = function(au) {
                            return (0,
                            Du.Range)(0, lu).contains(au) ? (0,
                            du.default)(Eu, au).get("level") : fu
                        }
                          , vu = f(hu - 1)
                          , Fu = f(hu)
                          , Cu = function(au) {
                            var su = gu.get(pu - 1)
                              , Du = bu.get(su, -1);
                            return (0,
                            cu.default)([_u.LRI, _u.RLI, _u.FSI], su) && -1 === Du ? fu : f(pu)
                        }()
                          , Au = Math.max(vu, Fu) % 2 == 1 ? "R" : "L"
                          , yu = Math.max(Fu, Cu) % 2 == 1 ? "R" : "L";
                        return au.set("sos", Au).set("eos", yu)
                    }
                    ))
                }(Eu.filter((function(au) {
                    var su = au.get("from")
                      , fu = gu.get(su)
                      , cu = Iu.get(su, -1);
                    return fu !== _u.PDI || -1 === cu
                }
                )).reduce((function(au, su, fu) {
                    var cu = new vu.Sequence({
                        runs: u(Du.List.of(su))
                    });
                    return au.push(cu)
                }
                ), Du.List.of())),
                codepoints: gu,
                bidiTypes: mu,
                paragraphBidiTypes: Su,
                levels: Au
            }
        }
    }
    , function(au, su, fu) {
        "use strict";
        Object.defineProperty(su, "__esModule", {
            value: !0
        });
        var cu = function(au) {
            return au && au.__esModule ? au : {
                default: au
            }
        }(fu(4))
          , Du = fu(0)
          , lu = fu(3);
        su.default = function n(au, su, fu, hu) {
            if (au !== Du.RLI)
                return hu;
            var pu = hu.get("directionalStatusStack").peek()
              , du = pu.get("level");
            return (0,
            cu.default)((function(au) {
                return au.update("embeddingLevels", (function(au) {
                    return au.set(fu, du)
                }
                ))
            }
            ), (function(au) {
                var su = pu.get("override");
                if ("neutral" !== su) {
                    var cu = "left-to-right" === su ? "L" : "R";
                    return au.update("bidiTypes", (function(au) {
                        return au.set(fu, cu)
                    }
                    ))
                }
                return au
            }
            ), (function(au) {
                var su = du + 1 + du % 2;
                return su > Du.MAX_DEPTH || function r(au) {
                    var su = au.get("overflowIsolateCount")
                      , fu = au.get("overflowEmbeddingCount");
                    return su > 0 || fu > 0
                }(au) ? au.update("overflowIsolateCount", lu.increase) : au.update("validIsolateCount", lu.increase).update("directionalStatusStack", (function(au) {
                    return au.push(new lu.DirectionalStatusStackEntry({
                        isolate: !0,
                        level: su
                    }))
                }
                ))
            }
            ))(hu)
        }
    }
    , function(au, su, fu) {
        "use strict";
        Object.defineProperty(su, "__esModule", {
            value: !0
        });
        var cu = function(au) {
            return au && au.__esModule ? au : {
                default: au
            }
        }(fu(4))
          , Du = fu(3)
          , lu = fu(0);
        su.default = function n(au, su, fu, hu) {
            if (au !== lu.LRI)
                return hu;
            var pu = hu.get("directionalStatusStack").peek()
              , du = pu.get("level");
            return (0,
            cu.default)((function(au) {
                return au.update("embeddingLevels", (function(au) {
                    return au.set(fu, du)
                }
                ))
            }
            ), (function(au) {
                var su = pu.get("override");
                if ("neutral" !== su) {
                    var cu = "left-to-right" === su ? "L" : "R";
                    return au.update("bidiTypes", (function(au) {
                        return au.set(fu, cu)
                    }
                    ))
                }
                return au
            }
            ), (function(au) {
                var su = du + 1 + (du + 1) % 2;
                return su > lu.MAX_DEPTH || function r(au) {
                    var su = au.get("overflowIsolateCount")
                      , fu = au.get("overflowEmbeddingCount");
                    return su > 0 || fu > 0
                }(au) ? au.update("overflowIsolateCount", Du.increase) : au.update("validIsolateCount", Du.increase).update("directionalStatusStack", (function(au) {
                    return au.push(new Du.DirectionalStatusStackEntry({
                        isolate: !0,
                        level: su
                    }))
                }
                ))
            }
            ))(hu)
        }
    }
    , function(au, su, fu) {
        "use strict";
        function r(au) {
            return au && au.__esModule ? au : {
                default: au
            }
        }
        Object.defineProperty(su, "__esModule", {
            value: !0
        });
        var i = function(au, su) {
            if (Array.isArray(au))
                return au;
            if (Symbol.iterator in Object(au))
                return function t(au, su) {
                    var fu = []
                      , cu = !0
                      , Du = !1
                      , lu = void 0;
                    try {
                        for (var hu, pu = au[Symbol.iterator](); !(cu = (hu = pu.next()).done) && (fu.push(hu.value),
                        !su || fu.length !== su); cu = !0)
                            ;
                    } catch (au) {
                        Du = !0,
                        lu = au
                    } finally {
                        try {
                            !cu && pu.return && pu.return()
                        } finally {
                            if (Du)
                                throw lu
                        }
                    }
                    return fu
                }(au, su);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
          , cu = (r(fu(6)),
        fu(2))
          , Du = r(cu)
          , lu = fu(1)
          , hu = fu(0);
        su.default = function n(au, su) {
            var fu = ((0,
            lu.Record)({
                inside: !1,
                counter: 0
            }, "P2State"),
            au.reduce((function(au, su) {
                var fu = au.get(-1, 0);
                return au.push((0,
                Du.default)([hu.LRI, hu.RLI, hu.FSI], su) ? fu + 1 : su === hu.PDI && fu > 0 ? fu - 1 : fu)
            }
            ), lu.List.of()).map((function(au) {
                return au > 0
            }
            )))
              , cu = au.zip(su, fu).filter((function(au) {
                var su = i(au, 3);
                return su[0],
                su[1],
                !1 === su[2]
            }
            )).map((function(au) {
                var su = i(au, 3)
                  , fu = (su[0],
                su[1]);
                return su[2],
                fu
            }
            )).find((function(au) {
                return (0,
                Du.default)(["L", "R", "AL"], au)
            }
            ));
            return (0,
            Du.default)(["R", "AL"], cu) ? 1 : 0
        }
    }
    , function(au, su, fu) {
        "use strict";
        Object.defineProperty(su, "__esModule", {
            value: !0
        });
        var n = function(au, su) {
            if (Array.isArray(au))
                return au;
            if (Symbol.iterator in Object(au))
                return function t(au, su) {
                    var fu = []
                      , cu = !0
                      , Du = !1
                      , lu = void 0;
                    try {
                        for (var hu, pu = au[Symbol.iterator](); !(cu = (hu = pu.next()).done) && (fu.push(hu.value),
                        !su || fu.length !== su); cu = !0)
                            ;
                    } catch (au) {
                        Du = !0,
                        lu = au
                    } finally {
                        try {
                            !cu && pu.return && pu.return()
                        } finally {
                            if (Du)
                                throw lu
                        }
                    }
                    return fu
                }(au, su);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
          , cu = fu(1)
          , Du = function(au) {
            return au && au.__esModule ? au : {
                default: au
            }
        }(fu(26));
        su.default = function r(au) {
            var su = au.size
              , fu = (0,
            cu.Range)().zip((0,
            cu.Range)(0, su).map((function(su) {
                return (0,
                Du.default)(au, su)
            }
            ))).filter((function(au) {
                var su = n(au, 2);
                return su[0],
                -1 !== su[1]
            }
            ))
              , lu = fu.map((function(au) {
                var su = n(au, 2)
                  , fu = su[0];
                return [su[1], fu]
            }
            ));
            return {
                initiatorToPDI: (0,
                cu.Map)(fu),
                initiatorFromPDI: (0,
                cu.Map)(lu)
            }
        }
    }
    , function(au, su, fu) {
        "use strict";
        Object.defineProperty(su, "__esModule", {
            value: !0
        });
        var n = function(au, su) {
            if (Array.isArray(au))
                return au;
            if (Symbol.iterator in Object(au))
                return function t(au, su) {
                    var fu = []
                      , cu = !0
                      , Du = !1
                      , lu = void 0;
                    try {
                        for (var hu, pu = au[Symbol.iterator](); !(cu = (hu = pu.next()).done) && (fu.push(hu.value),
                        !su || fu.length !== su); cu = !0)
                            ;
                    } catch (au) {
                        Du = !0,
                        lu = au
                    } finally {
                        try {
                            !cu && pu.return && pu.return()
                        } finally {
                            if (Du)
                                throw lu
                        }
                    }
                    return fu
                }(au, su);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
          , cu = fu(1);
        su.default = function r(au) {
            var su = au.reduce((function(au, su) {
                var fu = n(su, 2)
                  , cu = fu[0]
                  , Du = fu[1];
                return au.update(0, (function(au) {
                    return au.push(cu)
                }
                )).update(1, (function(au) {
                    return au.push(Du)
                }
                ))
            }
            ), cu.List.of(cu.List.of(), cu.List.of()));
            return [su.get(0), su.get(1)]
        }
    }
    , function(au, su, fu) {
        "use strict";
        Object.defineProperty(su, "__esModule", {
            value: !0
        });
        var cu = new Set([40, 91, 123, 3898, 3900, 5787, 8261, 8317, 8333, 8968, 8970, 9001, 10088, 10090, 10092, 10094, 10096, 10098, 10100, 10181, 10214, 10216, 10218, 10220, 10222, 10627, 10629, 10631, 10633, 10635, 10637, 10639, 10641, 10643, 10645, 10647, 10712, 10714, 10748, 11810, 11812, 11814, 11816, 12296, 12298, 12300, 12302, 12304, 12308, 12310, 12312, 12314, 65113, 65115, 65117, 65288, 65339, 65371, 65375, 65378]);
        su.default = cu
    }
    , function(au, su, fu) {
        "use strict";
        Object.defineProperty(su, "__esModule", {
            value: !0
        });
        var cu = new Set([41, 93, 125, 3899, 3901, 5788, 8262, 8318, 8334, 8969, 8971, 9002, 10089, 10091, 10093, 10095, 10097, 10099, 10101, 10182, 10215, 10217, 10219, 10221, 10223, 10628, 10630, 10632, 10634, 10636, 10638, 10640, 10642, 10644, 10646, 10648, 10713, 10715, 10749, 11811, 11813, 11815, 11817, 12297, 12299, 12301, 12303, 12305, 12309, 12311, 12313, 12315, 65114, 65116, 65118, 65289, 65341, 65373, 65376, 65379]);
        su.default = cu
    }
    , function(au, su, fu) {
        "use strict";
        Object.defineProperty(su, "__esModule", {
            value: !0
        });
        var cu = new Map([[40, 41], [41, 40], [91, 93], [93, 91], [123, 125], [125, 123], [3898, 3899], [3899, 3898], [3900, 3901], [3901, 3900], [5787, 5788], [5788, 5787], [8261, 8262], [8262, 8261], [8317, 8318], [8318, 8317], [8333, 8334], [8334, 8333], [8968, 8969], [8969, 8968], [8970, 8971], [8971, 8970], [9001, 9002], [9002, 9001], [10088, 10089], [10089, 10088], [10090, 10091], [10091, 10090], [10092, 10093], [10093, 10092], [10094, 10095], [10095, 10094], [10096, 10097], [10097, 10096], [10098, 10099], [10099, 10098], [10100, 10101], [10101, 10100], [10181, 10182], [10182, 10181], [10214, 10215], [10215, 10214], [10216, 10217], [10217, 10216], [10218, 10219], [10219, 10218], [10220, 10221], [10221, 10220], [10222, 10223], [10223, 10222], [10627, 10628], [10628, 10627], [10629, 10630], [10630, 10629], [10631, 10632], [10632, 10631], [10633, 10634], [10634, 10633], [10635, 10636], [10636, 10635], [10637, 10640], [10638, 10639], [10639, 10638], [10640, 10637], [10641, 10642], [10642, 10641], [10643, 10644], [10644, 10643], [10645, 10646], [10646, 10645], [10647, 10648], [10648, 10647], [10712, 10713], [10713, 10712], [10714, 10715], [10715, 10714], [10748, 10749], [10749, 10748], [11810, 11811], [11811, 11810], [11812, 11813], [11813, 11812], [11814, 11815], [11815, 11814], [11816, 11817], [11817, 11816], [12296, 12297], [12297, 12296], [12298, 12299], [12299, 12298], [12300, 12301], [12301, 12300], [12302, 12303], [12303, 12302], [12304, 12305], [12305, 12304], [12308, 12309], [12309, 12308], [12310, 12311], [12311, 12310], [12312, 12313], [12313, 12312], [12314, 12315], [12315, 12314], [65113, 65114], [65114, 65113], [65115, 65116], [65116, 65115], [65117, 65118], [65118, 65117], [65288, 65289], [65289, 65288], [65339, 65341], [65341, 65339], [65371, 65373], [65373, 65371], [65375, 65376], [65376, 65375], [65378, 65379], [65379, 65378]]);
        su.default = cu
    }
    , function(au, su) {
        au.exports = new Map([[40, ")"], [41, "("], [60, ">"], [62, "<"], [91, "]"], [93, "["], [123, "}"], [125, "{"], [171, "»"], [187, "«"], [3898, "༻"], [3899, "༺"], [3900, "༽"], [3901, "༼"], [5787, "᚜"], [5788, "᚛"], [8249, "›"], [8250, "‹"], [8261, "⁆"], [8262, "⁅"], [8317, "⁾"], [8318, "⁽"], [8333, "₎"], [8334, "₍"], [8712, "∋"], [8713, "∌"], [8714, "∍"], [8715, "∈"], [8716, "∉"], [8717, "∊"], [8725, "⧵"], [8764, "∽"], [8765, "∼"], [8771, "⋍"], [8786, "≓"], [8787, "≒"], [8788, "≕"], [8789, "≔"], [8804, "≥"], [8805, "≤"], [8806, "≧"], [8807, "≦"], [8808, "≩"], [8809, "≨"], [8810, "≫"], [8811, "≪"], [8814, "≯"], [8815, "≮"], [8816, "≱"], [8817, "≰"], [8818, "≳"], [8819, "≲"], [8820, "≵"], [8821, "≴"], [8822, "≷"], [8823, "≶"], [8824, "≹"], [8825, "≸"], [8826, "≻"], [8827, "≺"], [8828, "≽"], [8829, "≼"], [8830, "≿"], [8831, "≾"], [8832, "⊁"], [8833, "⊀"], [8834, "⊃"], [8835, "⊂"], [8836, "⊅"], [8837, "⊄"], [8838, "⊇"], [8839, "⊆"], [8840, "⊉"], [8841, "⊈"], [8842, "⊋"], [8843, "⊊"], [8847, "⊐"], [8848, "⊏"], [8849, "⊒"], [8850, "⊑"], [8856, "⦸"], [8866, "⊣"], [8867, "⊢"], [8870, "⫞"], [8872, "⫤"], [8873, "⫣"], [8875, "⫥"], [8880, "⊱"], [8881, "⊰"], [8882, "⊳"], [8883, "⊲"], [8884, "⊵"], [8885, "⊴"], [8886, "⊷"], [8887, "⊶"], [8905, "⋊"], [8906, "⋉"], [8907, "⋌"], [8908, "⋋"], [8909, "≃"], [8912, "⋑"], [8913, "⋐"], [8918, "⋗"], [8919, "⋖"], [8920, "⋙"], [8921, "⋘"], [8922, "⋛"], [8923, "⋚"], [8924, "⋝"], [8925, "⋜"], [8926, "⋟"], [8927, "⋞"], [8928, "⋡"], [8929, "⋠"], [8930, "⋣"], [8931, "⋢"], [8932, "⋥"], [8933, "⋤"], [8934, "⋧"], [8935, "⋦"], [8936, "⋩"], [8937, "⋨"], [8938, "⋫"], [8939, "⋪"], [8940, "⋭"], [8941, "⋬"], [8944, "⋱"], [8945, "⋰"], [8946, "⋺"], [8947, "⋻"], [8948, "⋼"], [8950, "⋽"], [8951, "⋾"], [8954, "⋲"], [8955, "⋳"], [8956, "⋴"], [8957, "⋶"], [8958, "⋷"], [8968, "⌉"], [8969, "⌈"], [8970, "⌋"], [8971, "⌊"], [9001, "〉"], [9002, "〈"], [10088, "❩"], [10089, "❨"], [10090, "❫"], [10091, "❪"], [10092, "❭"], [10093, "❬"], [10094, "❯"], [10095, "❮"], [10096, "❱"], [10097, "❰"], [10098, "❳"], [10099, "❲"], [10100, "❵"], [10101, "❴"], [10179, "⟄"], [10180, "⟃"], [10181, "⟆"], [10182, "⟅"], [10184, "⟉"], [10185, "⟈"], [10187, "⟍"], [10189, "⟋"], [10197, "⟖"], [10198, "⟕"], [10205, "⟞"], [10206, "⟝"], [10210, "⟣"], [10211, "⟢"], [10212, "⟥"], [10213, "⟤"], [10214, "⟧"], [10215, "⟦"], [10216, "⟩"], [10217, "⟨"], [10218, "⟫"], [10219, "⟪"], [10220, "⟭"], [10221, "⟬"], [10222, "⟯"], [10223, "⟮"], [10627, "⦄"], [10628, "⦃"], [10629, "⦆"], [10630, "⦅"], [10631, "⦈"], [10632, "⦇"], [10633, "⦊"], [10634, "⦉"], [10635, "⦌"], [10636, "⦋"], [10637, "⦐"], [10638, "⦏"], [10639, "⦎"], [10640, "⦍"], [10641, "⦒"], [10642, "⦑"], [10643, "⦔"], [10644, "⦓"], [10645, "⦖"], [10646, "⦕"], [10647, "⦘"], [10648, "⦗"], [10680, "⊘"], [10688, "⧁"], [10689, "⧀"], [10692, "⧅"], [10693, "⧄"], [10703, "⧐"], [10704, "⧏"], [10705, "⧒"], [10706, "⧑"], [10708, "⧕"], [10709, "⧔"], [10712, "⧙"], [10713, "⧘"], [10714, "⧛"], [10715, "⧚"], [10741, "∕"], [10744, "⧹"], [10745, "⧸"], [10748, "⧽"], [10749, "⧼"], [10795, "⨬"], [10796, "⨫"], [10797, "⨮"], [10798, "⨭"], [10804, "⨵"], [10805, "⨴"], [10812, "⨽"], [10813, "⨼"], [10852, "⩥"], [10853, "⩤"], [10873, "⩺"], [10874, "⩹"], [10877, "⩾"], [10878, "⩽"], [10879, "⪀"], [10880, "⩿"], [10881, "⪂"], [10882, "⪁"], [10883, "⪄"], [10884, "⪃"], [10891, "⪌"], [10892, "⪋"], [10897, "⪒"], [10898, "⪑"], [10899, "⪔"], [10900, "⪓"], [10901, "⪖"], [10902, "⪕"], [10903, "⪘"], [10904, "⪗"], [10905, "⪚"], [10906, "⪙"], [10907, "⪜"], [10908, "⪛"], [10913, "⪢"], [10914, "⪡"], [10918, "⪧"], [10919, "⪦"], [10920, "⪩"], [10921, "⪨"], [10922, "⪫"], [10923, "⪪"], [10924, "⪭"], [10925, "⪬"], [10927, "⪰"], [10928, "⪯"], [10931, "⪴"], [10932, "⪳"], [10939, "⪼"], [10940, "⪻"], [10941, "⪾"], [10942, "⪽"], [10943, "⫀"], [10944, "⪿"], [10945, "⫂"], [10946, "⫁"], [10947, "⫄"], [10948, "⫃"], [10949, "⫆"], [10950, "⫅"], [10957, "⫎"], [10958, "⫍"], [10959, "⫐"], [10960, "⫏"], [10961, "⫒"], [10962, "⫑"], [10963, "⫔"], [10964, "⫓"], [10965, "⫖"], [10966, "⫕"], [10974, "⊦"], [10979, "⊩"], [10980, "⊨"], [10981, "⊫"], [10988, "⫭"], [10989, "⫬"], [10999, "⫸"], [11e3, "⫷"], [11001, "⫺"], [11002, "⫹"], [11778, "⸃"], [11779, "⸂"], [11780, "⸅"], [11781, "⸄"], [11785, "⸊"], [11786, "⸉"], [11788, "⸍"], [11789, "⸌"], [11804, "⸝"], [11805, "⸜"], [11808, "⸡"], [11809, "⸠"], [11810, "⸣"], [11811, "⸢"], [11812, "⸥"], [11813, "⸤"], [11814, "⸧"], [11815, "⸦"], [11816, "⸩"], [11817, "⸨"], [12296, "〉"], [12297, "〈"], [12298, "》"], [12299, "《"], [12300, "」"], [12301, "「"], [12302, "』"], [12303, "『"], [12304, "】"], [12305, "【"], [12308, "〕"], [12309, "〔"], [12310, "〗"], [12311, "〖"], [12312, "〙"], [12313, "〘"], [12314, "〛"], [12315, "〚"], [65113, "﹚"], [65114, "﹙"], [65115, "﹜"], [65116, "﹛"], [65117, "﹞"], [65118, "﹝"], [65124, "﹥"], [65125, "﹤"], [65288, "）"], [65289, "（"], [65308, "＞"], [65310, "＜"], [65339, "］"], [65341, "［"], [65371, "｝"], [65373, "｛"], [65375, "｠"], [65376, "｟"], [65378, "｣"], [65379, "｢"]])
    }
    , function(au, su, fu) {
        "use strict";
        function r(au) {
            return au && au.__esModule ? au : {
                default: au
            }
        }
        Object.defineProperty(su, "__esModule", {
            value: !0
        }),
        su.constants = su.mirror = su.reorderPermutation = su.reorder = su.resolve = void 0;
        var cu = fu(18)
          , Du = fu(48)
          , lu = r(Du)
          , hu = r(fu(50))
          , pu = r(fu(51))
          , du = fu(1)
          , _u = r(fu(13))
          , vu = r(fu(14))
          , Fu = r(fu(15))
          , Eu = r(fu(16))
          , Cu = r(fu(53))
          , Au = {
            mirrorMap: Eu.default,
            oppositeBracket: Fu.default,
            openingBrackets: _u.default,
            closingBrackets: vu.default
        };
        su.resolve = function n(au, su) {
            var fu = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
              , Du = pu.default.ucs2.encode(au)
              , lu = Du.normalize("NFC")
              , _u = pu.default.ucs2.decode(lu)
              , vu = (0,
            du.fromJS)(_u)
              , Fu = vu.map(hu.default);
            return (0,
            cu.resolvedLevelsWithInvisibles)(vu, Fu, su, fu).toJS()
        }
        ,
        su.reorder = function i(au, su) {
            var fu = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            return (0,
            lu.default)((0,
            du.fromJS)(au), (0,
            du.fromJS)(su), fu).toJS()
        }
        ,
        su.reorderPermutation = function o(au) {
            return (0,
            Du.reorderPermutation)((0,
            du.fromJS)(au)).toJS()
        }
        ,
        su.mirror = function a(au, su) {
            return (0,
            Cu.default)((0,
            du.fromJS)(au), (0,
            du.fromJS)(su)).toJS()
        }
        ,
        su.constants = Au
    }
    , function(au, su, fu) {
        "use strict";
        function r(au) {
            return au && au.__esModule ? au : {
                default: au
            }
        }
        function i(au, su, fu) {
            var lu = arguments.length > 3 && void 0 !== arguments[3] && arguments[3]
              , hu = !0 === lu ? (0,
            du.default)(au, su) : fu
              , pu = (0,
            Du.default)(au, su, hu)
              , Fu = pu.sequences
              , Cu = pu.codepoints
              , Au = pu.bidiTypes
              , yu = pu.paragraphBidiTypes
              , Bu = (pu.levels,
            (0,
            vu.default)(Cu, Au, Fu))
              , gu = Au.size
              , mu = Fu.reduce(o, (0,
            cu.List)((0,
            cu.Range)(0, gu)).map((function(au) {
                return 0
            }
            )))
              , Su = (0,
            _u.default)(Bu, mu);
            return (0,
            Eu.default)(yu, Su, hu)
        }
        function o(au, su) {
            return su.get("runs").reduce((function(au, su) {
                var fu = su.toJS()
                  , Du = fu.from
                  , lu = fu.to
                  , hu = lu - Du
                  , pu = su.get("level")
                  , du = (0,
                cu.List)((0,
                cu.Range)(0, hu)).map((function(au) {
                    return pu
                }
                ));
                return au.slice(0, Du).concat(du).concat(au.slice(lu))
            }
            ), au)
        }
        Object.defineProperty(su, "__esModule", {
            value: !0
        }),
        su.resolvedLevelsWithInvisibles = void 0;
        var cu = fu(1)
          , Du = r(fu(7))
          , lu = fu(0)
          , hu = (r(fu(12)),
        fu(32))
          , pu = (r(hu),
        fu(10))
          , du = r(pu)
          , _u = r(fu(33))
          , vu = r(fu(34))
          , Fu = (r(fu(2)),
        fu(47))
          , Eu = r(Fu);
        su.resolvedLevelsWithInvisibles = function n(au, su, fu) {
            function r(au, su, fu) {
                return 0 === au.size ? fu : (0,
                lu.isX9ControlCharacter)(au.first()) ? r(au.rest(), su, fu.push("x")) : r(au.rest(), su.rest(), fu.push(su.first()))
            }
            return r(su, i(au, su, fu, arguments.length > 3 && void 0 !== arguments[3] && arguments[3]), cu.List.of())
        }
        ,
        su.default = i
    }
    , function(au, su, fu) {
        "use strict";
        Object.defineProperty(su, "__esModule", {
            value: !0
        });
        var n = function(au, su) {
            if (Array.isArray(au))
                return au;
            if (Symbol.iterator in Object(au))
                return function t(au, su) {
                    var fu = []
                      , cu = !0
                      , Du = !1
                      , lu = void 0;
                    try {
                        for (var hu, pu = au[Symbol.iterator](); !(cu = (hu = pu.next()).done) && (fu.push(hu.value),
                        !su || fu.length !== su); cu = !0)
                            ;
                    } catch (au) {
                        Du = !0,
                        lu = au
                    } finally {
                        try {
                            !cu && pu.return && pu.return()
                        } finally {
                            if (Du)
                                throw lu
                        }
                    }
                    return fu
                }(au, su);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
          , cu = (function(au) {
            au && au.__esModule
        }(fu(2)),
        fu(1))
          , Du = fu(0)
          , lu = fu(3)
          , hu = fu(20);
        su.default = function r(au, su) {
            var fu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
              , pu = [hu.rle, hu.lre, hu.rlo, hu.lro, hu.rli, hu.lri, hu.fsi, hu.other, hu.pdi, hu.pdf]
              , du = cu.Stack.of(new lu.DirectionalStatusStackEntry({
                level: fu
            }))
              , _u = new lu.EmbeddingLevelState({
                directionalStatusStack: du
            }).set("bidiTypes", su).set("embeddingLevels", au.map((function(au) {
                return fu
            }
            )))
              , vu = au.zip(su).reduce((function(fu, cu, Du) {
                var lu = n(cu, 2)
                  , hu = lu[0]
                  , du = lu[1];
                return pu.reduce((function(fu, cu) {
                    return cu(hu, du, Du, fu, au, su)
                }
                ), fu)
            }
            ), _u);
            return {
                runs: au.zip(su, vu.get("embeddingLevels")).filter((function(au) {
                    var su = n(au, 3)
                      , fu = (su[0],
                    su[1]);
                    return su[2],
                    !1 === (0,
                    Du.isX9ControlCharacter)(fu)
                }
                )).reduce((function(au, su, fu) {
                    var cu = n(su, 3)
                      , Du = (cu[0],
                    cu[1],
                    cu[2])
                      , hu = au.size - 1;
                    return au.getIn([hu, "level"], -1) === Du ? au.updateIn([hu, "to"], lu.increase) : au.push(new lu.Run({
                        level: Du,
                        from: fu,
                        to: fu + 1
                    }))
                }
                ), cu.List.of()),
                bidiTypes: vu.get("bidiTypes"),
                levels: vu.get("embeddingLevels")
            }
        }
    }
    , function(au, su, fu) {
        "use strict";
        function r(au) {
            return au && au.__esModule ? au : {
                default: au
            }
        }
        Object.defineProperty(su, "__esModule", {
            value: !0
        }),
        su.pdf = su.pdi = su.other = su.fsi = su.lri = su.rli = su.lro = su.rlo = su.lre = su.rle = void 0;
        var cu = fu(21)
          , Du = r(fu(22))
          , lu = r(fu(23))
          , hu = r(fu(24))
          , pu = r(fu(8))
          , du = r(fu(9))
          , _u = r(fu(25))
          , vu = r(fu(27))
          , Fu = fu(28)
          , Eu = fu(29);
        su.rle = cu.rle,
        su.lre = Du.default,
        su.rlo = lu.default,
        su.lro = hu.default,
        su.rli = pu.default,
        su.lri = du.default,
        su.fsi = _u.default,
        su.other = vu.default,
        su.pdi = Fu.pdi,
        su.pdf = Eu.pdf
    }
    , function(au, su, fu) {
        "use strict";
        Object.defineProperty(su, "__esModule", {
            value: !0
        }),
        su.rle = void 0;
        var cu = fu(0)
          , Du = fu(3)
          , lu = function(au) {
            return au && au.__esModule ? au : {
                default: au
            }
        }(fu(4));
        su.rle = function r(au, su, fu, hu) {
            if (au !== cu.RLE)
                return hu;
            var pu = hu.get("directionalStatusStack").peek().get("level");
            return (0,
            lu.default)((function(au) {
                return au.setIn(["embeddingLevels", "levels", fu], pu)
            }
            ), (function(au) {
                var su = pu + 1 + pu % 2
                  , fu = su > cu.MAX_DEPTH
                  , lu = au.get("overflowIsolateCount")
                  , hu = au.get("overflowEmbeddingCount");
                if (fu || (lu > 0 || hu > 0))
                    return 0 === lu ? au.update("overflowEmbeddingCount", Du.increase) : au;
                var du = new Du.DirectionalStatusStackEntry({
                    level: su
                });
                return au.update("directionalStatusStack", (function(au) {
                    return au.push(du)
                }
                ))
            }
            ))(hu)
        }
    }
    , function(au, su, fu) {
        "use strict";
        Object.defineProperty(su, "__esModule", {
            value: !0
        });
        var cu = function(au) {
            return au && au.__esModule ? au : {
                default: au
            }
        }(fu(4))
          , Du = fu(0)
          , lu = fu(3);
        su.default = function r(au, su, fu, hu) {
            if (au !== Du.LRE)
                return hu;
            var pu = hu.get("directionalStatusStack").peek().get("level");
            return (0,
            cu.default)((function(au) {
                return au.setIn(["embeddingLevels", "levels", fu], pu)
            }
            ), (function(au) {
                var su = pu + 1 + (pu + 1) % 2
                  , fu = su > Du.MAX_DEPTH
                  , cu = au.get("overflowIsolateCount")
                  , hu = au.get("overflowEmbeddingCount");
                if (fu || (cu > 0 || hu > 0))
                    return 0 === cu ? au.update("overflowEmbeddingCount", lu.increase) : au;
                var du = new lu.DirectionalStatusStackEntry({
                    level: su
                });
                return au.update("directionalStatusStack", (function(au) {
                    return au.push(du)
                }
                ))
            }
            ))(hu)
        }
    }
    , function(au, su, fu) {
        "use strict";
        Object.defineProperty(su, "__esModule", {
            value: !0
        });
        var cu = fu(0)
          , Du = fu(3);
        su.default = function r(au, su, fu, lu) {
            if (au !== cu.RLO)
                return lu;
            var hu = lu.get("directionalStatusStack").peek().get("level")
              , pu = lu.get("overflowIsolateCount")
              , du = lu.get("overflowEmbeddingCount")
              , _u = hu + 1 + hu % 2;
            return _u > cu.MAX_DEPTH || (pu > 0 || du > 0) ? 0 === pu ? lu.update("overflowEmbeddingCount", Du.increase) : lu : lu.update("directionalStatusStack", (function(au) {
                return au.push(new Du.DirectionalStatusStackEntry({
                    level: _u,
                    override: "right-to-left"
                }))
            }
            ))
        }
    }
    , function(au, su, fu) {
        "use strict";
        Object.defineProperty(su, "__esModule", {
            value: !0
        });
        var cu = fu(0)
          , Du = fu(3);
        su.default = function r(au, su, fu, lu) {
            if (au !== cu.LRO)
                return lu;
            var hu = lu.get("directionalStatusStack").peek().get("level")
              , pu = lu.get("overflowIsolateCount")
              , du = lu.get("overflowEmbeddingCount")
              , _u = hu + 1 + (hu + 1) % 2;
            return _u > cu.MAX_DEPTH || (pu > 0 || du > 0) ? 0 === pu ? lu.update("overflowEmbeddingCount", Du.increase) : lu : lu.update("directionalStatusStack", (function(au) {
                return au.push(new Du.DirectionalStatusStackEntry({
                    level: _u,
                    override: "left-to-right"
                }))
            }
            ))
        }
    }
    , function(au, su, fu) {
        "use strict";
        function r(au) {
            return au && au.__esModule ? au : {
                default: au
            }
        }
        Object.defineProperty(su, "__esModule", {
            value: !0
        });
        var cu = r(fu(8))
          , Du = r(fu(9))
          , lu = r(fu(10))
          , hu = r(fu(11))
          , pu = fu(0);
        su.default = function n(au, su, fu, du, _u, vu) {
            if (au !== pu.FSI)
                return du;
            var Fu = (0,
            hu.default)(_u).initiatorToPDI.get(fu, -1)
              , Eu = fu + 1
              , Cu = Fu > -1 ? Fu : _u.size
              , Au = _u.slice(Eu, Cu)
              , yu = vu.slice(Eu, Cu);
            return 1 === (0,
            lu.default)(Au, yu) ? (0,
            cu.default)(pu.RLI, su, fu, du, _u) : (0,
            Du.default)(pu.LRI, su, fu, du, _u)
        }
    }
    , function(au, su, fu) {
        "use strict";
        Object.defineProperty(su, "__esModule", {
            value: !0
        });
        var cu = function(au) {
            return au && au.__esModule ? au : {
                default: au
            }
        }(fu(2))
          , Du = fu(0)
          , lu = fu(1);
        su.default = function r(au, su) {
            if (su >= au.size)
                return -1;
            if (!(0,
            cu.default)([Du.LRI, Du.RLI, Du.FSI], au.get(su)))
                return -1;
            var fu = au.slice(su + 1)
              , hu = (0,
            lu.Record)({
                counter: 1,
                index: -1
            }, "BD9State");
            return fu.reduce((function(au, fu, lu) {
                if (au.get("index") > -1)
                    return au;
                var pu = function() {
                    var su = au.get("counter");
                    return (0,
                    cu.default)([Du.LRI, Du.RLI, Du.FSI], fu) ? su + 1 : fu === Du.PDI ? su - 1 : su
                }();
                return fu === Du.PDI && 0 === pu ? new hu({
                    counter: pu,
                    index: su + (lu + 1)
                }) : au.set("counter", pu)
            }
            ), new hu).get("index")
        }
    }
    , function(au, su, fu) {
        "use strict";
        function r(au) {
            return au && au.__esModule ? au : {
                default: au
            }
        }
        Object.defineProperty(su, "__esModule", {
            value: !0
        });
        var cu = r(fu(4))
          , Du = (r(fu(2)),
        fu(0));
        su.default = function n(au, su, fu, lu) {
            if ((0,
            Du.isNonFormatting)(su))
                return lu;
            var hu = lu.get("directionalStatusStack").peek()
              , pu = hu.get("level");
            return (0,
            cu.default)((function(au) {
                return au.update("embeddingLevels", (function(au) {
                    return au.set(fu, pu)
                }
                ))
            }
            ), (function(au) {
                var su = hu.get("override");
                if ("neutral" !== su) {
                    var cu = "left-to-right" === su ? "L" : "R";
                    return au.update("bidiTypes", (function(au) {
                        return au.set(fu, cu)
                    }
                    ))
                }
                return au
            }
            ))(lu)
        }
    }
    , function(au, su, fu) {
        "use strict";
        Object.defineProperty(su, "__esModule", {
            value: !0
        }),
        su.pdi = void 0;
        var cu = function(au) {
            return au && au.__esModule ? au : {
                default: au
            }
        }(fu(4))
          , Du = fu(0)
          , lu = fu(3);
        su.pdi = function r(au, su, fu, hu) {
            if (au !== Du.PDI)
                return hu;
            var pu = hu.get("overflowIsolateCount")
              , du = hu.get("validIsolateCount");
            return (0,
            cu.default)((function(au) {
                return pu > 0 ? au.update("overflowIsolateCount", lu.decrease) : 0 === du ? au : au.set("overflowEmbeddingCount", 0).update("directionalStatusStack", (function(au) {
                    return au.skipWhile((function(au) {
                        return !1 === au.get("isolate")
                    }
                    ))
                }
                )).update("directionalStatusStack", (function(au) {
                    return au.pop()
                }
                )).update("validIsolateCount", lu.decrease)
            }
            ), (function(au) {
                var su = au.get("directionalStatusStack").peek().get("level");
                return au.update("embeddingLevels", (function(au) {
                    return au.set(fu, su)
                }
                ))
            }
            ), (function(au) {
                var su = au.get("directionalStatusStack").peek().get("override");
                if ("neutral" !== su) {
                    var cu = "left-to-right" === su ? "L" : "R";
                    return au.setIn(["bidiTypes", fu], cu)
                }
                return au
            }
            ))(hu)
        }
    }
    , function(au, su, fu) {
        "use strict";
        Object.defineProperty(su, "__esModule", {
            value: !0
        }),
        su.pdf = void 0;
        var cu = fu(0)
          , Du = fu(3)
          , lu = function(au) {
            return au && au.__esModule ? au : {
                default: au
            }
        }(fu(4));
        su.pdf = function r(au, su, fu, hu) {
            return au !== cu.PDF ? hu : (0,
            lu.default)((function(au) {
                var su = au.get("directionalStatusStack").peek().get("level");
                return au.setIn(["embeddingLevels", "levels", fu], su)
            }
            ), (function(au) {
                var su = au.get("overflowIsolateCount")
                  , fu = au.get("overflowEmbeddingCount")
                  , cu = au.get("directionalStatusStack")
                  , lu = cu.peek().get("isolate");
                return su > 0 ? au : fu > 0 ? au.update("overflowEmbeddingCount", Du.decrease) : !1 === lu && cu.size >= 2 ? au.set("directionalStatusStack", cu.pop()) : au
            }
            ))(hu)
        }
    }
    , function(au, su, fu) {
        "use strict";
        Object.defineProperty(su, "__esModule", {
            value: !0
        });
        var n = function(au, su) {
            if (Array.isArray(au))
                return au;
            if (Symbol.iterator in Object(au))
                return function t(au, su) {
                    var fu = []
                      , cu = !0
                      , Du = !1
                      , lu = void 0;
                    try {
                        for (var hu, pu = au[Symbol.iterator](); !(cu = (hu = pu.next()).done) && (fu.push(hu.value),
                        !su || fu.length !== su); cu = !0)
                            ;
                    } catch (au) {
                        Du = !0,
                        lu = au
                    } finally {
                        try {
                            !cu && pu.return && pu.return()
                        } finally {
                            if (Du)
                                throw lu
                        }
                    }
                    return fu
                }(au, su);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
          , cu = fu(1);
        su.default = function r(au) {
            var su = au.reduce((function(au, su) {
                var fu = n(su, 3)
                  , cu = fu[0]
                  , Du = fu[1]
                  , lu = fu[2];
                return au.update(0, (function(au) {
                    return au.push(cu)
                }
                )).update(1, (function(au) {
                    return au.push(Du)
                }
                )).update(2, (function(au) {
                    return au.push(lu)
                }
                ))
            }
            ), cu.List.of(cu.List.of(), cu.List.of(), cu.List.of()));
            return [su.get(0), su.get(1), su.get(2)]
        }
    }
    , function(au, su, fu) {
        "use strict";
        Object.defineProperty(su, "__esModule", {
            value: !0
        });
        var cu = fu(3);
        su.default = function r(au, su) {
            var fu = au.filter((function(au) {
                return su >= au.get("from") && su < au.get("to")
            }
            ));
            return fu.size > 0 ? fu.last() : new cu.Run
        }
    }
    , function(au, su, fu) {
        "use strict";
        Object.defineProperty(su, "__esModule", {
            value: !0
        });
        var cu = fu(1);
        su.default = function r(au) {
            return au.butLast().reduce((function(au, su) {
                var fu = su.toJS()
                  , cu = fu.from
                  , Du = fu.to - cu
                  , lu = au.get(-1);
                return au.push(Du + lu)
            }
            ), cu.List.of(0))
        }
    }
    , function(au, su, fu) {
        "use strict";
        Object.defineProperty(su, "__esModule", {
            value: !0
        }),
        su.default = function r(au, su) {
            return au.zipWith((function(au, su) {
                return "L" === au ? su + su % 2 : "R" === au ? su + (su + 1) % 2 : "AN" === au || "EN" === au ? su + 1 + (su + 1) % 2 : void 0
            }
            ), su)
        }
    }
    , function(au, su, fu) {
        "use strict";
        function r(au) {
            return au && au.__esModule ? au : {
                default: au
            }
        }
        Object.defineProperty(su, "__esModule", {
            value: !0
        });
        var o = function(au, su) {
            if (Array.isArray(au))
                return au;
            if (Symbol.iterator in Object(au))
                return function t(au, su) {
                    var fu = []
                      , cu = !0
                      , Du = !1
                      , lu = void 0;
                    try {
                        for (var hu, pu = au[Symbol.iterator](); !(cu = (hu = pu.next()).done) && (fu.push(hu.value),
                        !su || fu.length !== su); cu = !0)
                            ;
                    } catch (au) {
                        Du = !0,
                        lu = au
                    } finally {
                        try {
                            !cu && pu.return && pu.return()
                        } finally {
                            if (Du)
                                throw lu
                        }
                    }
                    return fu
                }(au, su);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
          , cu = fu(1)
          , Du = fu(35)
          , lu = (r(fu(7)),
        fu(0),
        fu(12))
          , hu = r(lu)
          , pu = r(fu(43))
          , du = r(fu(44))
          , _u = r(fu(46));
        su.default = function n(au, su, fu) {
            return fu.reduce((function(su, fu) {
                return function i(au, su, fu) {
                    var lu = au.zip(su)
                      , vu = (0,
                    hu.default)(fu.get("runs").map((function(au) {
                        var su = au.toJS()
                          , fu = su.from
                          , cu = su.to;
                        return lu.slice(fu, cu)
                    }
                    )).flatten())
                      , Fu = o(vu, 2)
                      , Eu = Fu[0]
                      , Cu = Fu[1]
                      , Au = [Du.nsm, Du.en, Du.al, Du.es, Du.et, Du.on, Du.enToL, du.default, pu.default, _u.default].reduce((function(au, su) {
                        var cu = fu.get("runs").first().get("level");
                        return su(au, Eu, fu.get("sos"), fu.get("eos"), cu, Cu)
                    }
                    ), Cu)
                      , yu = fu.get("runs").butLast().reduce((function(au, su) {
                        var fu = su.toJS()
                          , cu = fu.from
                          , Du = fu.to - cu
                          , lu = au.get(-1);
                        return au.push(Du + lu)
                    }
                    ), cu.List.of(0))
                      , Bu = fu.get("runs").zip(yu).map((function(au) {
                        var su = o(au, 2)
                          , fu = su[0]
                          , cu = su[1]
                          , Du = fu.toJS()
                          , lu = Du.from
                          , hu = Du.to - lu;
                        return Au.slice(cu, cu + hu)
                    }
                    ));
                    return fu.get("runs").zip(Bu).reduce((function(au, su) {
                        var fu = o(su, 2)
                          , cu = fu[0]
                          , Du = fu[1]
                          , lu = cu.toJS()
                          , hu = lu.from
                          , pu = lu.to;
                        return au.slice(0, hu).concat(Du).concat(au.slice(pu))
                    }
                    ), su)
                }(au, su, fu)
            }
            ), su)
        }
    }
    , function(au, su, fu) {
        "use strict";
        function r(au) {
            return au && au.__esModule ? au : {
                default: au
            }
        }
        Object.defineProperty(su, "__esModule", {
            value: !0
        }),
        su.enToL = su.on = su.et = su.es = su.al = su.en = su.nsm = void 0;
        var cu = r(fu(36))
          , Du = r(fu(37))
          , lu = r(fu(38))
          , hu = r(fu(39))
          , pu = r(fu(40))
          , du = r(fu(41))
          , _u = r(fu(42));
        su.nsm = cu.default,
        su.en = Du.default,
        su.al = lu.default,
        su.es = hu.default,
        su.et = pu.default,
        su.on = du.default,
        su.enToL = _u.default
    }
    , function(au, su, fu) {
        "use strict";
        Object.defineProperty(su, "__esModule", {
            value: !0
        });
        var cu = fu(1)
          , Du = fu(0);
        su.default = function r(au, su, fu, lu) {
            return au.reduce((function(au, cu, lu) {
                if ("NSM" !== cu)
                    return au.push(cu);
                if (lu <= 0)
                    return au.push(fu);
                var hu = au.get(lu - 1)
                  , pu = su.get(lu - 1);
                return (0,
                Du.isIsolateInitiator)(hu) || (0,
                Du.isPDI)(pu) ? au.push("ON") : au.push(hu)
            }
            ), cu.List.of())
        }
    }
    , function(au, su, fu) {
        "use strict";
        Object.defineProperty(su, "__esModule", {
            value: !0
        });
        var cu = fu(0);
        su.default = function r(au, su, fu, Du, lu) {
            return au.map((function(su, Du) {
                return "EN" !== su ? su : "AL" === au.slice(0, Du).reverse().push(fu).find((function(au) {
                    return (0,
                    cu.isStrong)(au)
                }
                )) ? "AN" : su
            }
            ))
        }
    }
    , function(au, su, fu) {
        "use strict";
        Object.defineProperty(su, "__esModule", {
            value: !0
        }),
        su.default = function r(au) {
            return au.map((function(au) {
                return "AL" === au ? "R" : au
            }
            ))
        }
    }
    , function(au, su, fu) {
        "use strict";
        Object.defineProperty(su, "__esModule", {
            value: !0
        });
        var cu = function(au) {
            return au && au.__esModule ? au : {
                default: au
            }
        }(fu(2));
        su.default = function r(au) {
            if (au.size < 3)
                return au;
            var su = au.take(1)
              , fu = au.skip(2).zipWith((function(au, su, fu) {
                return "EN" === au && au === fu && "ES" === su ? "EN" : "CS" === su && function(au) {
                    return (0,
                    cu.default)(["AN", "EN"], au)
                }(au) && au === fu ? au : su
            }
            ), au.skip(1), au)
              , Du = au.last();
            return su.concat(fu).push(Du)
        }
    }
    , function(au, su, fu) {
        "use strict";
        Object.defineProperty(su, "__esModule", {
            value: !0
        });
        var cu = fu(0);
        su.default = function r(au) {
            return au.map((function(su, fu) {
                if ("ET" !== su)
                    return su;
                var Du = au.slice(0, fu).reverse()
                  , lu = au.slice(fu)
                  , hu = "EN" === Du.skipWhile(cu.isET).first()
                  , pu = "EN" === lu.skipWhile(cu.isET).first();
                return hu || pu ? "EN" : su
            }
            ))
        }
    }
    , function(au, su, fu) {
        "use strict";
        Object.defineProperty(su, "__esModule", {
            value: !0
        });
        var cu = function(au) {
            return au && au.__esModule ? au : {
                default: au
            }
        }(fu(2));
        su.default = function r(au, su) {
            return au.map((function(au, su) {
                return (0,
                cu.default)(["ET", "ES", "CS", "B", "S"], au) ? "ON" : au
            }
            ))
        }
    }
    , function(au, su, fu) {
        "use strict";
        Object.defineProperty(su, "__esModule", {
            value: !0
        });
        var cu = fu(0);
        su.default = function r(au, su, fu, Du, lu) {
            return au.map((function(su, Du) {
                return "EN" !== su ? su : "L" === au.slice(0, Du).reverse().push(fu).find((function(au) {
                    return (0,
                    cu.isStrong)(au)
                }
                )) ? "L" : su
            }
            ))
        }
    }
    , function(au, su, fu) {
        "use strict";
        Object.defineProperty(su, "__esModule", {
            value: !0
        });
        var cu = fu(0);
        su.default = function r(au, su, fu, Du, lu) {
            return au.map((function(su, lu) {
                if (!(0,
                cu.isNI)(su))
                    return su;
                var hu = au.slice(0, lu).reverse().push(fu)
                  , pu = au.slice(lu).push(Du)
                  , du = hu.skipWhile(cu.isNI).first()
                  , _u = pu.skipWhile(cu.isNI).first();
                return "L" === du && "L" === _u ? "L" : (0,
                cu.isR)(du) && (0,
                cu.isR)(_u) ? "R" : su
            }
            ))
        }
    }
    , function(au, su, fu) {
        "use strict";
        function r(au) {
            return au && au.__esModule ? au : {
                default: au
            }
        }
        Object.defineProperty(su, "__esModule", {
            value: !0
        });
        var cu = (r(fu(6)),
        fu(45))
          , Du = r(cu)
          , lu = r(fu(4))
          , hu = r(fu(2));
        su.default = function n(au, su, fu, cu, pu, du) {
            var _u = (0,
            Du.default)(su);
            return (0,
            lu.default)((function() {
                return _u.reduce((function(au, su) {
                    var cu = su.get("open")
                      , Du = su.get("close");
                    if (au.get(cu) !== au.get(Du))
                        return au;
                    var lu = au.slice(cu, Du + 1).map((function(au) {
                        return (0,
                        hu.default)(["EN", "AN"], au) ? "R" : au
                    }
                    ))
                      , du = pu % 2 == 0 ? "L" : "R"
                      , _u = pu % 2 == 0 ? "R" : "L"
                      , vu = lu.find((function(au) {
                        return au === du
                    }
                    ))
                      , Fu = lu.find((function(au) {
                        return au === _u
                    }
                    ));
                    return vu ? au.set(cu, du).set(Du, du) : Fu ? au.slice(0, cu).map((function(au) {
                        return (0,
                        hu.default)(["EN", "AN"], au) ? "R" : au
                    }
                    )).reverse().push(fu).find((function(au) {
                        return (0,
                        hu.default)(["L", "R"], au)
                    }
                    )) === _u ? au.set(cu, _u).set(Du, _u) : au.set(cu, du).set(Du, du) : au
                }
                ), au)
            }
            ), (function(au) {
                return _u.reduce((function(au, su) {
                    var fu = su.get("open")
                      , cu = su.get("close")
                      , Du = (0,
                    hu.default)(["L", "R"], au.get(fu))
                      , pu = (0,
                    hu.default)(["L", "R"], au.get(cu));
                    return (0,
                    lu.default)((function(au) {
                        return "NSM" === du.get(fu + 1) && Du ? au.set(fu + 1, au.get(fu)) : au
                    }
                    ), (function(au) {
                        return "NSM" === du.get(cu + 1) && pu ? au.set(cu + 1, au.get(cu)) : au
                    }
                    ))(au)
                }
                ), au)
            }
            ))()
        }
    }
    , function(au, su, fu) {
        "use strict";
        function r(au) {
            return au && au.__esModule ? au : {
                default: au
            }
        }
        Object.defineProperty(su, "__esModule", {
            value: !0
        });
        var cu = r(fu(6))
          , Du = (r(fu(2)),
        fu(3))
          , lu = r((fu(0),
        fu(13)))
          , hu = r(fu(14))
          , pu = r(fu(15));
        su.default = function n(au, su) {
            var fu = new Du.BracketPairState;
            return au.reduce((function(au, su, fu) {
                if (!0 === au.get("stackoverflow"))
                    return au;
                var du = au.get("stack");
                if (lu.default.has(su))
                    return 63 == du.size ? au.set("stackoverflow", !0) : au.set("stack", du.push(new Du.BracketPairStackEntry({
                        point: pu.default.get(su),
                        position: fu
                    })));
                if (hu.default.has(su) && du.size > 0) {
                    var _u = du.findKey((function(au) {
                        return au.get("point") === su
                    }
                    ));
                    if ((0,
                    cu.default)(_u))
                        return au;
                    var vu = du.getIn([_u, "position"]);
                    return au.set("stack", du.slice(_u + 1)).update("pairings", (function(au) {
                        return au.push(new Du.Pairing({
                            open: vu,
                            close: fu
                        }))
                    }
                    ))
                }
                return au
            }
            ), fu).get("pairings").sort((function(au, su) {
                return au.get("open") - su.get("open")
            }
            ))
        }
    }
    , function(au, su, fu) {
        "use strict";
        Object.defineProperty(su, "__esModule", {
            value: !0
        });
        var cu = fu(0);
        su.default = function r(au, su, fu, Du, lu) {
            var hu = lu % 2 == 0 ? "L" : "R";
            return au.map((function(au, su) {
                return (0,
                cu.isNI)(au) ? hu : au
            }
            ))
        }
    }
    , function(au, su, fu) {
        "use strict";
        Object.defineProperty(su, "__esModule", {
            value: !0
        });
        var n = function(au, su) {
            if (Array.isArray(au))
                return au;
            if (Symbol.iterator in Object(au))
                return function t(au, su) {
                    var fu = []
                      , cu = !0
                      , Du = !1
                      , lu = void 0;
                    try {
                        for (var hu, pu = au[Symbol.iterator](); !(cu = (hu = pu.next()).done) && (fu.push(hu.value),
                        !su || fu.length !== su); cu = !0)
                            ;
                    } catch (au) {
                        Du = !0,
                        lu = au
                    } finally {
                        try {
                            !cu && pu.return && pu.return()
                        } finally {
                            if (Du)
                                throw lu
                        }
                    }
                    return fu
                }(au, su);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
          , cu = function(au) {
            return au && au.__esModule ? au : {
                default: au
            }
        }(fu(2))
          , a = function(au) {
            return (0,
            cu.default)(["WS", "FSI", "LRI", "RLI", "PDI"], au)
        };
        su.default = function r(au, su, fu) {
            return au.zip(su).map((function(su, Du) {
                var lu = n(su, 2)
                  , hu = lu[0]
                  , pu = lu[1];
                if ((0,
                cu.default)(["S", "B"], hu))
                    return fu;
                if (!a(hu))
                    return pu;
                var du = au.slice(Du).push("<EOL>").skipWhile(a).first();
                return (0,
                cu.default)(["<EOL>", "S", "B"], du) ? fu : pu
            }
            ))
        }
    }
    , function(au, su, fu) {
        "use strict";
        function n(au, su) {
            var fu = i(su, 0).groupBy((function(au) {
                return au.get("level")
            }
            ))
              , lu = fu.keySeq().max();
            if (!(0,
            Du.default)(lu) || lu < 0)
                return au;
            if (0 === lu)
                return au;
            var hu = fu.get(lu);
            return n(hu.reduce((function(au, su) {
                var fu = su.toJS()
                  , cu = fu.from
                  , Du = fu.to
                  , lu = au.slice(cu, Du).reverse();
                return c(au, cu, Du, lu)
            }
            ), au), hu.reduce((function(au, su) {
                var fu = su.toJS()
                  , Du = fu.from
                  , hu = fu.to
                  , pu = (0,
                cu.List)((0,
                cu.Range)(0, hu - Du)).map((function(au) {
                    return lu - 1
                }
                ));
                return c(au, Du, hu, pu)
            }
            ), su))
        }
        function i(au, su) {
            var fu = au.size;
            if (0 === fu)
                return cu.List.of();
            var Du = au.first()
              , hu = au.findKey((function(au) {
                return au != Du
            }
            ))
              , pu = void 0 === hu ? fu : hu
              , du = new lu({
                level: Du,
                from: su,
                to: su + pu
            });
            return cu.List.of(du).concat(i(au.slice(pu), su + pu))
        }
        Object.defineProperty(su, "__esModule", {
            value: !0
        }),
        su.reorderPermutation = void 0;
        var cu = fu(1)
          , Du = function(au) {
            return au && au.__esModule ? au : {
                default: au
            }
        }(fu(49))
          , lu = (0,
        cu.Record)({
            level: -1,
            from: 0,
            to: 0
        }, "ReorderPair")
          , c = function(au, su, fu, cu) {
            var Du = au.slice(0, su)
              , lu = au.slice(fu);
            return Du.concat(cu).concat(lu)
        };
        su.reorderPermutation = function r(au) {
            var su = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
              , fu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "x"
              , Du = (0,
            cu.List)((0,
            cu.Range)(0, au.size)).map((function(su) {
                return (0,
                cu.Map)({
                    strip: au.get(su) === fu,
                    index: su
                })
            }
            )).filter((function(au) {
                return !1 === au.get("strip")
            }
            )).map((function(au) {
                return au.get("index")
            }
            ))
              , lu = au.filter((function(au) {
                return au != fu
            }
            ))
              , hu = n(Du, lu)
              , pu = (0,
            cu.Record)({
                remaining: (0,
                cu.List)(),
                result: (0,
                cu.List)()
            }, "Reduction")
              , du = new pu({
                remaining: hu,
                result: (0,
                cu.List)()
            })
              , _u = (0,
            cu.List)((0,
            cu.Range)(0, au.size)).reduce((function(su, cu) {
                if (au.get(cu) == fu) {
                    var Du = su.get("result").size;
                    return su.setIn(["result", cu], Du)
                }
                var lu = su.get("remaining");
                return su.setIn(["result", cu], lu.first()).set("remaining", lu.shift())
            }
            ), du).get("result");
            return su ? hu : _u
        }
        ,
        su.default = n
    }
    , function(au, su) {
        var fu = "[object Number]"
          , cu = Object.prototype.toString;
        au.exports = function r(au) {
            return "number" == typeof au || function u(au) {
                return !!au && "object" == typeof au
            }(au) && cu.call(au) == fu
        }
    }
    , function(au, su, fu) {
        (function(su) {
            !function(su) {
                au.exports = su()
            }((function() {
                return function t(au, su, fu) {
                    function i(Du, lu) {
                        if (!su[Du]) {
                            if (!au[Du]) {
                                if (cu)
                                    return cu(Du, !0);
                                var hu = new Error("Cannot find module '" + Du + "'");
                                throw hu.code = "MODULE_NOT_FOUND",
                                hu
                            }
                            var pu = su[Du] = {
                                exports: {}
                            };
                            au[Du][0].call(pu.exports, (function(su) {
                                return i(au[Du][1][su] || su)
                            }
                            ), pu, pu.exports, t, au, su, fu)
                        }
                        return su[Du].exports
                    }
                    for (var cu = !1, Du = 0; Du < fu.length; Du++)
                        i(fu[Du]);
                    return i
                }({
                    1: [function(au, fu, cu) {
                        (function(au) {
                            !function(su) {
                                function i(au) {
                                    throw new RangeError(bu[au])
                                }
                                function o(au, su) {
                                    for (var fu = au.length, cu = []; fu--; )
                                        cu[fu] = su(au[fu]);
                                    return cu
                                }
                                function a(au, su) {
                                    var fu = au.split("@")
                                      , cu = "";
                                    return fu.length > 1 && (cu = fu[0] + "@",
                                    au = fu[1]),
                                    cu + o((au = au.replace(wu, ".")).split("."), su).join(".")
                                }
                                function s(au) {
                                    for (var su, fu, cu = [], Du = 0, lu = au.length; Du < lu; )
                                        (su = au.charCodeAt(Du++)) >= 55296 && su <= 56319 && Du < lu ? 56320 == (64512 & (fu = au.charCodeAt(Du++))) ? cu.push(((1023 & su) << 10) + (1023 & fu) + 65536) : (cu.push(su),
                                        Du--) : cu.push(su);
                                    return cu
                                }
                                function f(au) {
                                    return o(au, (function(au) {
                                        var su = "";
                                        return au > 65535 && (su += Lu((au -= 65536) >>> 10 & 1023 | 55296),
                                        au = 56320 | 1023 & au),
                                        su + Lu(au)
                                    }
                                    )).join("")
                                }
                                function c(au) {
                                    return au - 48 < 10 ? au - 22 : au - 65 < 26 ? au - 65 : au - 97 < 26 ? au - 97 : vu
                                }
                                function D(au, su) {
                                    return au + 22 + 75 * (au < 26) - ((0 != su) << 5)
                                }
                                function l(au, su, fu) {
                                    var cu = 0;
                                    for (au = fu ? xu(au / Au) : au >> 1,
                                    au += xu(au / su); au > Iu * Eu >> 1; cu += vu)
                                        au = xu(au / Iu);
                                    return xu(cu + (Iu + 1) * au / (au + Cu))
                                }
                                function h(au) {
                                    var su, fu, cu, Du, lu, hu, pu, du, Cu, Au, mu = [], Su = au.length, wu = 0, bu = Bu, Iu = yu;
                                    for ((fu = au.lastIndexOf(gu)) < 0 && (fu = 0),
                                    cu = 0; cu < fu; ++cu)
                                        au.charCodeAt(cu) >= 128 && i("not-basic"),
                                        mu.push(au.charCodeAt(cu));
                                    for (Du = fu > 0 ? fu + 1 : 0; Du < Su; ) {
                                        for (lu = wu,
                                        hu = 1,
                                        pu = vu; Du >= Su && i("invalid-input"),
                                        ((du = c(au.charCodeAt(Du++))) >= vu || du > xu((_u - wu) / hu)) && i("overflow"),
                                        wu += du * hu,
                                        !(du < (Cu = pu <= Iu ? Fu : pu >= Iu + Eu ? Eu : pu - Iu)); pu += vu)
                                            hu > xu(_u / (Au = vu - Cu)) && i("overflow"),
                                            hu *= Au;
                                        Iu = l(wu - lu, su = mu.length + 1, 0 == lu),
                                        xu(wu / su) > _u - bu && i("overflow"),
                                        bu += xu(wu / su),
                                        wu %= su,
                                        mu.splice(wu++, 0, bu)
                                    }
                                    return f(mu)
                                }
                                function p(au) {
                                    var su, fu, cu, Du, lu, hu, pu, du, Cu, Au, mu, Su, wu, bu, Iu, Mu = [];
                                    for (Su = (au = s(au)).length,
                                    su = Bu,
                                    fu = 0,
                                    lu = yu,
                                    hu = 0; hu < Su; ++hu)
                                        (mu = au[hu]) < 128 && Mu.push(Lu(mu));
                                    for (cu = Du = Mu.length,
                                    Du && Mu.push(gu); cu < Su; ) {
                                        for (pu = _u,
                                        hu = 0; hu < Su; ++hu)
                                            (mu = au[hu]) >= su && mu < pu && (pu = mu);
                                        for (pu - su > xu((_u - fu) / (wu = cu + 1)) && i("overflow"),
                                        fu += (pu - su) * wu,
                                        su = pu,
                                        hu = 0; hu < Su; ++hu)
                                            if ((mu = au[hu]) < su && ++fu > _u && i("overflow"),
                                            mu == su) {
                                                for (du = fu,
                                                Cu = vu; !(du < (Au = Cu <= lu ? Fu : Cu >= lu + Eu ? Eu : Cu - lu)); Cu += vu)
                                                    Iu = du - Au,
                                                    bu = vu - Au,
                                                    Mu.push(Lu(D(Au + Iu % bu, 0))),
                                                    du = xu(Iu / bu);
                                                Mu.push(Lu(D(du, 0))),
                                                lu = l(fu, wu, cu == Du),
                                                fu = 0,
                                                ++cu
                                            }
                                        ++fu,
                                        ++su
                                    }
                                    return Mu.join("")
                                }
                                var Du = "object" == typeof cu && cu && !cu.nodeType && cu
                                  , lu = "object" == typeof fu && fu && !fu.nodeType && fu
                                  , hu = "object" == typeof au && au;
                                hu.global !== hu && hu.window !== hu && hu.self !== hu || (su = hu);
                                var pu, du, _u = 2147483647, vu = 36, Fu = 1, Eu = 26, Cu = 38, Au = 700, yu = 72, Bu = 128, gu = "-", mu = /^xn--/, Su = /[^\x20-\x7E]/, wu = /[\x2E\u3002\uFF0E\uFF61]/g, bu = {
                                    overflow: "Overflow: input needs wider integers to process",
                                    "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                                    "invalid-input": "Invalid input"
                                }, Iu = vu - Fu, xu = Math.floor, Lu = String.fromCharCode;
                                if (pu = {
                                    version: "1.4.1",
                                    ucs2: {
                                        decode: s,
                                        encode: f
                                    },
                                    decode: h,
                                    encode: p,
                                    toASCII: function _(au) {
                                        return a(au, (function(au) {
                                            return Su.test(au) ? "xn--" + p(au) : au
                                        }
                                        ))
                                    },
                                    toUnicode: function d(au) {
                                        return a(au, (function(au) {
                                            return mu.test(au) ? h(au.slice(4).toLowerCase()) : au
                                        }
                                        ))
                                    }
                                },
                                Du && lu)
                                    if (fu.exports == Du)
                                        lu.exports = pu;
                                    else
                                        for (du in pu)
                                            pu.hasOwnProperty(du) && (Du[du] = pu[du]);
                                else
                                    su.punycode = pu
                            }(this)
                        }
                        ).call(this, void 0 !== su ? su : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                    }
                    , {}],
                    2: [function(au, su, fu) {
                        su.exports = /[\u0608\u060B\u060D\u061B\u061C\u061E-\u064A\u066D-\u066F\u0671-\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u070D\u070F\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u08A0-\u08B4\u08B6-\u08BD\uFB50-\uFBC1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFC\uFE70-\uFE74\uFE76-\uFEFC]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]/
                    }
                    , {}],
                    3: [function(au, su, fu) {
                        su.exports = /[\u0600-\u0605\u0660-\u0669\u066B\u066C\u06DD\u08E2]|\uD803[\uDE60-\uDE7E]/
                    }
                    , {}],
                    4: [function(au, su, fu) {
                        su.exports = /[\0-\x08\x0E-\x1B\x7F-\x84\x86-\x9F\xAD\u180E\u200B-\u200D\u2060-\u2064\u206A-\u206F\uFEFF]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/
                    }
                    , {}],
                    5: [function(au, su, fu) {
                        su.exports = /[,\.\/:\xA0\u060C\u202F\u2044\uFE50\uFE52\uFE55\uFF0C\uFF0E\uFF0F\uFF1A]/
                    }
                    , {}],
                    6: [function(au, su, fu) {
                        su.exports = /[0-9\xB2\xB3\xB9\u06F0-\u06F9\u2070\u2074-\u2079\u2080-\u2089\u2488-\u249B\uFF10-\uFF19]|\uD800[\uDEE1-\uDEFB]|\uD835[\uDFCE-\uDFFF]|\uD83C[\uDD00-\uDD0A]/
                    }
                    , {}],
                    7: [function(au, su, fu) {
                        su.exports = /[\+\-\u207A\u207B\u208A\u208B\u2212\uFB29\uFE62\uFE63\uFF0B\uFF0D]/
                    }
                    , {}],
                    8: [function(au, su, fu) {
                        su.exports = /[#-%\xA2-\xA5\xB0\xB1\u058F\u0609\u060A\u066A\u09F2\u09F3\u09FB\u0AF1\u0BF9\u0E3F\u17DB\u2030-\u2034\u20A0-\u20BE\u212E\u2213\uA838\uA839\uFE5F\uFE69\uFE6A\uFF03-\uFF05\uFFE0\uFFE1\uFFE5\uFFE6]/
                    }
                    , {}],
                    9: [function(au, su, fu) {
                        su.exports = /\u2068/
                    }
                    , {}],
                    10: [function(au, su, fu) {
                        su.exports = /[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02B8\u02BB-\u02C1\u02D0\u02D1\u02E0-\u02E4\u02EE\u0370-\u0373\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0482\u048A-\u052F\u0531-\u0556\u0559-\u055F\u0561-\u0587\u0589\u0903-\u0939\u093B\u093D-\u0940\u0949-\u094C\u094E-\u0950\u0958-\u0961\u0964-\u0980\u0982\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD-\u09C0\u09C7\u09C8\u09CB\u09CC\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09FA\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3E-\u0A40\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD-\u0AC0\u0AC9\u0ACB\u0ACC\u0AD0\u0AE0\u0AE1\u0AE6-\u0AF0\u0AF9\u0B02\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B3E\u0B40\u0B47\u0B48\u0B4B\u0B4C\u0B57\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE\u0BBF\u0BC1\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCC\u0BD0\u0BD7\u0BE6-\u0BF2\u0C01-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C41-\u0C44\u0C58-\u0C5A\u0C60\u0C61\u0C66-\u0C6F\u0C7F\u0C80\u0C82\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD-\u0CC4\u0CC6-\u0CC8\u0CCA\u0CCB\u0CD5\u0CD6\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D02\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D40\u0D46-\u0D48\u0D4A-\u0D4C\u0D4E\u0D4F\u0D54-\u0D61\u0D66-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCF-\u0DD1\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2-\u0DF4\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E4F-\u0E5B\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00-\u0F17\u0F1A-\u0F34\u0F36\u0F38\u0F3E-\u0F47\u0F49-\u0F6C\u0F7F\u0F85\u0F88-\u0F8C\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE-\u0FDA\u1000-\u102C\u1031\u1038\u103B\u103C\u103F-\u1057\u105A-\u105D\u1061-\u1070\u1075-\u1081\u1083\u1084\u1087-\u108C\u108E-\u109C\u109E-\u10C5\u10C7\u10CD\u10D0-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1360-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u167F\u1681-\u169A\u16A0-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1735\u1736\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17B6\u17BE-\u17C5\u17C7\u17C8\u17D4-\u17DA\u17DC\u17E0-\u17E9\u1810-\u1819\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1923-\u1926\u1929-\u192B\u1930\u1931\u1933-\u1938\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A19\u1A1A\u1A1E-\u1A55\u1A57\u1A61\u1A63\u1A64\u1A6D-\u1A72\u1A80-\u1A89\u1A90-\u1A99\u1AA0-\u1AAD\u1B04-\u1B33\u1B35\u1B3B\u1B3D-\u1B41\u1B43-\u1B4B\u1B50-\u1B6A\u1B74-\u1B7C\u1B82-\u1BA1\u1BA6\u1BA7\u1BAA\u1BAE-\u1BE5\u1BE7\u1BEA-\u1BEC\u1BEE\u1BF2\u1BF3\u1BFC-\u1C2B\u1C34\u1C35\u1C3B-\u1C49\u1C4D-\u1C88\u1CC0-\u1CC7\u1CD3\u1CE1\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200E\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u214F\u2160-\u2188\u2336-\u237A\u2395\u249C-\u24E9\u26AC\u2800-\u28FF\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D70\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u302E\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u3190-\u31BA\u31F0-\u321C\u3220-\u324F\u3260-\u327B\u327F-\u32B0\u32C0-\u32CB\u32D0-\u32FE\u3300-\u3376\u337B-\u33DD\u33E0-\u33FE\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA60C\uA610-\uA62B\uA640-\uA66E\uA680-\uA69D\uA6A0-\uA6EF\uA6F2-\uA6F7\uA722-\uA787\uA789-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA824\uA827\uA830-\uA837\uA840-\uA873\uA880-\uA8C3\uA8CE-\uA8D9\uA8F2-\uA8FD\uA900-\uA925\uA92E-\uA946\uA952\uA953\uA95F-\uA97C\uA983-\uA9B2\uA9B4\uA9B5\uA9BA\uA9BB\uA9BD-\uA9CD\uA9CF-\uA9D9\uA9DE-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA2F\uAA30\uAA33\uAA34\uAA40-\uAA42\uAA44-\uAA4B\uAA4D\uAA50-\uAA59\uAA5C-\uAA7B\uAA7D-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAAEB\uAAEE-\uAAF5\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB65\uAB70-\uABE4\uABE6\uABE7\uABE9-\uABEC\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uE000-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD00\uDD02\uDD07-\uDD33\uDD37-\uDD3F\uDD8D\uDD8E\uDDD0-\uDDFC\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF23\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDF9F-\uDFC3\uDFC8-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD6F\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD804[\uDC00\uDC02-\uDC37\uDC47-\uDC4D\uDC66-\uDC6F\uDC82-\uDCB2\uDCB7\uDCB8\uDCBB-\uDCC1\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD2C\uDD36-\uDD43\uDD50-\uDD72\uDD74-\uDD76\uDD82-\uDDB5\uDDBF-\uDDC9\uDDCD\uDDD0-\uDDDF\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2E\uDE32\uDE33\uDE35\uDE38-\uDE3D\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA9\uDEB0-\uDEDE\uDEE0-\uDEE2\uDEF0-\uDEF9\uDF02\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D-\uDF3F\uDF41-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63]|\uD805[\uDC00-\uDC37\uDC40\uDC41\uDC45\uDC47-\uDC59\uDC5B\uDC5D\uDC80-\uDCB2\uDCB9\uDCBB-\uDCBE\uDCC1\uDCC4-\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB1\uDDB8-\uDDBB\uDDBE\uDDC1-\uDDDB\uDE00-\uDE32\uDE3B\uDE3C\uDE3E\uDE41-\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEAC\uDEAE\uDEAF\uDEB6\uDEC0-\uDEC9\uDF00-\uDF19\uDF20\uDF21\uDF26\uDF30-\uDF3F]|\uD806[\uDCA0-\uDCF2\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2F\uDC3E-\uDC45\uDC50-\uDC6C\uDC70-\uDC8F\uDCA9\uDCB1\uDCB4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC70-\uDC74\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uDB80-\uDBBE\uDBC0-\uDBFE][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDE6E\uDE6F\uDED0-\uDEED\uDEF5\uDF00-\uDF2F\uDF37-\uDF45\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF93-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9C\uDC9F]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD66\uDD6A-\uDD72\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDE8\uDF60-\uDF71]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEDA\uDEDC-\uDF14\uDF16-\uDF4E\uDF50-\uDF88\uDF8A-\uDFC2\uDFC4-\uDFCB]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE8B]|\uD83C[\uDD10-\uDD2E\uDD30-\uDD69\uDD70-\uDDAC\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|[\uDBBF\uDBFF][\uDC00-\uDFFD]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/
                    }
                    , {}],
                    11: [function(au, su, fu) {
                        su.exports = /\u202A/
                    }
                    , {}],
                    12: [function(au, su, fu) {
                        su.exports = /\u2066/
                    }
                    , {}],
                    13: [function(au, su, fu) {
                        su.exports = /\u202D/
                    }
                    , {}],
                    14: [function(au, su, fu) {
                        su.exports = /[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D4-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09C1-\u09C4\u09CD\u09E2\u09E3\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0B01\u0B3C\u0B3F\u0B41-\u0B44\u0B4D\u0B56\u0B62\u0B63\u0B82\u0BC0\u0BCD\u0C00\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CCC\u0CCD\u0CE2\u0CE3\u0D01\u0D41-\u0D44\u0D4D\u0D62\u0D63\u0DCA\u0DD2-\u0DD4\u0DD6\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B03\u1B34\u1B36-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF5\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302D\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA8C4\uA8C5\uA8E0-\uA8F1\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD804[\uDC01\uDC38-\uDC46\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDCA-\uDDCC\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3C\uDF40\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDCB3-\uDCB8\uDCBA\uDCBF\uDCC0\uDCC2\uDCC3\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF8F-\uDF92]|\uD82F[\uDC9D\uDC9E]|\uD834[\uDD67-\uDD69\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uDB40[\uDD00-\uDDEF]/
                    }
                    , {}],
                    15: [function(au, su, fu) {
                        su.exports = /[!"&-\*;-@\[-`\{-~\xA1\xA6-\xA9\xAB\xAC\xAE\xAF\xB4\xB6-\xB8\xBB-\xBF\xD7\xF7\u02B9\u02BA\u02C2-\u02CF\u02D2-\u02DF\u02E5-\u02ED\u02EF-\u02FF\u0374\u0375\u037E\u0384\u0385\u0387\u03F6\u058A\u058D\u058E\u0606\u0607\u060E\u060F\u06DE\u06E9\u07F6-\u07F9\u0BF3-\u0BF8\u0BFA\u0C78-\u0C7E\u0F3A-\u0F3D\u1390-\u1399\u1400\u169B\u169C\u17F0-\u17F9\u1800-\u180A\u1940\u1944\u1945\u19DE-\u19FF\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2010-\u2027\u2035-\u2043\u2045-\u205E\u207C-\u207E\u208C-\u208E\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u213A\u213B\u2140-\u2144\u214A-\u214D\u2150-\u215F\u2189-\u218B\u2190-\u2211\u2214-\u2335\u237B-\u2394\u2396-\u23FE\u2400-\u2426\u2440-\u244A\u2460-\u2487\u24EA-\u26AB\u26AD-\u27FF\u2900-\u2B73\u2B76-\u2B95\u2B98-\u2BB9\u2BBD-\u2BC8\u2BCA-\u2BD1\u2BEC-\u2BEF\u2CE5-\u2CEA\u2CF9-\u2CFF\u2E00-\u2E44\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFB\u3001-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u303F\u309B\u309C\u30A0\u30FB\u31C0-\u31E3\u321D\u321E\u3250-\u325F\u327C-\u327E\u32B1-\u32BF\u32CC-\u32CF\u3377-\u337A\u33DE\u33DF\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA60D-\uA60F\uA673\uA67E\uA67F\uA700-\uA721\uA788\uA828-\uA82B\uA874-\uA877\uFD3E\uFD3F\uFDFD\uFE10-\uFE19\uFE30-\uFE4F\uFE51\uFE54\uFE56-\uFE5E\uFE60\uFE61\uFE64-\uFE66\uFE68\uFE6B\uFF01\uFF02\uFF06-\uFF0A\uFF1B-\uFF20\uFF3B-\uFF40\uFF5B-\uFF65\uFFE2-\uFFE4\uFFE8-\uFFEE\uFFF9-\uFFFD]|\uD800[\uDD01\uDD40-\uDD8C\uDD90-\uDD9B\uDDA0]|\uD802[\uDD1F\uDF39-\uDF3F]|\uD804[\uDC52-\uDC65]|\uD805[\uDE60-\uDE6C]|\uD834[\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEDB\uDF15\uDF4F\uDF89\uDFC3]|\uD83B[\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0B\uDD0C\uDD6A\uDD6B\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED2\uDEE0-\uDEEC\uDEF0-\uDEF6\uDF00-\uDF73\uDF80-\uDFD4]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDD10-\uDD1E\uDD20-\uDD27\uDD30\uDD33-\uDD3E\uDD40-\uDD4B\uDD50-\uDD5E\uDD80-\uDD91\uDDC0]/
                    }
                    , {}],
                    16: [function(au, su, fu) {
                        su.exports = /[\n\r\x1C-\x1E\x85\u2029]/
                    }
                    , {}],
                    17: [function(au, su, fu) {
                        su.exports = /\u202C/
                    }
                    , {}],
                    18: [function(au, su, fu) {
                        su.exports = /\u2069/
                    }
                    , {}],
                    19: [function(au, su, fu) {
                        su.exports = /[\u05BE\u05C0\u05C3\u05C6\u05D0-\u05EA\u05F0-\u05F4\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0830-\u083E\u0840-\u0858\u085E\u200F\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFB4F]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC57-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD3F\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE40-\uDE47\uDE50-\uDE58\uDE60-\uDE9F\uDEC0-\uDEE4\uDEEB-\uDEF6\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDF99-\uDF9C\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDCFF]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD50-\uDD59\uDD5E\uDD5F]/
                    }
                    , {}],
                    20: [function(au, su, fu) {
                        su.exports = /\u202B/
                    }
                    , {}],
                    21: [function(au, su, fu) {
                        su.exports = /\u2067/
                    }
                    , {}],
                    22: [function(au, su, fu) {
                        su.exports = /\u202E/
                    }
                    , {}],
                    23: [function(au, su, fu) {
                        su.exports = /[\t\x0B\x1F]/
                    }
                    , {}],
                    24: [function(au, su, fu) {
                        su.exports = /[\f \u1680\u2000-\u200A\u2028\u205F\u3000]/
                    }
                    , {}],
                    25: [function(au, su, fu) {
                        "use strict";
                        var cu = au("unicode-9.0.0/Bidi_Class/Arabic_Letter/regex")
                          , Du = au("unicode-9.0.0/Bidi_Class/Arabic_Number/regex")
                          , lu = au("unicode-9.0.0/Bidi_Class/Boundary_Neutral/regex")
                          , hu = au("unicode-9.0.0/Bidi_Class/Common_Separator/regex")
                          , pu = au("unicode-9.0.0/Bidi_Class/European_Number/regex")
                          , du = au("unicode-9.0.0/Bidi_Class/European_Separator/regex")
                          , _u = au("unicode-9.0.0/Bidi_Class/European_Terminator/regex")
                          , vu = au("unicode-9.0.0/Bidi_Class/First_Strong_Isolate/regex")
                          , Fu = au("unicode-9.0.0/Bidi_Class/Left_To_Right/regex")
                          , Eu = au("unicode-9.0.0/Bidi_Class/Left_To_Right_Embedding/regex")
                          , Cu = au("unicode-9.0.0/Bidi_Class/Left_To_Right_Isolate/regex")
                          , Au = au("unicode-9.0.0/Bidi_Class/Left_To_Right_Override/regex")
                          , yu = au("unicode-9.0.0/Bidi_Class/Nonspacing_Mark/regex")
                          , Bu = au("unicode-9.0.0/Bidi_Class/Other_Neutral/regex")
                          , gu = au("unicode-9.0.0/Bidi_Class/Paragraph_Separator/regex")
                          , mu = au("unicode-9.0.0/Bidi_Class/Pop_Directional_Format/regex")
                          , Su = au("unicode-9.0.0/Bidi_Class/Pop_Directional_Isolate/regex")
                          , wu = au("unicode-9.0.0/Bidi_Class/Right_To_Left/regex")
                          , bu = au("unicode-9.0.0/Bidi_Class/Right_To_Left_Embedding/regex")
                          , Iu = au("unicode-9.0.0/Bidi_Class/Right_To_Left_Isolate/regex")
                          , xu = au("unicode-9.0.0/Bidi_Class/Right_To_Left_Override/regex")
                          , Lu = au("unicode-9.0.0/Bidi_Class/Segment_Separator/regex")
                          , Mu = au("unicode-9.0.0/Bidi_Class/White_Space/regex")
                          , zu = au("punycode")
                          , Ou = {
                            AL: cu,
                            AN: Du,
                            BN: lu,
                            CS: hu,
                            EN: pu,
                            ES: du,
                            ET: _u,
                            FSI: vu,
                            L: Fu,
                            LRE: Eu,
                            LRI: Cu,
                            LRO: Au,
                            NSM: yu,
                            ON: Bu,
                            B: gu,
                            PDF: mu,
                            PDI: Su,
                            R: wu,
                            RLE: bu,
                            RLI: Iu,
                            RLO: xu,
                            S: Lu,
                            WS: Mu
                        };
                        su.exports = function r(au) {
                            var su, fu = zu.ucs2.encode([au]);
                            for (su in Ou)
                                if (!0 === Ou[su].test(fu))
                                    return su
                        }
                    }
                    , {
                        punycode: 1,
                        "unicode-9.0.0/Bidi_Class/Arabic_Letter/regex": 2,
                        "unicode-9.0.0/Bidi_Class/Arabic_Number/regex": 3,
                        "unicode-9.0.0/Bidi_Class/Boundary_Neutral/regex": 4,
                        "unicode-9.0.0/Bidi_Class/Common_Separator/regex": 5,
                        "unicode-9.0.0/Bidi_Class/European_Number/regex": 6,
                        "unicode-9.0.0/Bidi_Class/European_Separator/regex": 7,
                        "unicode-9.0.0/Bidi_Class/European_Terminator/regex": 8,
                        "unicode-9.0.0/Bidi_Class/First_Strong_Isolate/regex": 9,
                        "unicode-9.0.0/Bidi_Class/Left_To_Right/regex": 10,
                        "unicode-9.0.0/Bidi_Class/Left_To_Right_Embedding/regex": 11,
                        "unicode-9.0.0/Bidi_Class/Left_To_Right_Isolate/regex": 12,
                        "unicode-9.0.0/Bidi_Class/Left_To_Right_Override/regex": 13,
                        "unicode-9.0.0/Bidi_Class/Nonspacing_Mark/regex": 14,
                        "unicode-9.0.0/Bidi_Class/Other_Neutral/regex": 15,
                        "unicode-9.0.0/Bidi_Class/Paragraph_Separator/regex": 16,
                        "unicode-9.0.0/Bidi_Class/Pop_Directional_Format/regex": 17,
                        "unicode-9.0.0/Bidi_Class/Pop_Directional_Isolate/regex": 18,
                        "unicode-9.0.0/Bidi_Class/Right_To_Left/regex": 19,
                        "unicode-9.0.0/Bidi_Class/Right_To_Left_Embedding/regex": 20,
                        "unicode-9.0.0/Bidi_Class/Right_To_Left_Isolate/regex": 21,
                        "unicode-9.0.0/Bidi_Class/Right_To_Left_Override/regex": 22,
                        "unicode-9.0.0/Bidi_Class/Segment_Separator/regex": 23,
                        "unicode-9.0.0/Bidi_Class/White_Space/regex": 24
                    }]
                }, {}, [25])(25)
            }
            ))
        }
        ).call(su, fu(5))
    }
    , function(au, su, fu) {
        (function(au, cu) {
            var Du;
            !function(cu) {
                function o(au) {
                    throw new RangeError(mu[au])
                }
                function a(au, su) {
                    for (var fu = au.length, cu = []; fu--; )
                        cu[fu] = su(au[fu]);
                    return cu
                }
                function s(au, su) {
                    var fu = au.split("@")
                      , cu = "";
                    return fu.length > 1 && (cu = fu[0] + "@",
                    au = fu[1]),
                    cu + a((au = au.replace(gu, ".")).split("."), su).join(".")
                }
                function f(au) {
                    for (var su, fu, cu = [], Du = 0, lu = au.length; Du < lu; )
                        (su = au.charCodeAt(Du++)) >= 55296 && su <= 56319 && Du < lu ? 56320 == (64512 & (fu = au.charCodeAt(Du++))) ? cu.push(((1023 & su) << 10) + (1023 & fu) + 65536) : (cu.push(su),
                        Du--) : cu.push(su);
                    return cu
                }
                function c(au) {
                    return a(au, (function(au) {
                        var su = "";
                        return au > 65535 && (su += bu((au -= 65536) >>> 10 & 1023 | 55296),
                        au = 56320 | 1023 & au),
                        su + bu(au)
                    }
                    )).join("")
                }
                function D(au) {
                    return au - 48 < 10 ? au - 22 : au - 65 < 26 ? au - 65 : au - 97 < 26 ? au - 97 : pu
                }
                function l(au, su) {
                    return au + 22 + 75 * (au < 26) - ((0 != su) << 5)
                }
                function h(au, su, fu) {
                    var cu = 0;
                    for (au = fu ? wu(au / Fu) : au >> 1,
                    au += wu(au / su); au > Su * _u >> 1; cu += pu)
                        au = wu(au / Su);
                    return wu(cu + (Su + 1) * au / (au + vu))
                }
                function p(au) {
                    var su, fu, cu, Du, lu, vu, Fu, yu, Bu, gu, mu = [], Su = au.length, bu = 0, Iu = Cu, xu = Eu;
                    for ((fu = au.lastIndexOf(Au)) < 0 && (fu = 0),
                    cu = 0; cu < fu; ++cu)
                        au.charCodeAt(cu) >= 128 && o("not-basic"),
                        mu.push(au.charCodeAt(cu));
                    for (Du = fu > 0 ? fu + 1 : 0; Du < Su; ) {
                        for (lu = bu,
                        vu = 1,
                        Fu = pu; Du >= Su && o("invalid-input"),
                        ((yu = D(au.charCodeAt(Du++))) >= pu || yu > wu((hu - bu) / vu)) && o("overflow"),
                        bu += yu * vu,
                        !(yu < (Bu = Fu <= xu ? du : Fu >= xu + _u ? _u : Fu - xu)); Fu += pu)
                            vu > wu(hu / (gu = pu - Bu)) && o("overflow"),
                            vu *= gu;
                        xu = h(bu - lu, su = mu.length + 1, 0 == lu),
                        wu(bu / su) > hu - Iu && o("overflow"),
                        Iu += wu(bu / su),
                        bu %= su,
                        mu.splice(bu++, 0, Iu)
                    }
                    return c(mu)
                }
                function d(au) {
                    var su, fu, cu, Du, lu, vu, Fu, yu, Bu, gu, mu, Su, Iu, xu, Lu, Mu = [];
                    for (Su = (au = f(au)).length,
                    su = Cu,
                    fu = 0,
                    lu = Eu,
                    vu = 0; vu < Su; ++vu)
                        (mu = au[vu]) < 128 && Mu.push(bu(mu));
                    for (cu = Du = Mu.length,
                    Du && Mu.push(Au); cu < Su; ) {
                        for (Fu = hu,
                        vu = 0; vu < Su; ++vu)
                            (mu = au[vu]) >= su && mu < Fu && (Fu = mu);
                        for (Fu - su > wu((hu - fu) / (Iu = cu + 1)) && o("overflow"),
                        fu += (Fu - su) * Iu,
                        su = Fu,
                        vu = 0; vu < Su; ++vu)
                            if ((mu = au[vu]) < su && ++fu > hu && o("overflow"),
                            mu == su) {
                                for (yu = fu,
                                Bu = pu; !(yu < (gu = Bu <= lu ? du : Bu >= lu + _u ? _u : Bu - lu)); Bu += pu)
                                    Lu = yu - gu,
                                    xu = pu - gu,
                                    Mu.push(bu(l(gu + Lu % xu, 0))),
                                    yu = wu(Lu / xu);
                                Mu.push(bu(l(yu, 0))),
                                lu = h(fu, Iu, cu == Du),
                                fu = 0,
                                ++cu
                            }
                        ++fu,
                        ++su
                    }
                    return Mu.join("")
                }
                "object" == typeof su && su && su.nodeType,
                "object" == typeof au && au && au.nodeType;
                var lu, hu = 2147483647, pu = 36, du = 1, _u = 26, vu = 38, Fu = 700, Eu = 72, Cu = 128, Au = "-", yu = /^xn--/, Bu = /[^\x20-\x7E]/, gu = /[\x2E\u3002\uFF0E\uFF61]/g, mu = {
                    overflow: "Overflow: input needs wider integers to process",
                    "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                    "invalid-input": "Invalid input"
                }, Su = pu - du, wu = Math.floor, bu = String.fromCharCode;
                lu = {
                    version: "1.4.1",
                    ucs2: {
                        decode: f,
                        encode: c
                    },
                    decode: p,
                    encode: d,
                    toASCII: function v(au) {
                        return s(au, (function(au) {
                            return Bu.test(au) ? "xn--" + d(au) : au
                        }
                        ))
                    },
                    toUnicode: function _(au) {
                        return s(au, (function(au) {
                            return yu.test(au) ? p(au.slice(4).toLowerCase()) : au
                        }
                        ))
                    }
                },
                void 0 !== (Du = function() {
                    return lu
                }
                .call(su, fu, su, au)) && (au.exports = Du)
            }()
        }
        ).call(su, fu(52)(au), fu(5))
    }
    , function(au, su) {
        au.exports = function(au) {
            return au.webpackPolyfill || (au.deprecate = function() {}
            ,
            au.paths = [],
            au.children || (au.children = []),
            Object.defineProperty(au, "loaded", {
                enumerable: !0,
                get: function() {
                    return au.l
                }
            }),
            Object.defineProperty(au, "id", {
                enumerable: !0,
                get: function() {
                    return au.i
                }
            }),
            au.webpackPolyfill = 1),
            au
        }
    }
    , function(au, su, fu) {
        "use strict";
        Object.defineProperty(su, "__esModule", {
            value: !0
        });
        var cu = function(au) {
            return au && au.__esModule ? au : {
                default: au
            }
        }(fu(16));
        su.default = function r(au, su) {
            return au.map((function(au, fu) {
                var Du = cu.default.get(au)
                  , lu = void 0 !== Du
                  , hu = su.get(fu) % 2 == 1;
                return lu && hu ? Du.charCodeAt(0) : au
            }
            ))
        }
    }
    ])
}
));
var rtlReorder = function(e) {
    var r = e.map((function(e) {
        return e.codePointAt(0)
    }
    ))
      , t = UnicodeBidirectional.resolve(r, 0, !0)
      , i = UnicodeBidirectional.reorderPermutation(t)
      , n = 1 === t[0];
    return {
        rtl: n,
        mapping: n ? i.reverse() : i
    }
}
  , app = pc.Application.getApplication();
app.systems.element.registerUnicodeConverter(arabicConverter.convertArabic),
app.systems.element.registerRtlReorder(rtlReorder);
var FlagChange = pc.createScript("flagChange");
FlagChange.attributes.add("en", {
    type: "entity"
}),
FlagChange.attributes.add("es", {
    type: "entity"
}),
FlagChange.attributes.add("fr", {
    type: "entity"
}),
FlagChange.attributes.add("tr", {
    type: "entity"
}),
FlagChange.attributes.add("vt", {
    type: "entity"
}),
FlagChange.attributes.add("ph", {
    type: "entity"
}),
FlagChange.attributes.add("th", {
    type: "entity"
}),
FlagChange.attributes.add("id", {
    type: "entity"
}),
FlagChange.attributes.add("ch", {
    type: "entity"
}),
FlagChange.attributes.add("jp", {
    type: "entity"
}),
FlagChange.attributes.add("kor", {
    type: "entity"
}),
FlagChange.attributes.add("sa", {
    type: "entity"
}),
FlagChange.attributes.add("image", {
    type: "entity"
}),
FlagChange.attributes.add("cross", {
    type: "entity"
}),
FlagChange.attributes.add("play", {
    type: "entity"
}),
FlagChange.attributes.add("levels", {
    type: "entity"
}),
FlagChange.attributes.add("controls", {
    type: "entity"
}),
FlagChange.attributes.add("achievements", {
    type: "entity"
}),
FlagChange.attributes.add("settings", {
    type: "entity"
}),
FlagChange.prototype.initialize = function() {
    this.entity.button.on("click", this.onClick, this),
    this.cross.button.on("click", this.offClick, this)
}
,
FlagChange.prototype.onClick = function() {
    this.en.enabled = !0,
    this.es.enabled = !0,
    this.fr.enabled = !0,
    this.tr.enabled = !0,
    this.vt.enabled = !0,
    this.ph.enabled = !0,
    this.th.enabled = !0,
    this.id.enabled = !0,
    this.ch.enabled = !0,
    this.jp.enabled = !0,
    this.kor.enabled = !0,
    this.sa.enabled = !0,
    this.image.enabled = !0,
    this.play.enabled = !1,
    this.levels.enabled = !1,
    isMobile || (this.controls.enabled = !1),
    this.achievements.enabled = !1,
    this.settings.enabled = !1
}
,
FlagChange.prototype.offClick = function() {
    this.en.enabled = !1,
    this.es.enabled = !1,
    this.fr.enabled = !1,
    this.tr.enabled = !1,
    this.vt.enabled = !1,
    this.ph.enabled = !1,
    this.th.enabled = !1,
    this.id.enabled = !1,
    this.ch.enabled = !1,
    this.jp.enabled = !1,
    this.kor.enabled = !1,
    this.sa.enabled = !1,
    this.image.enabled = !1,
    this.play.enabled = !0,
    this.levels.enabled = !0,
    isMobile || (this.controls.enabled = !0),
    this.achievements.enabled = !0,
    this.settings.enabled = !0
}
;
var TilesFinale = pc.createScript("tilesFinale");
TilesFinale.attributes.add("box90", {
    type: "entity"
}),
TilesFinale.attributes.add("box91", {
    type: "entity"
}),
TilesFinale.attributes.add("box92", {
    type: "entity"
}),
TilesFinale.attributes.add("box93", {
    type: "entity"
}),
TilesFinale.attributes.add("box94", {
    type: "entity"
}),
TilesFinale.attributes.add("box95", {
    type: "entity"
}),
TilesFinale.attributes.add("box96", {
    type: "entity"
}),
TilesFinale.attributes.add("box97", {
    type: "entity"
}),
TilesFinale.attributes.add("box98", {
    type: "entity"
}),
TilesFinale.attributes.add("box99", {
    type: "entity"
}),
TilesFinale.attributes.add("box100", {
    type: "entity"
}),
TilesFinale.attributes.add("box101", {
    type: "entity"
}),
TilesFinale.attributes.add("box102", {
    type: "entity"
}),
TilesFinale.attributes.add("box103", {
    type: "entity"
}),
TilesFinale.attributes.add("box104", {
    type: "entity"
}),
TilesFinale.attributes.add("box105", {
    type: "entity"
}),
TilesFinale.prototype.initialize = function() {
    this.timer1 = 0,
    this.timer2 = 0,
    this.timer3 = 0,
    this.timer4 = 0,
    this.timer5 = 0,
    this.timer6 = 0,
    this.timer7 = 0,
    this.timer8 = 0,
    this.box90.collision.on("collisionstart", this.onTriggerEnter1, this),
    this.box92.collision.on("collisionstart", this.onTriggerEnter2, this),
    this.box94.collision.on("collisionstart", this.onTriggerEnter3, this),
    this.box96.collision.on("collisionstart", this.onTriggerEnter4, this),
    this.box98.collision.on("collisionstart", this.onTriggerEnter5, this),
    this.box100.collision.on("collisionstart", this.onTriggerEnter6, this),
    this.box102.collision.on("collisionstart", this.onTriggerEnter7, this),
    this.box104.collision.on("collisionstart", this.onTriggerEnter8, this)
}
,
TilesFinale.prototype.onTriggerEnter1 = function() {
    this.active1 = !0
}
,
TilesFinale.prototype.onTriggerEnter2 = function() {
    this.active2 = !0
}
,
TilesFinale.prototype.onTriggerEnter3 = function() {
    this.active3 = !0
}
,
TilesFinale.prototype.onTriggerEnter4 = function() {
    this.active4 = !0
}
,
TilesFinale.prototype.onTriggerEnter5 = function() {
    this.active5 = !0
}
,
TilesFinale.prototype.onTriggerEnter6 = function() {
    this.active6 = !0
}
,
TilesFinale.prototype.onTriggerEnter7 = function() {
    this.active7 = !0
}
,
TilesFinale.prototype.onTriggerEnter8 = function() {
    this.active8 = !0
}
,
TilesFinale.prototype.update = function(t) {
    this.active1 && (this.timer1 += t,
    this.timer1 > .2 && (this.box90.enabled = !1,
    this.box91.enabled = !1),
    this.timer1 > 2.5 && (this.timer1 = 0,
    this.active1 = !1,
    this.box90.enabled = !0,
    this.box91.enabled = !0)),
    this.active2 && (this.timer2 += t,
    this.timer2 > .2 && (this.box92.enabled = !1,
    this.box93.enabled = !1),
    this.timer2 > 2.5 && (this.timer2 = 0,
    this.active2 = !1,
    this.box92.enabled = !0,
    this.box93.enabled = !0)),
    this.active3 && (this.timer3 += t,
    this.timer3 > .2 && (this.box94.enabled = !1,
    this.box95.enabled = !1),
    this.timer3 > 2.5 && (this.timer3 = 0,
    this.active3 = !1,
    this.box94.enabled = !0,
    this.box95.enabled = !0)),
    this.active4 && (this.timer4 += t,
    this.timer4 > .2 && (this.box96.enabled = !1,
    this.box97.enabled = !1),
    this.timer4 > 2.5 && (this.timer4 = 0,
    this.active4 = !1,
    this.box96.enabled = !0,
    this.box97.enabled = !0)),
    this.active5 && (this.timer5 += t,
    this.timer5 > .2 && (this.box98.enabled = !1,
    this.box99.enabled = !1),
    this.timer5 > 2.5 && (this.timer5 = 0,
    this.active5 = !1,
    this.box98.enabled = !0,
    this.box99.enabled = !0)),
    this.active6 && (this.timer6 += t,
    this.timer6 > .5 && (this.box100.enabled = !1,
    this.box101.enabled = !1),
    this.timer6 > 2.5 && (this.timer6 = 0,
    this.active6 = !1,
    this.box100.enabled = !0,
    this.box101.enabled = !0)),
    this.active7 && (this.timer7 += t,
    this.timer7 > .2 && (this.box102.enabled = !1,
    this.box103.enabled = !1),
    this.timer7 > 2.5 && (this.timer7 = 0,
    this.active7 = !1,
    this.box102.enabled = !0,
    this.box103.enabled = !0)),
    this.active8 && (this.timer8 += t,
    this.timer8 > .2 && (this.box104.enabled = !1,
    this.box105.enabled = !1),
    this.timer8 > 2.5 && (this.timer8 = 0,
    this.active8 = !1,
    this.box104.enabled = !0,
    this.box105.enabled = !0))
}
;
var PlayerRespawnDemon = pc.createScript("playerRespawnDemon");
PlayerRespawnDemon.prototype.initialize = function() {
    this.velocity = new pc.Vec3,
    this.respawn = this.app.root.findByName("Respawn"),
    this.camera = this.app.root.findByName("Camera"),
    this.spawn = this.respawn.getPosition().clone(),
    this.entity.collision.on("triggerenter", this.onTriggerEnter, this)
}
,
PlayerRespawnDemon.prototype.onTriggerEnter = function(e) {
    "Player" == e.collision.entity.name && (e.rigidbody.teleport(this.spawn),
    e.rigidbody.linearVelocity = this.velocity.set(0, 0, 0),
    e.rigidbody.angularVelocity = new pc.Vec3(0,0,0),
    e.sound.slot(2).isPlaying || e.sound.play(2),
    this.camera.script.playerCamera.reset(),
    !0 === this.camera.script.orbitCamera.enabled && this.camera.script.orbitCamera.reset())
}
;
var ChangeSceneOnDemon = pc.createScript("changeSceneOnDemon");
ChangeSceneOnDemon.attributes.add("sceneName", {
    type: "string"
}),
ChangeSceneOnDemon.attributes.add("Level", {
    type: "string"
}),
ChangeSceneOnDemon.prototype.initialize = function() {
    this.entity.collision.on("triggerenter", this.onTriggerEnter, this),
    this.player = this.app.root.findByName("Player"),
    this.camera = this.app.root.findByName("Camera"),
    this.finish2 = this.app.root.findByName("Finish2"),
    this.time = this.app.root.findByName("Time"),
    this.player.sound.slot(7).isPlaying || this.player.sound.play(7)
}
,
ChangeSceneOnDemon.prototype.onTriggerEnter = function(e) {
    "Player" == e.collision.entity.name && (spodruns && (this.time.script.time.stopStopwatch(),
    this.time.element.color = pc.Color.GREEN),
    this.player.sound.slot(7).stop(),
    "Level45" === this.Level && (level45 = !0,
    spodruns && ((null === localStorage.getItem("1run") || localStorage.getItem("1run") > timeStr) && (localStorage.setItem("1run", timeStr),
    localStorage.setItem("times1", time)),
    time <= 9e4 && (ach3 = !0,
    localStorage.setItem("ach3", ach3))),
    ach1 = !0,
    localStorage.setItem("ach1", ach1)),
    this.player.sound.slot(6).isPlaying || this.player.sound.play(6),
    this.player.script.playerController.enabled = !1,
    this.camera.script.playerCamera.camOff(),
    this.player.collision.enabled = !1,
    this.player.script.pauseMenu.enabled = !1,
    isMobile && (this.camera.script.orbitCamera.enabled = !1,
    this.player.script.playerController2.enabled = !1),
    setTimeout(( () => {
        loadScene(this.sceneName, {
            hierarchy: !0,
            settings: !0
        })
    }
    ), 5e3))
}
;
var FadeOut2 = pc.createScript("fadeOut2");
FadeOut2.attributes.add("sceneName", {
    type: "string"
}),
FadeOut2.attributes.add("button", {
    type: "entity"
}),
FadeOut2.prototype.initialize = function() {
    this.value = .9,
    this.credits = this.app.root.findByName("Credits"),
    this.player = this.app.root.findByName("Player"),
    this.button.button.once("click", this.onClick, this)
}
,
FadeOut2.prototype.update = function(t) {
    this.value < 1 && (this.value += .09 * t,
    this.entity.element.opacity = this.value),
    this.value > 1 && (this.credits.enabled = !0,
    pause = !0,
    this.app.mouse.disablePointerLock())
}
,
FadeOut2.prototype.onClick = function() {
    loadScene(this.sceneName, {
        hierarchy: !0,
        settings: !0
    })
}
;
var ChangeSceneFinish = pc.createScript("changeSceneFinish");
ChangeSceneFinish.attributes.add("sceneName", {
    type: "string"
}),
ChangeSceneFinish.prototype.initialize = function() {
    this.entity.collision.on("triggerenter", this.onTriggerEnter, this),
    this.player = this.app.root.findByName("Player"),
    this.camera = this.app.root.findByName("Camera")
}
,
ChangeSceneFinish.prototype.onTriggerEnter = function(e) {
    "Player" == e.collision.entity.name && (this.player.sound.slot(3).isPlaying || this.player.sound.play(3),
    this.player.script.playerController.enabled = !1,
    this.camera.script.playerCamera.camOff(),
    this.player.collision.enabled = !1,
    this.player.script.pauseMenu.enabled = !1,
    isMobile && (this.camera.script.orbitCamera.enabled = !1,
    this.player.script.playerController2.enabled = !1),
    setTimeout(( () => {
        loadScene(this.sceneName, {
            hierarchy: !0,
            settings: !0
        })
    }
    ), 1e3))
}
;
var ShadowBlocks = pc.createScript("shadowBlocks");
ShadowBlocks.attributes.add("block1", {
    type: "entity"
}),
ShadowBlocks.attributes.add("block2", {
    type: "entity"
}),
ShadowBlocks.attributes.add("block3", {
    type: "entity"
}),
ShadowBlocks.attributes.add("block4", {
    type: "entity"
}),
ShadowBlocks.attributes.add("block5", {
    type: "entity"
}),
ShadowBlocks.attributes.add("block6", {
    type: "entity"
}),
ShadowBlocks.attributes.add("block7", {
    type: "entity"
}),
ShadowBlocks.attributes.add("block8", {
    type: "entity"
}),
ShadowBlocks.attributes.add("block9", {
    type: "entity"
}),
ShadowBlocks.attributes.add("block10", {
    type: "entity"
}),
ShadowBlocks.attributes.add("block11", {
    type: "entity"
}),
ShadowBlocks.attributes.add("block12", {
    type: "entity"
}),
ShadowBlocks.attributes.add("block13", {
    type: "entity"
}),
ShadowBlocks.attributes.add("block14", {
    type: "entity"
}),
ShadowBlocks.attributes.add("block15", {
    type: "entity"
}),
ShadowBlocks.attributes.add("block16", {
    type: "entity"
}),
ShadowBlocks.attributes.add("block17", {
    type: "entity"
}),
ShadowBlocks.attributes.add("block18", {
    type: "entity"
}),
ShadowBlocks.attributes.add("block19", {
    type: "entity"
}),
ShadowBlocks.attributes.add("block20", {
    type: "entity"
}),
ShadowBlocks.attributes.add("block21", {
    type: "entity"
}),
ShadowBlocks.attributes.add("block22", {
    type: "entity"
}),
ShadowBlocks.attributes.add("block23", {
    type: "entity"
}),
ShadowBlocks.attributes.add("block24", {
    type: "entity"
}),
ShadowBlocks.attributes.add("block25", {
    type: "entity"
}),
ShadowBlocks.attributes.add("block26", {
    type: "entity"
}),
ShadowBlocks.attributes.add("block27", {
    type: "entity"
}),
ShadowBlocks.attributes.add("block28", {
    type: "entity"
}),
ShadowBlocks.attributes.add("block29", {
    type: "entity"
}),
ShadowBlocks.attributes.add("block30", {
    type: "entity"
}),
ShadowBlocks.attributes.add("block31", {
    type: "entity"
}),
ShadowBlocks.attributes.add("block32", {
    type: "entity"
}),
ShadowBlocks.attributes.add("block33", {
    type: "entity"
}),
ShadowBlocks.attributes.add("block34", {
    type: "entity"
}),
ShadowBlocks.attributes.add("block35", {
    type: "entity"
}),
ShadowBlocks.attributes.add("block36", {
    type: "entity"
}),
ShadowBlocks.attributes.add("block37", {
    type: "entity"
}),
ShadowBlocks.attributes.add("block38", {
    type: "entity"
}),
ShadowBlocks.attributes.add("block39", {
    type: "entity"
}),
ShadowBlocks.attributes.add("block40", {
    type: "entity"
}),
ShadowBlocks.prototype.initialize = function() {
    let t = [this.block1, this.block2, this.block3, this.block4, this.block5, this.block6, this.block7, this.block8, this.block9, this.block10, this.block11, this.block12, this.block13, this.block14, this.block15, this.block16, this.block17, this.block18, this.block19, this.block20]
      , o = [this.block21, this.block22, this.block23, this.block24, this.block25, this.block26, this.block27, this.block28, this.block29, this.block30, this.block31, this.block32, this.block33, this.block34, this.block35, this.block36, this.block37, this.block38, this.block39, this.block40];
    if (isMobile)
        for (let t of o)
            t.enabled = !0;
    else
        for (let o of t)
            o.enabled = !0
}
;
var CancelSpod = pc.createScript("cancelSpod");
CancelSpod.prototype.initialize = function() {
    this.time = this.app.root.findByName("Time"),
    spodruns && (this.time.script.time.resetStopwatch(),
    spodruns = !1,
    this.time.enabled = !1)
}
;
var UtilsEnd = pc.createScript("utilsEnd");
UtilsEnd.attributes.add("right", {
    type: "entity"
}),
UtilsEnd.attributes.add("pivot", {
    type: "entity"
}),
UtilsEnd.attributes.add("font", {
    type: "entity"
}),
UtilsEnd.attributes.add("button", {
    type: "entity"
}),
UtilsEnd.prototype.initialize = function() {
    this.camera = this.app.root.findByName("Camera"),
    this.player = this.app.root.findByName("Player"),
    isMobile && (this.pivot.enabled = !0,
    this.right.enabled = !0,
    this.right.script.touchJoystick.enabled = !0,
    this.player.script.playerController.enabled = !1,
    this.camera.script.orbitCameraFollowEntity.enabled = !0,
    this.camera.script.orbitCameraTouchJoypadInput.enabled = !0,
    this.camera.script.orbitCamera.enabled = !0,
    this.font.element.fontSize = 45,
    this.button.element.fontSize = 45)
}
;
var UtilsTele = pc.createScript("utilsTele");
UtilsTele.prototype.initialize = function() {
    "false" === localStorage.getItem("sound") && (this.entity.sound.slot(6).isPlaying || this.entity.sound.slot(6).play())
}
;
var PlayClicks = pc.createScript("playClicks");
PlayClicks.attributes.add("play", {
    type: "entity"
}),
PlayClicks.attributes.add("continuer", {
    type: "entity"
}),
PlayClicks.prototype.initialize = function() {
    this.entity.button.on("click", this.onClick, this)
}
,
PlayClicks.prototype.onClick = function() {
    (!0 === level1 || localStorage.getItem("progress1")) && (this.play.enabled = !1,
    this.continuer.enabled = !0)
}
;
var SoundEnable = pc.createScript("soundEnable");
SoundEnable.attributes.add("enabledButton", {
    type: "entity"
}),
SoundEnable.attributes.add("disabledButton", {
    type: "entity"
}),
SoundEnable.prototype.initialize = function() {
    this.pause = this.app.root.findByName("Pause Menu"),
    "true" === localStorage.getItem("sound") ? this.pause.script.soundButton.onEnable() : "false" !== localStorage.getItem("sound") && null !== localStorage.getItem("sound") || this.pause.script.soundButton.onDisable(),
    this.enabledButton.enabled = !1,
    this.disabledButton.enabled = !1
}
;
var Four = pc.createScript("four");
Four.attributes.add("block1", {
    type: "entity"
}),
Four.attributes.add("block2", {
    type: "entity"
}),
Four.attributes.add("block3", {
    type: "entity"
}),
Four.attributes.add("block4", {
    type: "entity"
}),
Four.attributes.add("block5", {
    type: "entity"
}),
Four.attributes.add("block6", {
    type: "entity"
}),
Four.attributes.add("block7", {
    type: "entity"
}),
Four.attributes.add("block8", {
    type: "entity"
}),
Four.attributes.add("block9", {
    type: "entity"
}),
Four.attributes.add("line1", {
    type: "entity"
}),
Four.attributes.add("line2", {
    type: "entity"
}),
Four.attributes.add("line3", {
    type: "entity"
}),
Four.attributes.add("line4", {
    type: "entity"
}),
Four.attributes.add("line5", {
    type: "entity"
}),
Four.attributes.add("line6", {
    type: "entity"
}),
Four.attributes.add("line7", {
    type: "entity"
}),
Four.attributes.add("line8", {
    type: "entity"
}),
Four.attributes.add("line9", {
    type: "entity"
}),
Four.attributes.add("block44", {
    type: "entity"
}),
Four.attributes.add("block55", {
    type: "entity"
}),
Four.attributes.add("block66", {
    type: "entity"
}),
Four.attributes.add("block77", {
    type: "entity"
}),
Four.attributes.add("block88", {
    type: "entity"
}),
Four.attributes.add("block99", {
    type: "entity"
}),
Four.attributes.add("block100", {
    type: "entity"
}),
Four.attributes.add("block111", {
    type: "entity"
}),
Four.attributes.add("block222", {
    type: "entity"
}),
Four.attributes.add("line44", {
    type: "entity"
}),
Four.attributes.add("line55", {
    type: "entity"
}),
Four.attributes.add("line66", {
    type: "entity"
}),
Four.attributes.add("line77", {
    type: "entity"
}),
Four.attributes.add("line88", {
    type: "entity"
}),
Four.attributes.add("line99", {
    type: "entity"
}),
Four.attributes.add("line100", {
    type: "entity"
}),
Four.attributes.add("line111", {
    type: "entity"
}),
Four.attributes.add("line222", {
    type: "entity"
}),
Four.prototype.initialize = function() {
    isMobile && (this.block1.enabled = !1,
    this.block2.enabled = !1,
    this.block3.enabled = !1,
    this.block4.enabled = !1,
    this.block5.enabled = !1,
    this.block6.enabled = !1,
    this.block7.enabled = !1,
    this.block8.enabled = !1,
    this.block9.enabled = !1,
    this.line1.enabled = !1,
    this.line2.enabled = !1,
    this.line3.enabled = !1,
    this.line4.enabled = !1,
    this.line5.enabled = !1,
    this.line6.enabled = !1,
    this.line7.enabled = !1,
    this.line8.enabled = !1,
    this.line9.enabled = !1,
    this.block44.enabled = !0,
    this.block55.enabled = !0,
    this.block66.enabled = !0,
    this.block77.enabled = !0,
    this.block88.enabled = !0,
    this.block99.enabled = !0,
    this.block100.enabled = !0,
    this.block111.enabled = !0,
    this.block222.enabled = !0,
    this.line44.enabled = !0,
    this.line55.enabled = !0,
    this.line66.enabled = !0,
    this.line77.enabled = !0,
    this.line88.enabled = !0,
    this.line99.enabled = !0,
    this.line100.enabled = !0,
    this.line111.enabled = !0,
    this.line222.enabled = !0)
}
;
var Level1bubble = pc.createScript("level1bubble");
Level1bubble.attributes.add("text", {
    type: "entity"
}),
Level1bubble.prototype.initialize = function() {
    this.timer = 0,
    isMobile && (this.entity.script.level1bubble.enabled = !1)
}
,
Level1bubble.prototype.update = function(e) {
    this.timer += e,
    this.timer > 2 && (this.text.enabled = !0),
    this.timer > 6 && (this.text.enabled = !1,
    this.entity.script.level1bubble.enabled = !1),
    pause && (this.text.enabled = !1)
}
;
var ExitInterface = pc.createScript("exitInterface");
ExitInterface.prototype.initialize = function() {
    this.timer = 0
}
,
ExitInterface.prototype.update = function(t) {
    this.entity.enabled && (this.timer += t,
    this.timer > 1.5 && this.entity.destroy()),
    pause && this.entity.destroy()
}
;
var Level2bubble = pc.createScript("level2bubble");
Level2bubble.attributes.add("text", {
    type: "entity"
}),
Level2bubble.prototype.initialize = function() {
    this.timer = 0,
    isMobile && (this.entity.script.level2bubble.enabled = !1)
}
,
Level2bubble.prototype.update = function(e) {
    this.timer += e,
    this.timer > 4 && (this.text.enabled = !0),
    this.timer > 8 && (this.text.enabled = !1,
    this.entity.script.level2bubble.enabled = !1),
    pause && (this.text.enabled = !1)
}
;
