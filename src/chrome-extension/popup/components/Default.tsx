"use client";

import { Card, CardBody, Button } from "@nextui-org/react";
import { ChevronRight, Grid } from "lucide-react";

interface DefaultProps {
  isLinkedIn: boolean;
}

export default function Default({ isLinkedIn }: DefaultProps) {
  const openPeopleDBDrawer = () => {
    if (typeof chrome !== "undefined" && chrome.tabs) {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs.length > 0 && tabs[0].id) {
          chrome.tabs.sendMessage(tabs[0].id, { action: "openDrawer" });
          window.close(); // Close the popup after sending the message
        }
      });
    }
  };

  return (
    <div className="bg-white w-[400px] h-[500px]">
      <div className="max-w-md mx-auto p-4">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <span className="font-semibold text-gray-800">PeopleDB</span>
          </div>
          <button className="text-gray-500">
            <span className="block w-6 h-0.5 bg-gray-500 mb-1.5"></span>
            <span className="block w-6 h-0.5 bg-gray-500"></span>
          </button>
        </div>

        {isLinkedIn ? (
          <div className="flex flex-col items-center justify-center h-[400px]">
            <Button
              color="primary"
              size="lg"
              className="bg-blue-600 text-white font-semibold"
              onPress={openPeopleDBDrawer}
            >
              Open PeopleDB Drawer
            </Button>
          </div>
        ) : (
          <>
            <h1 className="text-2xl font-bold text-gray-800 mb-6">
              Ways to work with PeopleDB
            </h1>

            <div className="mb-6">
              <h2 className="text-xs font-medium text-[#b89d7a] mb-2">
                PEOPLEDB PLATFORM
              </h2>
              <Card className="shadow-none border border-gray-200">
                <CardBody className="p-0">
                  <a
                    href="https://www.bittsy.net/"
                    target="_blank"
                    className="w-full flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50"
                  >
                    <div className="flex items-center">
                      <Grid className="h-5 w-5 text-blue-500 mr-3" />
                      <span className="font-medium text-gray-800">
                        Dashboard
                      </span>
                    </div>
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </a>
                </CardBody>
              </Card>
            </div>

            <div>
              <h2 className="text-xs font-medium text-[#b89d7a] mb-2">
                PEOPLEDB EXTENSION
              </h2>
              <Card className="shadow-none border border-gray-200">
                <CardBody className="p-0">
                  <div className="w-full flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50">
                    <div className="flex items-center">
                      <svg
                        className="h-5 w-5 text-blue-600 mr-3"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                      </svg>
                      <span className="font-medium text-gray-800">
                        Linkedin
                      </span>
                    </div>
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </div>
                </CardBody>
              </Card>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
