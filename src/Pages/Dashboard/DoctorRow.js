import React from 'react';

const DoctorRow = ({ doctor, index, setDeletingDoctor }) => {
    const { name, specialty, img } = doctor;

    return (
        <tr>
            <th>{index + 1}</th>
            <td><div class="avatar">
                <div class="w-12 rounded">
                    <img src={img} alt={name} />
                </div>
            </div></td>
            <td>{name}</td>
            <td>{specialty}</td>
            <td>
                <label onClick={() => setDeletingDoctor(doctor)} for="delete-confirm-modal" class="btn btn-xs btn-error">delete</label>
            </td>
        </tr>
    );
};

export default DoctorRow;