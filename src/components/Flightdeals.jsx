import React from "react";
import { Calendar, TrendingUp, Bell } from "lucide-react";

const FlightDealTools = () => {
  return (
    <div className="bg-gray-900 text-gray-200 p-6 rounded-lg max-w-5xl">
      <h2 className="text-2xl font-semibold mb-4">
        Useful tools to help you find the best deals
      </h2>

      <div className="flex space-x-6">
        <div className="w-1/2 space-y-4">
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="flex items-start">
              <Calendar className="w-6 h-6 text-blue-400 mr-3 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">
                  Find the cheapest days to fly
                </h3>
                <p className="text-gray-400 text-sm">
                  The Date grid and Price graph make it easy to see the best
                  flight deals
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="flex items-start">
              <TrendingUp className="w-6 h-6 text-blue-400 mr-3 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">
                  See the whole picture with price insights
                </h3>
                <p className="text-gray-400 text-sm">
                  Price history and trend data show you when to book to get the
                  best price on your flight
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="flex items-start">
              <Bell className="w-6 h-6 text-blue-400 mr-3 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">
                  Track prices for a trip
                </h3>
                <p className="text-gray-400 text-sm">
                  Not ready to book yet? Observe price changes for a route or
                  flight and get notified when prices drop.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/2">
          <h3 className="text-xl font-semibold mb-2">
            Insightful tools help you choose your trip dates
          </h3>
          <p className="text-gray-400 mb-4">
            If your travel plans are flexible, use the form above to start
            searching for a specific trip. Then, play around with the Date grid
            and Price graph options on the Search page to find the cheapest days
            to get to your destination – and back again for round trips.
          </p>

          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <Calendar className="w-5 h-5 text-gray-400 mr-2" />
              <div className="h-2 w-24 bg-gray-700 rounded"></div>
            </div>
            <div className="grid grid-cols-7 gap-2">
              {[...Array(28)].map((_, i) => (
                <div
                  key={i}
                  className="w-8 h-8 flex items-center justify-center"
                >
                  {i === 6 || i === 17 || i === 22 ? (
                    <span className="text-green-400">★</span>
                  ) : i === 0 || i === 1 ? (
                    <span className="text-red-400">×</span>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightDealTools;
