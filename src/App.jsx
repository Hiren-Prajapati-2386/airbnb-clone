import React, { useState } from 'react'
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ListingNav from './components/layout/ListingNav';
import ListingHeader from './components/listing/ListingHeader';
import PhotoGrid from './components/listing/PhotoGrid';

import HostSummary from './components/listing/HostSummary';
import HighlightsList from './components/listing/HighlightsList';
import DescriptionSection from './components/listing/DescriptionSection';
import WhereYouSleepSection from './components/listing/WhereYouSleepSection';
import AmenitiesSection from './components/listing/AmenitiesSection';
import CalendarSection from './components/listing/CalendarSection';
import ReviewsSection from './components/listing/ReviewsSection';
import LocationMap from './components/listing/LocationMap';
import HostProfileCard from './components/listing/HostProfileCard';
import ThingsToKnow from './components/listing/ThingsToKnow';
import MoreStaysNearby from './components/listing/MoreStaysNearby';
import AmenitiesModal from './components/overlays/AmenitiesModal';
import PhotoTour from './components/overlays/PhotoTour';
import Lightbox from './components/overlays/Lightbox';

import BookingCard from './components/booking/BookingCard';

function App() {
  const [isAmenitiesModalOpen, setIsAmenitiesModalOpen] = useState(false);
  const [isPhotoTourOpen, setIsPhotoTourOpen] = useState(false);
  const [initialTourPhotoUrl, setInitialTourPhotoUrl] = useState(null);
  const [lightboxState, setLightboxState] = useState({ isOpen: false, index: 0 });

  const openPhotoTour = (photo) => {
    setInitialTourPhotoUrl(photo?.url || null);
    setIsPhotoTourOpen(true);
  };

  const openLightbox = (index) => {
    setLightboxState({ isOpen: true, index });
  };

  const closeLightbox = () => {
    setLightboxState({ ...lightboxState, isOpen: false });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ListingNav />
      
      {/* Main Content */}
      <main className="flex-grow max-w-[1200px] mx-auto w-full px-4 sm:px-12 xl:px-10 pt-6 pb-6">
        
        {/* Phase 2: Hero Section */}
        <div id="photos" className="mb-13 scroll-mt-24">
          <ListingHeader />
          <PhotoGrid onOpenTour={openPhotoTour} />
        </div>

        {/* Phase 3 & 4: Two-column grid layout for the Listing Body */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_370px] gap-12 relative max-w-[1120px] mx-auto mt-12">
          
          {/* Left Column: Listing Details */}
          <div className="col-span-1">
            {/* Phase 3 Components */}
            <HostSummary />
            <HighlightsList />
            <DescriptionSection />
            <WhereYouSleepSection />
            <div id="amenities" className="scroll-mt-24">
              <AmenitiesSection onOpenModal={() => setIsAmenitiesModalOpen(true)} />
            </div>
            <CalendarSection />
          </div>
          
          {/* Right Rail: Sticky Booking Card */}
          <div className="hidden lg:block col-span-1 relative">
            <BookingCard />
          </div>
        </div>

        {/* Phase 5: Full Width Sections (Reviews, Location, Host) */}
        <div className="max-w-[1120px] mx-auto mt-6">
          <div id="reviews" className="scroll-mt-24">
            <ReviewsSection />
          </div>
          <div id="location" className="scroll-mt-24">
            <LocationMap />
          </div>
          <HostProfileCard />
          <ThingsToKnow />
          <MoreStaysNearby />
        </div>
      </main>

      {/* Modals */}
      <AmenitiesModal 
        isOpen={isAmenitiesModalOpen} 
        onClose={() => setIsAmenitiesModalOpen(false)} 
      />
      <PhotoTour
        isOpen={isPhotoTourOpen}
        onClose={() => {
          setIsPhotoTourOpen(false);
          setInitialTourPhotoUrl(null);
        }}
        onPhotoClick={openLightbox}
        initialPhotoUrl={initialTourPhotoUrl}
      />
      <Lightbox
        isOpen={lightboxState.isOpen}
        onClose={closeLightbox}
        initialIndex={lightboxState.index}
      />
    </div>
  );
}

export default App;