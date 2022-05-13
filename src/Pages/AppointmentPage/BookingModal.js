import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const BookingModal = ({ treatment, date, setTreatment }) => {
    const { name, slots } = treatment;
    const [user] = useAuthState(auth);

    const handleBooking = e => {
        e.preventDefault();
        const slot = e.target.slot.value;
        console.log(slot)
        setTreatment(null)
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary">Booking for {name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 justify-items-center mt-3 gap-4'>
                        <input type="text" disabled value={format(date, 'PP')} className="input input-bordered input-primary w-full max-w-xs" />
                        <select name='slot' className="select select-info w-full max-w-xs">
                            {
                                slots.map((slot, index) => <option
                                    key={index}
                                    value={slot}
                                >{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' disabled placeholder={user?.displayName || ''} className="input input-bordered input-primary w-full max-w-xs" />
                        <input type="email" name='email' disabled placeholder={user?.email || ''} className="input input-bordered input-primary w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered input-primary w-full max-w-xs" />
                        <input type="submit" value="submit" className="btn btn-secondary w-full max-w-xs" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default BookingModal;