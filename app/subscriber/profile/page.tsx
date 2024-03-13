"use client";
import { FullFlatButton } from "@/src/components/shared/buttons/full-solid-button";
import { Card, CardContent } from "@/src/components/shared/card";
import { Icon } from "@/src/components/shared/icon";
import { TextInput } from "@/src/components/shared/inputs/text-input";
import { ToggleSwitch } from "@/src/components/shared/inputs/toggle-switch";
import { TabSelector } from "@/src/components/shared/tab-selector";
import { BreadCrumb } from "@/src/components/subscriber/bread-crumb";
import { profileDocuments } from "@/src/mockups/profile-documents";
import { useState } from "react";

const tabItems = [
  { id: "account", label: "Account" },
  { id: "password", label: "Password" },
  { id: "documents", label: "Documents" },
];

export default function Profile() {
  const [selectedTab, setSelectedTab] = useState(tabItems[0].id);
  return (
    <div>
      <BreadCrumb pageName="Profile Settings" />
      <div className="mt-4">
        <Card>
          <CardContent>
            <div className="w-full md:w-1/2">
              <TabSelector
                items={tabItems}
                selectedItem={selectedTab}
                onTabItemChanged={setSelectedTab}
              />
            </div>
            <div className="mt-10 min-h-96">
              {selectedTab === "account" && (
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="w-full flex flex-col md:flex-row gap-6 md:w-3/4">
                    <div className="flex-1">
                      <TextInput type="text" placeholder="First Name" />
                    </div>
                    <div className="flex-1">
                      <TextInput type="text" placeholder="Last Name" />
                    </div>
                  </div>
                  <div className="w-full mt-6 flex flex-col md:flex-row gap-6 md:w-3/4">
                    <div className="flex-1">
                      <TextInput
                        type="email"
                        placeholder="Email"
                        disabled
                        value="luke@sunspace.app"
                      />
                    </div>
                    <div className="flex-1"></div>
                  </div>
                  <div className="flex md:mt-6 gap-4 flex-col md:flex-row md:w-3/4">
                    <div className="flex-1">
                      <TextInput type="text" placeholder="Address 1" />
                    </div>
                    <div className="flex-1">
                      <TextInput type="text" placeholder="Address 2" />
                    </div>
                  </div>
                  <div className="flex mt-4 md:mt-6 gap-4 flex-col md:flex-row md:w-3/4">
                    <div className="flex-1">
                      <TextInput type="text" placeholder="City" />
                    </div>
                    <div className="flex-1 flex gap-4">
                      <div className="flex-1">
                        <TextInput type="text" placeholder="State"></TextInput>
                      </div>
                      <div className="flex-1">
                        <TextInput type="text" placeholder="Zip" />
                      </div>
                    </div>
                  </div>
                  <div className="mt-10 md:pb-16 md:w-3/4">
                    <p className="text-sm text-black font-bold">
                      Email Settings
                    </p>
                    <div className="mt-6 flex gap-4 md:w-1/2">
                      <div className="flex-1">
                        <ToggleSwitch name="Notifications" />
                      </div>
                      <div className="flex-1">
                        <ToggleSwitch name="Newsletters" />
                      </div>
                    </div>
                  </div>
                </form>
              )}
              {selectedTab === "password" && (
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="flex flex-col md:flex-row gap-6 md:w-3/4">
                    <div className="flex-1">
                      <TextInput
                        type="password"
                        placeholder="New Password"
                        endingIcon={
                          <Icon.VisibilityHidden className="h-5 w-5" />
                        }
                      />
                    </div>
                    <div className="flex-1">
                      <TextInput
                        type="password"
                        placeholder="Verify Password"
                        endingIcon={
                          <Icon.VisibilityHidden className="h-5 w-5" />
                        }
                      />
                    </div>
                  </div>
                  <div className="mt-10 md:w-1/4">
                    <FullFlatButton>Save changes</FullFlatButton>
                  </div>
                </form>
              )}
              {selectedTab === "documents" && (
                <div className="md:w-1/2">
                  <div className="flex">
                    <div className="pl-2 font-medium text-xs text-grey justify-start w-full">
                      Description
                    </div>
                    <div className="pl-2 font-medium text-xs text-grey justify-start w-full">
                      Account
                    </div>
                    <div className="w-full"></div>
                  </div>
                  {profileDocuments.map((document, i) => (
                    <div
                      key={i}
                      className="mt-4 flex rounded-xl bg-light-grey text-sm items-center font-medium"
                    >
                      <div className="flex-1 p-2 pt-3 pb-3">
                        {document.description}
                      </div>
                      <div className="flex-1">{document.account}</div>
                      <div className="flex-1 flex justify-end pr-4">
                        <Icon.Download className="w-5 h-5 text-green cursor-pointer" />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
