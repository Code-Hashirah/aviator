const router=require('express').Router();
const adminController=require('../../controller/admin/admin')


router.get('/admin-Dashboard',adminController.adminDash)

router.get('/admin-add-routes', adminController.adminAddRoute)

router.post('/admin-add-route',adminController.adminPostRoute)

router.get('/admin-our-route',adminController.ourRoutes)
router.get('/admin-update-routes/:id', adminController.updateRoutes)
 router.post('/admin-update-route',adminController.adminUpdateRoute)
  router.post('/admin-delete-route', adminController.deleteRoute)
router.get('/', adminController.indexPage)
module.exports=router;
