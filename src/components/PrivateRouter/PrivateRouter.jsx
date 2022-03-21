import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getRole } from '../../selectors';

export const PrivateRoute = ({ children }) => {
	const userRole = useSelector(getRole);
	return userRole === 'admin' ? children : <Navigate to='/courses' />;
};
