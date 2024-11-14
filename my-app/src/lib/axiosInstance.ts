'use client';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' },
});

export const httpClient = axiosInstance;