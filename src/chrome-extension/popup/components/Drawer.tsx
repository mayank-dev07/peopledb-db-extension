import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";

const PeopleDBDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  //   const openDrawer = () => {
  //     setIsOpen(true);
  //   };

  //   const closeDrawer = () => {
  //     setIsOpen(false);
  //   };

  {
    /* Global event listener for opening drawer */
  }
  {
    React.useEffect(() => {
      const handleOpenDrawer = () => {
        setIsOpen(true);
      };

      window.addEventListener("openPeopleDBDrawer", handleOpenDrawer);

      return () => {
        window.removeEventListener("openPeopleDBDrawer", handleOpenDrawer);
      };
    }, []);
  }

  return (
    <>
      <Modal
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        size="lg"
        scrollBehavior="inside"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                PeopleDB Insights
              </ModalHeader>
              <ModalBody>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">
                      Recent Connections
                    </h3>
                    <ul className="space-y-2">
                      <li className="border-b pb-1">
                        <div className="font-medium">John Doe</div>
                        <div className="text-sm text-gray-500">
                          Software Engineer
                        </div>
                      </li>
                      <li className="border-b pb-1">
                        <div className="font-medium">Jane Smith</div>
                        <div className="text-sm text-gray-500">
                          Product Manager
                        </div>
                      </li>
                      <li>
                        <div className="font-medium">Mike Johnson</div>
                        <div className="text-sm text-gray-500">
                          Sales Director
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-100 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">
                      Network Stats
                    </h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Total Connections</span>
                        <span className="font-bold">500</span>
                      </div>
                      <div className="flex justify-between">
                        <span>New Connections</span>
                        <span className="font-bold">25</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Profile Views</span>
                        <span className="font-bold">1,200</span>
                      </div>
                    </div>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default PeopleDBDrawer;
