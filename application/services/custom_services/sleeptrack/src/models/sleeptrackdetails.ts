
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const sleeptrackdetailsSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   sleeptrack_night: String
})

const sleeptrackdetailsModel = mongoose.model('sleeptrackdetails', sleeptrackdetailsSchema, 'sleeptrackdetails');
export default sleeptrackdetailsModel;
