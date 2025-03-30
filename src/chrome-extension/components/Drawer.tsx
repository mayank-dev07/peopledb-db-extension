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
  Input,
  CardBody,
  Link,
  Progress,
  CardHeader,
} from "@nextui-org/react";
import {
  BarChart,
  BarChart2,
  Briefcase,
  ExternalLink,
  Globe,
  Info,
  Linkedin,
  List,
  Mail,
  MapPin,
  MessageSquare,
  Monitor,
  MoreHorizontal,
  MoreVertical,
  Phone,
  Puzzle,
  Rocket,
  Search,
  Send,
  Settings,
  Smartphone,
  Users,
  X,
} from "lucide-react";
import { useEffect, useState, useCallback } from "react";

const ProspectTab = () => {
  const [showPhone, setShowPhone] = useState(false);

  return (
    <div className="max-w-md mx-auto bg-white">
      <Card className="shadow-none border-none">
        <CardBody className="p-0">
          {/* Profile Section */}
          <div className="p-4 pb-6 flex flex-col items-center border-b">
            <Avatar
              className="w-12 h-12 text-black bg-yellow-400 mb-2"
              icon={<div className="text-lg">💡</div>}
            />
            <h2 className="text-lg font-semibold mb-4">Bhagya Mudgal</h2>
            <Button
              color="primary"
              className="w-full"
              startContent={<Phone className="w-5 h-5" />}
              onPress={() => setShowPhone(!showPhone)}
            >
              Show phones
            </Button>

            {showPhone ? (
              <div className="flex items-center gap-2 mt-4 text-gray-600">
                <Smartphone className="w-5 h-5" />
                <span>+91 639 123 4567</span>
              </div>
            ) : (
              <div className="flex items-center gap-2 mt-4 text-gray-600">
                <Smartphone className="w-5 h-5" />
                <span>+91 639••••••</span>
              </div>
            )}
          </div>

          {/* Company Section */}
          <div className="p-4">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-blue-600" />
                <span className="font-semibold">DoKreativ</span>
              </div>
              <Button isIconOnly variant="light" className="min-w-0">
                <MoreVertical className="w-5 h-5" />
              </Button>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2 text-gray-600">
                <Search className="w-5 h-5" />
                <span>View all employees</span>
                <ExternalLink className="w-4 h-4" />
              </div>

              <div className="flex items-center gap-2 text-gray-600">
                <Monitor className="w-5 h-5" />
                <span>dokreativ.com</span>
              </div>

              <div className="flex gap-2 text-gray-600">
                <Info className="w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <div className="text-gray-500">About</div>
                  <div>DoKreativ is a technology consulting firm.</div>
                </div>
              </div>

              <div className="flex gap-2 text-gray-600">
                <Users className="w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <div className="text-gray-500">Number of employees</div>
                  <div>1 - 10</div>
                </div>
              </div>

              <div className="flex gap-2 text-gray-600">
                <BarChart className="w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <div className="text-gray-500">Industry</div>
                  <div>Business Services</div>
                </div>
              </div>

              <div className="flex gap-2 text-gray-600">
                <BarChart className="w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <div className="text-gray-500">Sub industry</div>
                  <div>IT Consulting & IT Services</div>
                </div>
              </div>

              <div className="flex gap-2 text-gray-600">
                <Globe className="w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <div className="text-gray-500">Country</div>
                  <div>India</div>
                </div>
              </div>

              <div className="flex gap-2 text-gray-600">
                <MessageSquare className="w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <div className="text-gray-500">Social media</div>
                  <div className="mt-1">
                    <Linkedin className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

function useLocalSearchFilter() {
  const [searchFilters, setSearchFilters] = useState({
    sortBy: "updatedAt",
    sortOrder: "desc",
    companyName: "",
    domain: "",
    search: "",
    contactName: "",
    jobTitle: "",
    location: [],
    industry: [],
    employeeSize: [],
    departments: [],
    seniority: [],
    zipCode: "",
    country: [],
    state: [],
    city: [],
    linkedinUrl: "",
    industryType: [],
    companySize: [],
    page: 1,
    limit: 10,
  });

  const [searchType, setSearchType] = useState("contacts");

  const getUrlParamsString = useCallback(
    (params = {}, type = searchType) => {
      const urlParams = new URLSearchParams();

      urlParams.append("searchType", type);

      const mergedFilters = {
        ...searchFilters,
        ...params,
      };

      Object.entries(mergedFilters).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          if (value.length > 0) {
            value.forEach((item) => urlParams.append(key, item));
          }
        } else if (value !== "" && value !== null && value !== undefined) {
          urlParams.append(key, String(value));
        }
      });

      return urlParams.toString();
    },
    [searchFilters, searchType]
  );

  const setSearchParams = useCallback((params: any) => {
    setSearchFilters((prev) => ({
      ...prev,
      page: 1,
      ...params,
    }));
    return params;
  }, []);

  const clearFilters = useCallback(() => {
    setSearchFilters({
      sortBy: "updatedAt",
      sortOrder: "desc",
      companyName: "",
      domain: "",
      search: "",
      contactName: "",
      jobTitle: "",
      location: [],
      industry: [],
      employeeSize: [],
      departments: [],
      seniority: [],
      zipCode: "",
      country: [],
      state: [],
      city: [],
      linkedinUrl: "",
      industryType: [],
      companySize: [],
      page: 1,
      limit: 10,
    });
  }, []);

  return {
    searchFilters,
    setSearchFilters,
    searchType,
    setSearchType,
    setSearchParams,
    clearFilters,
    getUrlParamsString,
  };
}

