import { useState } from "react";
import { Play, Pause, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

interface AudioPlayerProps {
  title: string;
  duration: string;
}

const AudioPlayer = ({ title, duration }: AudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState([0]);

  return (
    <div className="p-4 bg-secondary rounded-2xl space-y-3">
      <div className="flex items-center gap-3">
        <Button
          size="icon"
          onClick={() => setIsPlaying(!isPlaying)}
          className="gradient-hero shadow-soft w-12 h-12"
        >
          {isPlaying ? (
            <Pause className="w-5 h-5" />
          ) : (
            <Play className="w-5 h-5 ml-0.5" />
          )}
        </Button>
        <div className="flex-1">
          <p className="font-medium text-sm">{title}</p>
          <p className="text-xs text-muted-foreground">{duration}</p>
        </div>
        <Volume2 className="w-5 h-5 text-muted-foreground" />
      </div>
      <Slider
        value={progress}
        onValueChange={setProgress}
        max={100}
        step={1}
        className="cursor-pointer"
      />
    </div>
  );
};

export default AudioPlayer;
