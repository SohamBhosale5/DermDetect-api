import service from '../service/uploadImageService.js'

function secureRouter(router){
  router.route("/uploadImage").post(uploadImage);
}
function uploadImage(req, res){
  let data = req.body();
  service.uploadImage(data).then((rows)=>{

  });
}