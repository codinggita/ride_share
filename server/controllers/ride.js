import Ride from "../models/Ride.js"

export const getRide = async (req, res, next) => {
  try{
    const ride = await Ride.findById(req.params.id)
    res.status(200).json(ride._doc); 
  }catch(err){
    next(err);
  }
}

export const getAllRides = async (req, res, next) => {
  try{
    const ride = await Ride.find()
    res.status(200).json(ride); 
  }catch(err){
    next(err);
  }
}

export const createRide = async (req, res, next) =>{
  try{
    const newRide = new Ride({
      creator: req.user._id
    },
      req.body);
    await newRide.save()
    res.status(201).send(newRide)
  }catch(err){
    next(err);
  }
}

export const updateRide = async(req, res, next) => {
  try{
    const { creator, passengers, updatedAt, ...details } = req.body;
    const ride = await Ride.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          details,
          updatedAt: Date.now(),
      }},
      {new:true}    
    )
    res.status(200).json(ride)
  }catch(err){
    next(err)
  }
}

export const deleteRide = async(req, res, next) => {
  try{
    await Ride.findByIdAndDelete(req.params.id);
    res.status(200).send("ride has been deleted");
  }catch(err){
    next(err)
  }
}