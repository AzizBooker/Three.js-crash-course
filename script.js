var scene=new THREE.Scene()

var camera=new THREE.PerspectiveCamera(
    75,
    window.innerWidth/window.innerHeight,
    0.1,
    1000
)
camera.position.z=5
var renderer=new THREE.WebGLRenderer({antialias:true})

renderer.setClearColor('#e5e5e5');
renderer.setSize(window.innerWidth,window.innerHeight)

document.body.appendChild(renderer.domElement)

window.addEventListener('resize',()=>{
    renderer.setSize(window.innerWidth,window.innerHeight);
    camera.aspect(window.innerWidth/ window.innerHeight)

    camera.updateProjectMatrix();
})

var raycaster=new THREE.Raycaster()
var mouse = new THREE.Vector2();

//var geometry=new THREE.BoxGeometry(1,1,1)
var geometry=new THREE.SphereGeometry(1,120,120)
var material=new THREE.MeshLambertMaterial({color:0xFFCC00})
// var material=new THREE.MeshToonMaterial({color:0xFFCC00})
var mesh=new THREE.Mesh(geometry,material)

mesh.position.x=-2
mesh.position.y=-2


scene.add(mesh)

var light=new THREE.PointLight(0xFFFFFF,1,500)
light.position.set(10,0,25);
scene.add(light)

var render=function(){
    requestAnimationFrame(render)

    

    renderer.render(scene,camera)
}

render()


this.tl=new TimelineMax().delay(.3);
this.tl.to(this.mesh.position,.5,{x:1, ease:Expo.easeOut})
this.tl.to(this.mesh.rotation, .5, {y: 5,ease:Expo.easeOut})
this.tl.to(this.mesh.position,.5,{y:.5,ease:Expo.easeOut})
this.tl.to(this.mesh.scale ,1.5,{x:3,y:3,ease:Expo.easeOut})
this.tl.to(this.mesh.scale,.5,{x:2,y:2,ease:Expo.easeOut})
this.tl.to(this.mesh.scale,.5,{x:.5,y:.5})

Document.BODY.addEventListener("mousemove",onMouseMove())
