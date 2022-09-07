import { connect } from 'mongoose';


export async function run() {
  await connect('mongodb://challenge:challenge@churrasco.uk.to:27017/challenge?authSource=admin');
}
