import React from 'react';
import { cn } from '../../lib/utils';
import { Card, CardContent } from '../ui/Card';

interface StatCardProps {
  title: string;
  value: string;
  description?: string;
  icon: React.ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  description,
  icon,
  trend,
  className,
}) => {
  return (
    <Card className={cn('overflow-hidden', className)}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">{title}</p>
            <h3 className="text-2xl font-bold text-gray-900 mt-1">{value}</h3>
            
            {trend && (
              <div className="flex items-center mt-1">
                <span
                  className={cn(
                    'text-xs font-medium',
                    trend.isPositive ? 'text-green-600' : 'text-red-600'
                  )}
                >
                  {trend.isPositive ? '+' : '-'}{Math.abs(trend.value)}%
                </span>
                {description && (
                  <span className="text-xs text-gray-500 ml-1">
                    {description}
                  </span>
                )}
              </div>
            )}
            
            {!trend && description && (
              <p className="text-xs text-gray-500 mt-1">{description}</p>
            )}
          </div>
          
          <div className="rounded-full p-3 bg-brand-50 text-brand-600">
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatCard;