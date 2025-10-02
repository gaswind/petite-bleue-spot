import { useMemo, useState, type ReactNode } from "react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";

interface ReservationDialogProps {
  trigger: ReactNode;
}

const timeSlots = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
];

const guestOptions = ["1", "2", "3", "4", "5", "6"];

const ReservationDialog = ({ trigger }: ReservationDialogProps) => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [time, setTime] = useState<string>("12:00");
  const [guests, setGuests] = useState<string>("2");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const { toast } = useToast();

  const minSelectableDate = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return today;
  }, []);

  const formattedDate = date ? format(date, "PPP", { locale: fr }) : "Choisir une date";

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!date || !time || !name || !email || !phone) {
      toast({
        title: "Informations manquantes",
        description: "Merci de remplir tous les champs pour finaliser votre demande de réservation.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Demande envoyée",
      description: `Nous reviendrons vers vous rapidement pour confirmer votre réservation du ${formattedDate} à ${time}.`,
    });

    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Réserver une table</DialogTitle>
          <DialogDescription>
            Choisissez votre créneau et indiquez vos coordonnées pour que nous puissions confirmer votre réservation.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="reservation-date">Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    id="reservation-date"
                    variant="outline"
                    type="button"
                    className="w-full justify-start text-left font-normal"
                  >
                    {formattedDate}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    disabled={(selectedDate) => selectedDate < minSelectableDate}
                    locale={fr}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="space-y-2">
              <Label htmlFor="reservation-time">Horaire</Label>
              <Select value={time} onValueChange={setTime}>
                <SelectTrigger id="reservation-time" className="w-full">
                  <SelectValue placeholder="Sélectionnez un horaire" />
                </SelectTrigger>
                <SelectContent>
                  {timeSlots.map((slot) => (
                    <SelectItem key={slot} value={slot}>
                      {slot}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="reservation-guests">Nombre de convives</Label>
              <Select value={guests} onValueChange={setGuests}>
                <SelectTrigger id="reservation-guests" className="w-full">
                  <SelectValue placeholder="Nombre de personnes" />
                </SelectTrigger>
                <SelectContent>
                  {guestOptions.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option} {Number(option) > 1 ? "personnes" : "personne"}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="reservation-name">Nom</Label>
              <Input
                id="reservation-name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Votre nom"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="reservation-email">Email</Label>
              <Input
                id="reservation-email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="vous@example.com"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="reservation-phone">Téléphone</Label>
              <Input
                id="reservation-phone"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                placeholder="06 12 34 56 78"
                required
              />
            </div>
          </div>
          <DialogFooter className="sm:justify-between">
            <div className="text-sm text-muted-foreground">
              Nous vous contacterons pour confirmer votre réservation de {guests} {Number(guests) > 1 ? "personnes" : "personne"}.
            </div>
            <Button type="submit">Envoyer ma demande</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ReservationDialog;
