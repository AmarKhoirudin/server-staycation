const router = require("express").Router();
const adminDashboard = require("../controllers/adminController");
const { upload, uploadMultiple } = require("../middlewares/multer");
const auth = require("../middlewares/auth");

router.get("/signin", adminDashboard.viewSignin);
router.post("/signin", adminDashboard.actionSignin);
router.use(auth);
router.get("/logout", adminDashboard.actionLogout);
router.get("/dashboard", adminDashboard.viewDashboard);
// End Point Category
router.get("/category", adminDashboard.viewCategory);
router.post("/category", adminDashboard.addCategory);
router.put("/category", adminDashboard.editCategory);
router.delete("/category/:id", adminDashboard.deleteCategory);
// End Point Bank
router.get("/bank", adminDashboard.viewBank);
router.post("/bank", upload, adminDashboard.addBank);
router.put("/bank", upload, adminDashboard.editBank);
router.delete("/bank/:id", adminDashboard.deleteBank);
// endpoint Item
router.get("/item", adminDashboard.viewItem);
router.post("/item", uploadMultiple, adminDashboard.addItem);
router.get("/item/show-image/:id", adminDashboard.showImageItem);
router.get("/item/:id", adminDashboard.showEditItem);
router.put("/item/:id", uploadMultiple, adminDashboard.editItem);
router.delete("/item/:id/delete", adminDashboard.deleteItem);

// endpoint Detail Item
router.get("/item/show-detail-item/:itemId", adminDashboard.viewDetailItem);
router.post("/item/add/feature", upload, adminDashboard.addFeature);
router.put("/item/update/feature", upload, adminDashboard.editFeature);
router.delete("/item/:itemId/feature/:id", adminDashboard.deleteFeature);

// endpoint Detail Activity
router.post("/item/add/activity", upload , adminDashboard.addActivity);
router.put("/item/update/activity", upload, adminDashboard.editActivity);
router.delete("/item/:itemId/activity/:id", adminDashboard.deleteActivity);

router.get("/booking", adminDashboard.viewBooking);
router.get("/booking/:id", adminDashboard.viewDetailBooking);
router.put("/booking/:id/confirmation", adminDashboard.actionConfirmation);
router.put("/booking/:id/reject", adminDashboard.actionReject);

module.exports = router;