const SearchTab = () => {
  const {
    searchType,
    setSearchType,
    setSearchParams,
    clearFilters,
    getUrlParamsString,
  } = useLocalSearchFilter();

  const [jobTitle, setJobTitle] = useState("");
  const [contactLocation, setContactLocation] = useState("");
  const [department, setDepartment] = useState("");
  const [industry, setIndustry] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyLocation, setCompanyLocation] = useState("");
  const [companySize, setCompanySize] = useState("");

  const clearInputFields = () => {
    setJobTitle("");
    setContactLocation("");
    setDepartment("");
    setIndustry("");
    setCompanyName("");
    setCompanyLocation("");
    setCompanySize("");
  };

  const handleTabChange = (key: string) => {
    clearFilters();
    clearInputFields();

    setSearchType(key);
  };

  const handleSearch = () => {
    let params = {};
    let type = searchType;

    if (searchType === "contacts") {
      params = {
        jobTitle,
        location: contactLocation ? [contactLocation] : [],
        departments: department ? [department] : [],
        industry: industry ? [industry] : [],
      };
    } else if (searchType === "companies") {
      params = {
        companyName,
        location: companyLocation ? [companyLocation] : [],
        companySize: companySize ? [companySize] : [],
        industry: industry ? [industry] : [],
      };
    }

    console.log("Search URL params:", getUrlParamsString(params, type));

    setSearchParams(params);
  };

  return (
    <div className="max-w-md mx-auto bg-white flex flex-col justify-stretch">
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <Search className="w-5 h-5" />
          <h1 className="text-2xl font-bold">Search</h1>
        </div>
      </div>

      <Tabs
        selectedKey={searchType}
        onSelectionChange={handleTabChange as (key: any) => void}
        classNames={{
          tabList:
            "gap-6 w-full relative rounded-none p-0 border-b border-divider",
          cursor: "w-full bg-black h-[2px]",
          tab: "w-full px-0 h-12",
          tabContent: "group-data-[selected=true]:text-black font-medium",
        }}
        className="w-full flex justify-center items-center"
      >
        <Tab
          key="contacts"
          className="w-full"
          title={
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span>Contacts</span>
            </div>
          }
        >
          <div className="mt-4 space-y-4">
            <div>
              <div className="flex items-center gap-2 text-blue-600 mb-1">
                <Briefcase className="w-5 h-5" />
                <span className="font-medium">Job title</span>
              </div>
              <Input
                classNames={{
                  base: "max-w-full",
                  inputWrapper: "border-1 rounded-md h-12",
                }}
                placeholder="Enter Job title"
                startContent={<Search className="w-5 h-5 text-gray-400" />}
                value={jobTitle}
                onValueChange={setJobTitle}
              />
            </div>

            <div>
              <div className="flex items-center gap-2 text-blue-600 mb-1">
                <MapPin className="w-5 h-5" />
                <span className="font-medium">Contact location</span>
              </div>
              <Input
                classNames={{
                  base: "max-w-full",
                  inputWrapper: "border-1 rounded-md h-12",
                }}
                placeholder="Enter Contact location"
                startContent={<Search className="w-5 h-5 text-gray-400" />}
                value={contactLocation}
                onValueChange={setContactLocation}
              />
            </div>

            <div>
              <div className="flex items-center gap-2 text-blue-600 mb-1">
                <Users className="w-5 h-5" />
                <span className="font-medium">Department</span>
              </div>
              <Input
                classNames={{
                  base: "max-w-full",
                  inputWrapper: "border-1 rounded-md h-12",
                }}
                placeholder="Enter Department"
                startContent={<Search className="w-5 h-5 text-gray-400" />}
                value={department}
                onValueChange={setDepartment}
              />
            </div>

            <div>
              <div className="flex items-center gap-2 text-blue-600 mb-1">
                <BarChart className="w-5 h-5" />
                <span className="font-medium">Industry</span>
              </div>
              <Input
                classNames={{
                  base: "max-w-full",
                  inputWrapper: "border-1 rounded-md h-12",
                }}
                placeholder="Enter Main industry"
                startContent={<Search className="w-5 h-5 text-gray-400" />}
                value={industry}
                onValueChange={setIndustry}
              />
            </div>
          </div>
        </Tab>
        <Tab
          key="companies"
          title={
            <div className="flex items-center gap-2">
              <BarChart2 className="w-5 h-5" />
              <span>Companies</span>
            </div>
          }
        >
          <div className="mt-4 space-y-4">
            <div>
              <div className="flex items-center gap-2 text-blue-600 mb-1">
                <BarChart2 className="w-5 h-5" />
                <span className="font-medium">Company name</span>
              </div>
              <Input
                classNames={{
                  base: "max-w-full",
                  inputWrapper: "border-1 rounded-md h-12",
                }}
                placeholder="Enter Company name"
                startContent={<Search className="w-5 h-5 text-gray-400" />}
                value={companyName}
                onValueChange={setCompanyName}
              />
            </div>

            <div>
              <div className="flex items-center gap-2 text-blue-600 mb-1">
                <MapPin className="w-5 h-5" />
                <span className="font-medium">Company location</span>
              </div>
              <Input
                classNames={{
                  base: "max-w-full",
                  inputWrapper: "border-1 rounded-md h-12",
                }}
                placeholder="Enter Contact location"
                startContent={<Search className="w-5 h-5 text-gray-400" />}
                value={companyLocation}
                onValueChange={setCompanyLocation}
              />
            </div>

            <div>
              <div className="flex items-center gap-2 text-blue-600 mb-1">
                <Users className="w-5 h-5" />
                <span className="font-medium">Company size</span>
              </div>
              <Input
                classNames={{
                  base: "max-w-full",
                  inputWrapper: "border-1 rounded-md h-12",
                }}
                placeholder="Enter Company size"
                startContent={<Search className="w-5 h-5 text-gray-400" />}
                value={companySize}
                onValueChange={setCompanySize}
              />
            </div>

            <div>
              <div className="flex items-center gap-2 text-blue-600 mb-1">
                <BarChart className="w-5 h-5" />
                <span className="font-medium">Industry</span>
              </div>
              <Input
                classNames={{
                  base: "max-w-full",
                  inputWrapper: "border-1 rounded-md h-12",
                }}
                placeholder="Enter Industry"
                startContent={<Search className="w-5 h-5 text-gray-400" />}
                value={industry}
                onValueChange={setIndustry}
              />
            </div>
          </div>
        </Tab>
      </Tabs>

      <Button className="w-full mt-4" color="primary" onClick={handleSearch}>
        <Search className="w-5 h-5" />
        <span>Search</span>
      </Button>
    </div>
  );
};

