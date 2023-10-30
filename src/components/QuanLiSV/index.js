import styles from './QuanLiSV.module.scss';
import classNames from 'classnames/bind';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
const students = [
    {
        maSinhVien: 'SV001',
        hoTen: 'Nguyễn Văn A',
        ngaySinh: '01/01/1990',
        gioiTinh: 'Nam',
        gpa: 3.5,
    },
    {
        maSinhVien: 'SV002',
        hoTen: 'Trần Thị B',
        ngaySinh: '02/02/1991',
        gioiTinh: 'Nữ',
        gpa: 3.8,
    },
    {
        maSinhVien: 'SV001',
        hoTen: 'Nguyễn Văn A',
        ngaySinh: '01/01/1990',
        gioiTinh: 'Nam',
        gpa: 3.5,
    },
    {
        maSinhVien: 'SV002',
        hoTen: 'Trần Thị B',
        ngaySinh: '02/02/1991',
        gioiTinh: 'Nữ',
        gpa: 3.8,
    },
    {
        maSinhVien: 'SV001',
        hoTen: 'Nguyễn Văn A',
        ngaySinh: '01/01/1990',
        gioiTinh: 'Nam',
        gpa: 3.5,
    },
    {
        maSinhVien: 'SV002',
        hoTen: 'Trần Thị B',
        ngaySinh: '02/02/1991',
        gioiTinh: 'Nữ',
        gpa: 3.8,
    },
    // Add more mock students here
];
function QuanLiSV() {
    const [selectedClass, setSelectedClass] = useState('');

    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('title')}>Quản lí sinh viên</h1>
            <div className={cx('info-lop')}>
                <select className={cx('btn-chon')} value={selectedClass} onChange={(e) => setSelectedClass(e.target.value)}>
                    <option value="">Chọn lớp</option>
                    <option value="cntt1">CNTT1</option>
                    <option value="cntt2">CNTT2</option>
                </select>
                <Link className={cx('btn-them')} to="/add-student">Thêm sinh viên</Link>
            </div>
            <div className={cx('ds-sinhvien')}>
                <table>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Mã sinh viên</th>
                            <th>Họ tên</th>
                            <th>Ngày sinh</th>
                            <th>Giới tính</th>
                            <th>GPA</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{student.maSinhVien}</td>
                                <td>{student.hoTen}</td>
                                <td>{student.ngaySinh}</td>
                                <td>{student.gioiTinh}</td>
                                <td>{student.gpa}</td>
                                <td>
                                    <button>Chi tiết</button>
                                    <button className={cx('delete')}>Xóa</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default QuanLiSV;
