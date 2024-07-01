'use client'
import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { Icons } from './Icons';

interface Event {
  eventName: string;
  cityName: string;
  date: string;
  weather: string;
  distanceKm: string;
  imgUrl: string;
}

interface ApiResponse {
  events: Event[];
  page: number;
  pageSize: number;
  totalEvents: number;
  totalPages: number;
}

const UpcomingEvents: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef<IntersectionObserver | null>(null);

  const lastEventElementRef = useCallback((node: HTMLDivElement | null) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPage(prevPage => prevPage + 1);
      }
    });
    if (node) observer.current.observe(node);
  }, [loading, hasMore]);

  const fetchEvents = async (pageNum: number) => {
    setLoading(true);
    try {
      const response = await fetch(`https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=${pageNum}&type=upcoming`);
      const data: ApiResponse = await response.json();
      
      if (data.events && Array.isArray(data.events)) {
        setEvents(prevEvents => [...prevEvents, ...data.events]);
        setHasMore(data.page < data.totalPages);
      } else {
        console.error('Unexpected data format:', data);
        setHasMore(false);
      }
    } catch (error) {
      console.error('Error fetching events:', error);
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents(page);
  }, [page]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {events.map((event, index) => (
          <div
            key={`${event.eventName}-${index}`}
            ref={index === events.length - 1 ? lastEventElementRef : null}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <div className="relative rounded-md border border-strokeColor-100 h-48">
              
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2 truncate">{event.eventName}</h2>
              <span className="text-sm text-strokeColor flex flex-row items-center gap-x-2 mb-2"><Icons.logo color= "#989090" className="h-1 w-2"/>{event.cityName}</span>
              <p className="text-sm text-strokeColor mb-1">{formatDate(event.date)}</p>
              <p className="text-sm text-strokeColor mb-1">{event.weather}</p>
              <p className="text-sm text-strokeColor">{parseFloat(event.distanceKm).toFixed(2)} km away</p>
            </div>
          </div>
        ))}
      </div>
      {loading && (
        <div className="flex justify-center items-center py-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
        </div>
      )}
    </div>
  );
};

export default UpcomingEvents;