// Activity Tab Component
// const ActivityTab = () => {
//   return (
//     <div className="space-y-4">
//       <h3 className="font-medium text-gray-700">Recent Activity</h3>

//       <div className="space-y-4">
//         {[
//           {
//             action: "Profile viewed",
//             time: "Today, 2:34 PM",
//             icon: <Users className="h-4 w-4 text-blue-500" />,
//           },
//           {
//             action: "Email sent",
//             time: "Yesterday, 11:20 AM",
//             icon: <Mail className="h-4 w-4 text-green-500" />,
//           },
//           {
//             action: "Added to sequence",
//             time: "Aug 24, 2023",
//             icon: <BarChart2 className="h-4 w-4 text-purple-500" />,
//           },
//         ].map((activity, index) => (
//           <div
//             key={index}
//             className="flex items-start space-x-3 p-3 bg-gray-50 rounded-md"
//           >
//             <div className="bg-white p-2 rounded-full shadow-sm">
//               {activity.icon}
//             </div>
//             <div>
//               <p className="font-medium text-gray-800">{activity.action}</p>
//               <p className="text-xs text-gray-500">{activity.time}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       <Button className="w-full" variant="bordered">
//         View All Activity
//       </Button>
//     </div>
//   );
// };

const MoreTab = () => {
  return (
    <div className="max-w-md mx-auto space-y-4">
      <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm">
        <div className="flex items-center gap-3">
          <Avatar
            className="bg-yellow-400 text-black"
            icon={<span className="text-xl">👤</span>}
          />
          <div>
            <h2 className="font-bold text-lg">AYUSH AGRAWAL</h2>
            <div className="flex items-center gap-1 text-sm">
              <span className="text-gray-500">Free plan.</span>
              <Link href="#" className="text-blue-600 font-medium">
                Upgrade
              </Link>
            </div>
          </div>
        </div>
        <Button isIconOnly variant="light" aria-label="Settings">
          <Settings size={20} />
        </Button>
      </div>

      {/* Account Credits Card */}
      <Card className="shadow-sm">
        <CardBody className="gap-4">
          <h3 className="text-lg font-semibold">Account credits</h3>

          <div className="space-y-1">
            <div className="flex justify-between text-sm">
              <span>0 used of 70</span>
            </div>
            <Progress
              value={0}
              maxValue={70}
              classNames={{
                base: "h-2",
                track: "bg-blue-100",
                indicator: "bg-blue-500",
              }}
            />
          </div>

          <div className="text-sm text-gray-500 flex items-center gap-1">
            <span>Last calculated: Mar 10, 2025, 10:56 PM</span>
            <Link href="#" className="text-blue-600 font-medium">
              Update
            </Link>
          </div>

          <div className="bg-gray-50 p-3 rounded-lg">
            <p className="text-sm font-medium mb-2">cost per contact:</p>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Phone size={18} className="text-gray-500" />
                  <span className="text-gray-500">phone</span>
                </div>
                <span className="font-medium">10 credits</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Mail size={18} className="text-gray-500" />
                  <span className="text-gray-500">email</span>
                </div>
                <span className="font-medium">1 credit</span>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>

      {/* PeopleDB Platform Card */}
      <Card className="shadow-sm">
        <CardHeader className="pb-0">
          <h3 className="text-lg font-semibold">PeopleDB platform</h3>
        </CardHeader>
        <CardBody>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Rocket size={18} className="text-gray-500" />
                <span>Onboarding</span>
              </div>
              <ExternalLink size={16} className="text-gray-400" />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Search size={18} className="text-gray-500" />
                <span>Prospecting platform</span>
              </div>
              <ExternalLink size={16} className="text-gray-400" />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Send size={18} className="text-gray-500" />
                <span>Sequences</span>
              </div>
              <ExternalLink size={16} className="text-gray-400" />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <List size={18} className="text-gray-500" />
                <span>Lists</span>
              </div>
              <ExternalLink size={16} className="text-gray-400" />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Puzzle size={18} className="text-gray-500" />
                <span>Integrations</span>
              </div>
              <ExternalLink size={16} className="text-gray-400" />
            </div>
          </div>
        </CardBody>
      </Card>
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
      try {
        if (event.data && event.data.type === "OPEN_PEOPLEDB_DRAWER") {
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
      // case "activity":
      //   return <ActivityTab />;
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

            <DrawerFooter className="border-t bg-white !pt-4 h-20 !py-2 flex items-center justify-center">
              <Tabs
                selectedKey={activeTab}
                onSelectionChange={(key) => setActiveTab(key as string)}
                variant="underlined"
                classNames={{
                  base: "w-full",
                  tabList: "w-full grid grid-cols-3 py-2",
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
                {/* <Tab
                  key="activity"
                  title={
                    <div className="flex flex-col items-center ">
                      <Clock className="h-5 w-5" />
                      <span className="text-xs mt-1">Activity</span>
                    </div>
                  }
                /> */}
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
