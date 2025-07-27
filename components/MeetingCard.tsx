"use client";

import Image from "next/image";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { avatarImages } from "@/constants";
import { useToast } from "./ui/use-toast";

interface MeetingCardProps {
  title: string;
  date: string;
  icon: string;
  isPreviousMeeting?: boolean;
  buttonIcon1?: string;
  buttonText?: string;
  handleClick: () => void;
  link: string;
}

const MeetingCard = ({
  icon,
  title,
  date,
  isPreviousMeeting,
  buttonIcon1,
  handleClick,
  link,
  buttonText,
}: MeetingCardProps) => {
  const { toast } = useToast();

  return (
    <section className="flex min-h-[320px] w-full flex-col justify-between rounded-[20px] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gray-700 px-8 py-10 xl:max-w-[620px] shadow-2xl shadow-black/50 hover:shadow-3xl hover:shadow-black/60 hover:scale-[1.02] transition-all duration-500 ease-out backdrop-blur-sm">
      <article className="flex flex-col gap-6">
        <div className="p-3 bg-gray-800/50 rounded-xl w-fit backdrop-blur-sm border border-gray-600/30">
          <Image src={icon} alt="upcoming" width={32} height={32} />
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-3">
            <h1 className="text-3xl font-bold text-white tracking-tight leading-tight">{title}</h1>
            <p className="text-lg font-medium text-gray-300">{date}</p>
          </div>
        </div>
      </article>
      <article className={cn("flex justify-center relative", {})}>
        <div className="relative flex w-full max-sm:hidden">
          {avatarImages.map((img, index) => (
            <div
              key={index}
              className={cn("border-2 border-gray-700 rounded-full", { absolute: index > 0 })}
              style={{ top: 0, left: index * 32 }}
            >
              <Image
                src={img}
                alt="attendees"
                width={44}
                height={44}
                className="rounded-full"
              />
            </div>
          ))}
          <div className="flex-center absolute left-[160px] size-12 rounded-full border-[3px] border-gray-600 bg-gradient-to-br from-gray-700 to-gray-800 text-white text-sm font-semibold shadow-lg">
            +5
          </div>
        </div>
        {!isPreviousMeeting && (
          <div className="flex gap-3">
            <Button 
              onClick={handleClick} 
              className="rounded-xl bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 border border-gray-500 px-8 py-3 text-white font-semibold transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg shadow-md transform"
            >
              {buttonIcon1 && (
                <Image src={buttonIcon1} alt="feature" width={22} height={22} />
              )}
              &nbsp; {buttonText}
            </Button>
            <Button
              onClick={() => {
                navigator.clipboard.writeText(link);
                toast({
                  title: "Link Copied",
                });
              }}
              className="rounded-xl bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 border border-gray-500 px-8 py-3 text-white font-semibold transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg shadow-md transform"
            >
              <Image
                src="/icons/copy.svg"
                alt="feature"
                width={22}
                height={22}
              />
              &nbsp; Copy Link
            </Button>
          </div>
        )}
      </article>
    </section>
  );
};

export default MeetingCard;