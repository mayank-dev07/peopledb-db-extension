import { Drawer as NextUIDrawer, Button } from "@nextui-org/react";
import { X } from "lucide-react";
import { useState, useEffect } from "react";

export const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpenDrawer = () => {
      setIsOpen(true);
    };

    window.addEventListener("openPeopleDBDrawer", handleOpenDrawer);

    return () => {
      window.removeEventListener("openPeopleDBDrawer", handleOpenDrawer);
    };
  }, []);

  return (
    <NextUIDrawer
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      placement="right"
      size="md"
      className="bg-white"
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-semibold text-gray-800">PeopleDB</h2>
          <Button
            isIconOnly
            variant="light"
            onPress={() => setIsOpen(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="flex-1 p-4 overflow-y-auto">
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-800 mb-2">
                Profile Information
              </h3>
              <p className="text-sm text-gray-600">
                View and manage profile information from LinkedIn
              </p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-800 mb-2">
                Contact Details
              </h3>
              <p className="text-sm text-gray-600">
                Access contact information and connection details
              </p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-800 mb-2">
                Activity History
              </h3>
              <p className="text-sm text-gray-600">
                Track your interactions and engagement history
              </p>
            </div>
          </div>
        </div>

        <div className="p-4 border-t">
          <Button
            color="primary"
            className="w-full bg-[#0A66C2] hover:bg-[#004182]"
          >
            Save Changes
          </Button>
        </div>
      </div>
    </NextUIDrawer>
  );
};
