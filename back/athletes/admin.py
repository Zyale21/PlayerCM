from django.contrib import admin

from athletes.models import Athlete, SocialAccount, Sport, SportStat

# Register your models here.


class SportInline(admin.TabularInline):
    model = Sport
    extra = 1
    show_change_link = True


class SportStatInline(admin.StackedInline):
    model = SportStat
    extra = 1


class SocialAccountInline(admin.TabularInline):
    model = SocialAccount
    extra = 1


class AthleteAdmin(admin.ModelAdmin):
    fieldsets = [
        (
            "Bio",
            {
                "fields": [
                    "first_name",
                    "last_name",
                    "weight_lbs",
                    "height_inches",
                ]
            },
        ),
        (
            "Personal info",
            {
                "fields": [
                    "school",
                    "class_of",
                    "hometown",
                    "interests",
                ]
            },
        ),
        (None, {"fields": ["summary"]}),
    ]
    inlines = [SportInline, SocialAccountInline]


class SportAdmin(admin.ModelAdmin):
    model = SportStat
    fields = ["athlete", "name"]
    inlines = [SportStatInline]


admin.site.register(Athlete, AthleteAdmin)
admin.site.register(Sport, SportAdmin)
