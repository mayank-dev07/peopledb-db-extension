import {
  Drawer as NextUIDrawer,
  Button,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  useDisclosure,
  Card,
  Avatar,
  Tabs,
  Tab,
} from "@nextui-org/react";
import {
  BarChart2,
  Clock,
  Computer,
  ExternalLink,
  Info,
  ListFilter,
  Mail,
  Menu,
  MoreHorizontal,
  Plus,
  Search,
  Users,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

// Prospect Tab Component
const ProspectTab = () => {
  return (
    <main className="flex-1 overflow-auto">
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-300">
            <span className="text-lg">🧠</span>
          </div>
          <div>
            <h2 className="font-semibold text-gray-900">Assaf Eisenstein</h2>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <Button
            variant="bordered"
            className="h-12 justify-start px-4 py-2 border-blue-200 text-blue-600 bg-blue-50 hover:bg-blue-100"
          >
            <Computer className="h-4 w-4 mr-2" />
            <span>CRM</span>
          </Button>
          <Button
            variant="bordered"
            className="h-12 justify-start px-4 py-2 border-blue-200 text-blue-600 bg-blue-50 hover:bg-blue-100"
          >
            <ListFilter className="h-4 w-4 mr-2" />
            <span>List</span>
          </Button>
          <Button
            variant="bordered"
            className="h-12 justify-start px-4 py-2 border-blue-200 text-blue-600 bg-blue-50 hover:bg-blue-100"
          >
            <BarChart2 className="h-4 w-4 mr-2" />
            <span>Sequence</span>
          </Button>
        </div>

        <div className="space-y-3">
          <div className="flex items-center text-sm text-gray-500">
            <span>Contact saved to:</span>
            <Avatar className="h-4 w-4 ml-1 bg-black text-white">
              <span className="text-[8px] font-bold">L</span>
            </Avatar>
          </div>

          <div className="flex items-center text-sm">
            <Mail className="h-4 w-4 mr-2 text-gray-400" />
            <span className="text-gray-700">assaf@lusha.com</span>
          </div>

          <button className="flex items-center text-sm text-blue-600">
            <Plus className="h-4 w-4 mr-1" />
            <span>Add tags</span>
          </button>
        </div>

        <Card className="p-3 mt-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-600 text-white">
                <span className="text-xs font-bold">L</span>
              </div>
              <span className="font-semibold">Lusha</span>
            </div>
            <Button variant="ghost" className="h-8 w-8">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </Card>

        <div className="space-y-4 mt-1">
          <button className="flex items-center text-sm text-gray-600">
            <Search className="h-4 w-4 mr-2 text-gray-400" />
            <span>View all employees</span>
            <ExternalLink className="h-3 w-3 ml-1 text-gray-400" />
          </button>

          <div className="flex items-center text-sm text-gray-600">
            <Computer className="h-4 w-4 mr-2 text-gray-400" />
            <span>lusha.com</span>
          </div>

          <div className="space-y-1">
            <div className="flex items-center text-sm text-gray-600">
              <Info className="h-4 w-4 mr-2 text-gray-400" />
              <span>About</span>
            </div>
            <p className="text-sm text-gray-600 ml-6">
              Lusha helps business professionals establish a fast and true
              connection with their leads, contacts, and candidates. B2B
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

// Search Tab Component
const SearchTab = () => {
  return (
    <div className="space-y-4">
      <div className="relative">
        <input
          type="text"
          placeholder="Search for people..."
          className="w-full p-2 pl-9 border rounded-md"
        />
        <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
      </div>

      <div className="space-y-3">
        <h3 className="font-medium text-gray-700">Recent Searches</h3>
        <div className="space-y-2">
          {["Marketing Directors", "Software Engineers", "VPs of Sales"].map(
            (search, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2 text-gray-400" />
                  <span className="text-sm text-gray-600">{search}</span>
                </div>
                <Button isIconOnly size="sm" variant="light">
                  <Search className="h-4 w-4 text-gray-400" />
                </Button>
              </div>
            )
          )}
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="font-medium text-gray-700">Suggested Searches</h3>
        <div className="grid grid-cols-2 gap-2">
          {["Marketing", "Sales", "Engineering", "Design"].map(
            (category, index) => (
              <Button
                key={index}
                variant="flat"
                className="justify-start text-sm bg-gray-100"
              >
                {category}
              </Button>
            )
          )}
        </div>
      </div>
    </div>
  );
};

// Activity Tab Component
const ActivityTab = () => {
  return (
    <div className="space-y-4">
      <h3 className="font-medium text-gray-700">Recent Activity</h3>

      <div className="space-y-4">
        {[
          {
            action: "Profile viewed",
            time: "Today, 2:34 PM",
            icon: <Users className="h-4 w-4 text-blue-500" />,
          },
          {
            action: "Email sent",
            time: "Yesterday, 11:20 AM",
            icon: <Mail className="h-4 w-4 text-green-500" />,
          },
          {
            action: "Added to sequence",
            time: "Aug 24, 2023",
            icon: <BarChart2 className="h-4 w-4 text-purple-500" />,
          },
        ].map((activity, index) => (
          <div
            key={index}
            className="flex items-start space-x-3 p-3 bg-gray-50 rounded-md"
          >
            <div className="bg-white p-2 rounded-full shadow-sm">
              {activity.icon}
            </div>
            <div>
              <p className="font-medium text-gray-800">{activity.action}</p>
              <p className="text-xs text-gray-500">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>

      <Button className="w-full" variant="bordered">
        View All Activity
      </Button>
    </div>
  );
};

// More Tab Component
const MoreTab = () => {
  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <h3 className="font-medium text-gray-700">Actions</h3>
        <p className="text-xs text-gray-500">Additional tools and features</p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {[
          { name: "Export", icon: <ExternalLink className="h-4 w-4 mr-2" /> },
          { name: "Share", icon: <Users className="h-4 w-4 mr-2" /> },
          { name: "Settings", icon: <Menu className="h-4 w-4 mr-2" /> },
          { name: "Help", icon: <Info className="h-4 w-4 mr-2" /> },
        ].map((action, index) => (
          <Button
            key={index}
            variant="flat"
            className="justify-start bg-gray-50"
          >
            {action.icon}
            <span>{action.name}</span>
          </Button>
        ))}
      </div>

      <div className="p-3 bg-blue-50 rounded-md border border-blue-100">
        <h4 className="font-medium text-blue-800 mb-1">Upgrade to Pro</h4>
        <p className="text-xs text-blue-600 mb-2">
          Get unlimited access to all features
        </p>
        <Button color="primary" size="sm" className="w-full">
          Learn More
        </Button>
      </div>
    </div>
  );
};

export const Drawer = () => {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const [activeTab, setActiveTab] = useState("prospect");

  useEffect(() => {
    const handleOpenDrawer = () => {
      onOpen();
    };

    const handleMessage = (event: MessageEvent) => {
      console.log("Received message:", event.data);
      try {
        if (event.data && event.data.type === "OPEN_PEOPLEDB_DRAWER") {
          console.log("Opening drawer");
          onOpen();
        }
      } catch (error) {
        console.error("Error handling message:", error);
      }
    };

    window.addEventListener("openPeopleDBDrawer", handleOpenDrawer);
    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("openPeopleDBDrawer", handleOpenDrawer);
      window.removeEventListener("message", handleMessage);
    };
  }, [onOpen]);

  const handleClose = () => {
    onClose();
    window.parent.postMessage({ type: "CLOSE_PEOPLEDB_DRAWER" }, "*");
  };

  const handleOpenChange = () => {
    onOpenChange();
    if (!isOpen) {
      window.parent.postMessage({ type: "CLOSE_PEOPLEDB_DRAWER" }, "*");
    }
  };

  // Render the active tab content
  const renderTabContent = () => {
    switch (activeTab) {
      case "prospect":
        return <ProspectTab />;
      case "search":
        return <SearchTab />;
      case "activity":
        return <ActivityTab />;
      case "more":
        return <MoreTab />;
      default:
        return <ProspectTab />;
    }
  };

  return (
    <NextUIDrawer
      isOpen={isOpen}
      onOpenChange={handleOpenChange}
      placement="right"
      size="md"
      hideCloseButton={true}
    >
      <DrawerContent className="bg-white shadow-lg">
        {() => (
          <>
            <DrawerHeader className="flex items-center justify-between p-4 border-b">
              <h2 className="text-xl font-semibold text-gray-800">PeopleDB</h2>
              <Button
                isIconOnly
                variant="light"
                onPress={handleClose}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-5 w-5" />
              </Button>
            </DrawerHeader>

            <DrawerBody className="p-4 overflow-y-auto">
              {renderTabContent()}
            </DrawerBody>

            <DrawerFooter className="border-t bg-white pt-3 h-20">
              <Tabs
                selectedKey={activeTab}
                onSelectionChange={(key) => setActiveTab(key as string)}
                variant="underlined"
                classNames={{
                  base: "w-full",
                  tabList: "w-full grid grid-cols-4 py-2",
                  cursor: "bg-blue-500",
                  tab: "pb-4",
                }}
                aria-label="Drawer tabs"
              >
                <Tab
                  key="prospect"
                  title={
                    <div className="flex flex-col items-center ">
                      <Users className="h-5 w-5" />
                      <span className="text-xs mt-1">Prospect</span>
                    </div>
                  }
                />
                <Tab
                  key="search"
                  title={
                    <div className="flex flex-col items-center ">
                      <Search className="h-5 w-5" />
                      <span className="text-xs mt-1">Search</span>
                    </div>
                  }
                />
                <Tab
                  key="activity"
                  title={
                    <div className="flex flex-col items-center ">
                      <Clock className="h-5 w-5" />
                      <span className="text-xs mt-1">Activity</span>
                    </div>
                  }
                />
                <Tab
                  key="more"
                  title={
                    <div className="flex flex-col items-center ">
                      <MoreHorizontal className="h-5 w-5" />
                      <span className="text-xs mt-1">More</span>
                    </div>
                  }
                />
              </Tabs>
            </DrawerFooter>
          </>
        )}
      </DrawerContent>
    </NextUIDrawer>
  );
};
