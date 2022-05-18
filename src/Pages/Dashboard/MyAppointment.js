import React, { useEffect, useState } from 'react';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';

const MyAppointment = () => {
    const [appointments, setAppointments] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (user) {
            fetch(`https://doctors-portal-hero.herokuapp.com/booking?patient=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json()
                })
                .then(data => setAppointments(data))
        }
    }, [user, navigate])
    return (
        <div>
            <h3>my appointment page: {appointments.length}</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Treatment</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointments.map((ap, index) => <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{ap.patientName}</td>
                                <td>{ap.date}</td>
                                <td>{ap.slot}</td>
                                <td>{ap.treatment}</td>
                                <td>
                                    {(ap?.price && !ap?.paid) && <Link to={`/dashboard/payment/${ap._id}`}><button className='btn btn-xs btn-success'>pay</button></Link>}
                                    {(ap?.price && ap?.paid) && <span className=' text-success'>paid</span>}

                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;