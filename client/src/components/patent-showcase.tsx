import { Coffee, Tag, Lock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useLocation } from "wouter";

export default function PatentShowcase() {
  const [, setLocation] = useLocation();
  
  const patents = [
    {
      id: "sleeve-integration",
      title: "Coffee Sleeve Integration",
      description: "Breath-freshening elements seamlessly integrated into protective coffee sleeves for maximum convenience.",
      icon: Coffee,
      status: "Learn More",
      statusColor: "bg-brand-gold"
    },
    {
      id: "peel-stick",
      title: "Peel-and-Stick Version",
      description: "Adhesive breath-freshening strips that can be applied to any existing coffee packaging solution.",
      icon: Tag,
      status: "Learn More",
      statusColor: "bg-brand-navy"
    },
    {
      id: "lid-attached",
      title: "Lid-Attached Tamper-Proof",
      description: "Integrated lid system with tamper-evident sealing and breath-freshening technology for premium applications.",
      icon: Lock,
      status: "Learn More",
      statusColor: "bg-brand-gold"
    }
  ];

  return (
    <section id="patents" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-navy mb-4">
            Our Patent Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Three innovative designs protecting our revolutionary approach to coffee packaging enhancement.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {patents.map((patent) => {
            const IconComponent = patent.icon;
            return (
              <div 
                key={patent.id}
                onClick={() => {
                  if (patent.id === 'sleeve-integration') {
                    setLocation('/coffee-sleeve-integration');
                  }
                }}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-brand-gold group"
                data-testid={`patent-card-${patent.id}`}
              >
                <div className={`w-20 h-20 ${patent.id === 'sleeve-integration' ? 'bg-brand-navy' : patent.id === 'peel-stick' ? 'bg-brand-gold' : 'bg-green-600'} rounded-lg flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform`}>
                  <IconComponent className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-brand-navy mb-4 text-center">{patent.title}</h3>
                <p className="text-gray-600 text-center mb-6">{patent.description}</p>
                <div className="text-center">
                  <Badge className={`${patent.statusColor} text-white px-4 py-2 rounded-full text-sm font-medium`}>
                    {patent.status}
                  </Badge>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16">
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=300" 
            alt="Patent technology demonstration" 
            className="rounded-xl shadow-lg w-full h-48 object-cover"
            data-testid="patent-demo-image"
          />
        </div>
      </div>
    </section>
  );
}
