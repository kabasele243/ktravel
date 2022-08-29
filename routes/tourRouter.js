import { Router } from "express";
import { getAllTours, 
    aliasTopTours, 
    getTourStats, 
    getMonthlyPlan, 
    getToursWithin, 
    getDistances, 
    getTour,
    createTour, 
    updateTour, 
    deleteTour,
    uploadTourImages,
    resizeTourImages } from '../resolvers/tourResolver.js';


const router = Router();
// router.use('/:tourId/reviews', reviewRouter);

router
  .route('/top-5-cheap')
  .get(aliasTopTours, getAllTours);

router.route('/tour-stats').get(getTourStats);
router
  .route('/monthly-plan/:year')
  .get(
    // authController.protect,
    // authController.restrictTo('admin', 'lead-guide', 'guide'),
    getMonthlyPlan
  );

router
  .route('/tours-within/:distance/center/:latlng/unit/:unit')
  .get(getToursWithin);


router.route('/distances/:latlng/unit/:unit')
  .get(getDistances);

router
  .route('/')
  .get(getAllTours)
  .post(
    // authController.protect,
    // authController.restrictTo('admin', 'lead-guide'),
    createTour
  );

router
  .route('/:id')
  .get(getTour)
  .patch(
    // authController.protect,
    // authController.restrictTo('admin', 'lead-guide'),
    uploadTourImages,
    resizeTourImages,
    updateTour
  )
  .delete(
    // authController.protect,
    // authController.restrictTo('admin', 'lead-guide'),
    deleteTour
  );




export default router;